const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    admin: {
        type: Boolean,
        default: false
    },
    email:{
        type: String,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        min: 6
    }
},{timestamp: true});

const User = mongoose.model("User", userSchema);

module.exports = User;