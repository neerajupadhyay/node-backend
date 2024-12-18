// using promiss 
const asyncHandler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}



// useing try catch
// const asyncHandler = (fn) => async (req,res,next) =>{
//     try {
        
//     } catch (error) {
//         res.status(error.code||500).json({
//             sucess:false,
//             message:error.message
//         })
//     }
// }
 export {asyncHandler}