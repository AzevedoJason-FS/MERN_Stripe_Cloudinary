const Bio = require('../model/aboutModel');
const cloudinary = require('cloudinary')
const fs = require('fs');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY
})

const allBio = (req, res) => {
    try{
        Bio.find().lean()
        .then(result => {
            res.status(200).json({
                Bio: result
            })
        })
        .catch(err => {
        res.status(500).json({message: err.response.data})
        });
       } catch(err){
        res.status(500).json({message: err.response.data})
       }
}

const uploadBio = async (req,res) => {
    try{
        //get file
        const file = req.file;

        //upload to cloudinary
        cloudinary.v2.uploader.upload(
            file.path,
            {
                folder: 'images',

            }, (err, result) => {
                if(err) throw err;
                fs.unlinkSync(file.path)
                res.status(200).json({message: 'Upload Successful!', url: result.secure_url, public_id: result.public_id})
                 
                //save to db
                const newImage = new Bio({
                    bio_image: result.secure_url,
                    public_id: result.public_id
                });
    
                newImage.save()
            }
        )
    } catch(err){
        res.status(500).json({message: err.response.data})
    }
}

module.exports = { allBio, uploadBio }