const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {
    const { authorization } = req.headers
    const jwtToken = authorization.split(' ')[1]

    if (!jwtToken) {
        res.status(403)
        res.json({ message: 'JWT Token not found' })
    }

    jwt.verify(jwtToken, 'saravanan', (err, payload) => {
        if (err) {
            res.status(401)
            return res.json({ message: 'Unauthorised user' })
        }

        req.userId = payload.userId
        next()
    })
}

module.exports = authenticate
