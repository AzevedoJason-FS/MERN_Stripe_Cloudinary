const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    contact_name:{
        type: String
    },
    contact_detail:{
        type: String
    },
    contact_link:{
        type: String
    }
},{timestamp: true});

const Contact = mongoose.model("Contacts", contactSchema);

module.exports = Contact;