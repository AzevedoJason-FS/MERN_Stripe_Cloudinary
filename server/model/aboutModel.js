const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
    bio_image:{
        type: String
    },
    public_id:{
        type: String
    },
    bio_detail:{
        type: String
    },
},{timestamp: true});

const About = mongoose.model("About", aboutSchema);

module.exports = About;