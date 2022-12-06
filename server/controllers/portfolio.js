const User = require('../model/userModel');
const Image = require('../model/imageModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const createToken = require('../helpers/createToken')
const cloudinary = require('cloudinary')
const fs = require('fs');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY
})
const now = new Date()

// const register = async(req, res) => {
//     try{
//         // get info
//         const {email, password} = req.body

//         // hash password
//         const salt = await bcrypt.genSalt()
//         const hashPassword = await bcrypt.hash(password, salt)

//         //Store new user in DB
//         const newUser = new User({
//             _id: mongoose.Types.ObjectId(),
//             email: email,
//             password: hashPassword,
//           });

//         //Adding new document to DB
//         await newUser.save()

//         //Sucess
//         res.status(200).json({message: 'User Created Successfuly'})

//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// }

const signin = async (req, res) => {
    try{
        //get credentials
        const {email, password} = req.body

        //check email
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({message: 'This email is not registered'})

        //check password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({message: 'This password is incorrect'})

        // Creating refresh token not that expiry of refresh 
        const refreshToken = createToken.refresh({ id: user._id })

        // Successful, assigning refresh token in http-only cookie 
        res.cookie('jwt', refreshToken, { 
            httpOnly: true, 
            path: '/api/auth/access',
            maxAge: 24 * 60 * 60 * 1000 //24hr
        })

        //signin success
        res.status(200).json({message: 'Signin Success'})
        
    }catch(err){
        res.status(500).json({message: err.message })
    }
}

const access = (req, res) => {
    try{
        //get refresh token
        const refresh_token = req.cookies.jwt

        if(!refresh_token) return res.status(400).json({message: 'Please Sign in'})

        // validate token
        jwt.verify(refresh_token, process.env.JWT_SECRET_REFRESH, (err, user) => {
            if(err) return res.status(400).json({ message: 'Please Sign in' })
            // create access token
            const access_token = createToken.access({id: user.id})
            // access success
            return res.status(200).json({ access_token});
        })        
    } catch(err){
        return res.status(500).json({message: err.message})
    }
}

const signout = async (req, res) => {
    try{
        //clear cookie
        res.clearCookie("jwt", {path: "/api/auth/access"})
    
        //success
        return res.status(200).json({ message: "Signout successful"})
    } catch(err){
        res.status(500).json({ message: err.message })
    }
}

const upload = async (req,res) => {
    try{
        //get file
        const file = req.file;

        //upload to cloudinary
        await cloudinary.v2.uploader.upload(
            file.path,
            {
                folder: 'images',
                format: 'webp',
                quality: '90',
                crop: 'limit',
                height: 800, 
                width: 600,
            }, (err, result) => {
                if(err) throw err;
                fs.unlinkSync(file.path)
                 
                //save to db
                const newImage = new Image({
                    image: result.secure_url,
                    public_id: result.public_id,
                    created_at: new Date()
                });
    
                newImage.save()
                res.status(200).json(newImage)
            }
        )
    } catch(err){
        res.status(500).json({message: err.response.data})
    }
}

const deleteImage = async (req, res) => {
    try{
        const {public_id} = req.body

        await cloudinary.v2.uploader
        .destroy(public_id)
        .then(() => {
            Image.deleteOne({"public_id" :  public_id})
            .exec()
            .then(() => {
                res.status(200).json({
                    message: "Image Successfully Deleted",
                })
            })
        })

    } catch(err){
        res.status(500).json({ error: { message: err.message }})
    }
}

const all = (req,res) => {
   try{
    Image.find().lean().sort({ created_at: -1 })
    .then(result => {
        res.status(200).json({
            Images: result
        })
    })
    .catch(err => {
    res.status(500).json({message: err.response.data})
    });
   } catch(err){
    res.status(500).json({message: err.response.data})
   }
};


module.exports = { all, upload, signin, access, signout, deleteImage }