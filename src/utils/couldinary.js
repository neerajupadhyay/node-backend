import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({ 
    cloud_name: process.env.COULDINARY_CLIENT_NAME, 
    api_key: process.env.COULDINARY_API_KEY, 
    api_secret: process.env.COULDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // Upload the file on cloundinary 
        
     const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        // file has been uploaded sucessfully
        // console.log('file uploaded on cloudinary',response)
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        // remove file from local server 
        console.log('error',error)
        fs.unlinkSync(localFilePath);
        return null
    }

}
export {uploadOnCloudinary}