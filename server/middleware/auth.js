const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.header("Authorization")
    try{    
        if(!token) return res.status(400).json({message: 'No Token, Authentication Denied'})

        //validate
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.status(400).json({message: 'Invalid Token, Authentication Failed'})
            //success
            req.user = user
            next();
        })
        
    } catch(err){
        res.clearCookie(token)
        return res.redirect('/')
    }
}

module.exports = auth;