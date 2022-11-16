const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const portfolioCtrl = require("./controllers/portfolio");
const contactCtrl = require('./controllers/contactsCtrl')
const paymentCtrl = require("./controllers/payments");
const bioCtrl = require('./controllers/bioCtrl')
const uploadImage = require('./middleware/uploadImage');
const upload = require('./middleware/upload');
const auth = require('./middleware/auth')

//Middleware request all JSON
app.use(express.json());

//Middleware to use cookies
app.use(cookieparser());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

//Admin POST and GET
// app.post('/api/auth/register', portfolioCtrl.register);
app.post('/api/auth/signin', portfolioCtrl.signin);
app.get('/api/signout', portfolioCtrl.signout)
app.post('/api/auth/access', portfolioCtrl.access)
app.post('/api/auth/upload', uploadImage, upload, auth, portfolioCtrl.upload);
app.post('/api/auth/add-contact', auth, contactCtrl.addContact);
app.delete('/api/auth/remove-contact', auth, contactCtrl.deleteContact);
app.get('/api/all-contacts', contactCtrl.allContacts);
app.delete('/api/auth/remove-image', auth, portfolioCtrl.deleteImage);
app.post('/api/auth/upload-bio', uploadImage, upload, auth, bioCtrl.uploadBio)
app.get("/api/all-bio", bioCtrl.allBio);
app.get("/api/all", portfolioCtrl.all);

//Stripe
app.get('/api/payment/stripe', paymentCtrl.pay)

//Parsing middleware
app.use(express.urlencoded({
    extended: true
}));

app.use('./uploads/', express.static('uploads'));

app.use(cors());

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });
    
//Middleware modules for Error Handling
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});

//Middleware modules to send Error neatly
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
},(err) => {
    if(err){
        console.error("Error: ", err.message);
    }
    else{
        console.log("MongoDB Connection Successful")
    }
});
