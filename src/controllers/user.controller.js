import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import {User} from "../models/user.model.js" 
import {uploadOnCloudinary} from  "../utils/couldinary.js"

const registerUser = asyncHandler(async (req,res) => {
  const {userName,fullName,email,password} = req.body

    if([userName,fullName,email,password].some((field) => field.trim() ==="")){
        throw new ApiError(400,"All fields required");
        
    }
    const exitedUser = await User.findOne({
        $or:[{userName},{email}]
    })
    if(exitedUser){
        throw new ApiError(409,"User with email or username already exit ")
    }

    const avtarLocalPath = req.files?.avtar[0]?.path
    const coverImageLocalPath = req.files &&  req.files.coverImage ? req.files.coverImage[0].path:""
   
    if(!avtarLocalPath){
        throw new ApiError(400,"Avtar Image is required ")
    }
 const avtar =await uploadOnCloudinary(avtarLocalPath)
 const coverImage =await uploadOnCloudinary(coverImageLocalPath)
 
 if(!avtar){
    throw new ApiError(400,"Avtar Image is required ")
}
    const userData = await User.create({
        fullName,
        avtar:avtar.url,
        coverImage:coverImage?.url||"",
        userName:userName.toLowerCase(),
        email,
        password
    })
    const createdUser = await User.findById(userData._id).select(
        "-password -refreshToken"
    )
    
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while user registering ")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser, "User registered Successfully")
    )
 
})

export {registerUser}