const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { v4: uuid } = require('uuid')
const jwt = require('jsonwebtoken')

const db = require('../db')
const authenticate = require('../middlewares/authenticate')

// SIGNUP - Add New Users
router.post('/signup', async (req, res) => {
    const { name, email, password, phone, status = 'ACTIVE' } = req.body

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const getUserByEmailQuery = `SELECT * FROM users WHERE email = '${email}';`

    try {
        const user = await db.query(getUserByEmailQuery)

        if (user[0].length >= 1) {
            res.status(400)
            res.json({ message: 'User email already exists' })
        } else {
            const insertUserQuery = `INSERT INTO users (id, name, email, password, phone, status) VALUES ('${uuid()}', '${name}', '${email}', '${hashedPassword}', '${phone}', '${status}');`
            const result = await db.query(insertUserQuery)

            res.status(201)
            res.json({ message: 'User added successfully' })
        }
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
})

// SIGNIN - Login New Users
router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    try {
        const userDetailsQuery = `SELECT * FROM users WHERE email = '${email}'`
        const userDetails = await db.query(userDetailsQuery)

        if (userDetails[0].length === 0) {
            res.status(404)
            res.json({ message: 'User does not exists' })
        } else {
            const { id, password: hashedPassword } = userDetails[0][0]
            console.log(hashedPassword, '===')

            if (bcrypt.compareSync(password, hashedPassword)) {
                const jwtToken = jwt.sign({ userId: id }, 'saravanan')

                res.json({ jwt: jwtToken })
            } else {
                res.status(400)
                res.json({ message: 'Incorrect Password' })
            }
        }
    } catch (error) {
        res.json({ message: error.message })
    }
})

// Add New Users
router.post('/users', authenticate, async (req, res) => {
    const { name, email, password, phone, status = 'ACTIVE' } = req.body

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const getUserByEmailQuery = `SELECT * FROM users WHERE email = '${email}';`

    try {
        const user = await db.query(getUserByEmailQuery)

        if (user[0].length >= 1) {
            res.status(400)
            res.json({ message: 'User email already exists' })
        } else {
            const insertUserQuery = `INSERT INTO users (id, name, email, password, phone, status) VALUES ('${uuid()}', '${name}', '${email}', '${hashedPassword}', '${phone}', '${status}');`
            const result = await db.query(insertUserQuery)

            res.status(201)
            res.json({ message: 'User added successfully' })
        }
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
})

// Update User Details
router.put('/users/:id', authenticate, async (req, res) => {
    const { id } = req.params
    let {
        name: newName,
        email: newEmail,
        phone: newPhone,
        status: newStatus,
    } = req.body

    try {
        const getUserByIdQuery = `SELECT * FROM users WHERE id = '${id}'`
        const userDetails = (await db.query(getUserByIdQuery))[0]

        if (userDetails.length === 0) {
            res.status(404)
            return res.json({ message: 'User not found' })
        }

        const { name, email, phone, status } = userDetails[0]

        newName = newName ? newName : name
        newEmail = newEmail ? newEmail : email
        newPhone = newPhone ? newPhone : phone
        newStatus = newStatus ? newStatus : status

        const updateUserDetailsQuery = `UPDATE users SET name = '${newName}', email = '${newEmail}', phone = '${newPhone}', status = '${newStatus}'`
        await db.query(updateUserDetailsQuery)

        res.json({ message: 'User details updated successfully' })
    } catch (error) {
        res.json({ message: error.message })
    }
})

// Delete Users
router.delete('/users/:id', authenticate, async (req, res) => {
    const { id } = req.params

    try {
        const deleteUserQuery = `DELETE FROM users WHERE id = '${id}'`
        await db.query(deleteUserQuery)

        res.json({ message: 'User deleted successfully' })
    } catch (error) {
        res.json({ message: error.message })
    }
})

// GET Users with ID
router.get('/users/:id', authenticate, async (req, res) => {
    const { id } = req.params

    try {
        const selectUserQuery = `SELECT * FROM users WHERE id = '${id}'`
        const userDetails = (await db.query(selectUserQuery))[0][0]

        res.json(userDetails)
    } catch (error) {
        res.json({ message: error.message })
    }
})

// GET All users with orderby DESC
router.get('/users', authenticate, async (req, res) => {
    const { order = 'ASC' } = req.query

    let queryText = `SELECT * FROM users ORDER BY name ${order}`
    try {
        const result = await db.query(queryText)

        res.status(200)
        res.json(result[0])
    } catch (error) {
        res.json({ message: error.message })
    }
})

// GET All users with ACTIVE status
router.get('/users-active', authenticate, async (req, res) => {
    let queryText = `SELECT * FROM users WHERE status = 'ACTIVE'`
    try {
        const result = await db.query(queryText)

        res.status(200)
        res.json(result[0])
    } catch (error) {
        res.json({ message: error.message })
    }
})

module.exports = router
