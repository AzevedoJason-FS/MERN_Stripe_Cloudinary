const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try{    
        //check access token
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({message: 'No Token, Authentication Denied'})

        //validate
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.status(400).json({message: 'Invalid Token, Authentication Failed'})
            //success
            req.user = user
            next();
        })
        
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = auth;