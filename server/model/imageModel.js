const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    image: {
        type: String,
    },
    public_id:{
        type: String
    }
},{timestamp: true});

const Image = mongoose.model("Images", imageSchema);

module.exports = Image;