const Bio = require('../model/aboutModel');
const cloudinary = require('cloudinary')
const fs = require('fs');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY
})

const allBio = async (req, res) => {
    try{
        await Bio.find().lean().sort({ created_at: -1 })
        .then(result => {
            res.status(200).json(result)
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
        const { bio_detail } = req.body;

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
                const newBio = new Bio({
                    bio_image: result.secure_url,
                    public_id: result.public_id,
                    bio_detail: bio_detail
                });
    
                newBio.save();
                res.status(200).json(newBio)
            }
        )

    } catch(err){
        fs.unlinkSync(file.path)
        res.status(500).json({message: err.response.data})
    }
}

const deleteBio = async (req, res) => {
    const {_id, public_id} = req.body
    try{
        await cloudinary.v2.uploader
        .destroy(public_id)
        .then(() => {
            Bio.deleteOne({"_id" :  _id})
            .exec()
            .then(result => {
                res.status(200).json({
                    message: "Bio Successfully Deleted",
                })
            })
        })
    } catch(err){
        res.status(500).json({ error: { message: err.message }})
    }
}

module.exports = { allBio, uploadBio, deleteBio }