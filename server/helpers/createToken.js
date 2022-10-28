const jwt = require('jsonwebtoken')

const createToken = {
    refresh: (id) => {
        return jwt.sign(id, process.env.JWT_SECRET_REFRESH, {expiresIn: 86400 }) //24hr
    },
    access: (id) => {
        return jwt.sign(id, process.env.JWT_SECRET, {expiresIn: 3600 }) //1hr
    }
}

module.exports = createToken;