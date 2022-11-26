const jwt = require('jsonwebtoken')

const createToken = {
    refresh: (id) => {
        return jwt.sign(id, process.env.JWT_SECRET_REFRESH, {expiresIn: '24h' }) //24hr
    },
    access: (id) => {
        return jwt.sign(id, process.env.JWT_SECRET, {expiresIn: '1h' })
    }
}

module.exports = createToken;