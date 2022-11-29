const Contact = require('../model/contactModel');
const mongoose = require("mongoose");

const allContacts = (req, res) => {
    try{
        Contact.find().lean().sort({ created_at: -1 })
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

const addContact = async (req, res) => {
    try{
         // get info
         const { contact_name, contact_detail } = req.body
 
         //Store new user in DB
         const newContact = new Contact({
             _id: mongoose.Types.ObjectId(),
             contact_name: contact_name,
             contact_detail: contact_detail,
           });
 
         //Adding new document to DB
         await newContact.save()
 
         //Sucess
         res.status(200).json(newContact)
    }catch(err){
        res.status(500).json({message: err.response.data})
    }
}

const deleteContact = async (req, res) => {
    try{
        const {_id} = req.body

        Contact.deleteOne({"_id" :  _id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Contact Successfully Deleted",
            })
        })
    } catch(err){
        res.status(500).json({ error: { message: err.message }})
    }
}

module.exports = { addContact, allContacts, deleteContact }