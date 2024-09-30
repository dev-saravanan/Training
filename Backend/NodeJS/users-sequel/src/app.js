require('dotenv').config()
const express = require('express')

const models = require('./models')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/users/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const usersList = await models.User.findOne({
            where: {
                id: userId,
            },
        })
        res.json(usersList)
    } catch (err) {
        res.json(err)
    }
})

app.post('/users', async (req, res) => {
    try {
        await models.User.create(req.body)
        res.json({ message: 'User added successfully' })
    } catch (err) {
        res.json(err)
    }
})

app.put('/users/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const user = await models.User.update(req.body, {
            where: {
                id: userId,
            },
        })

        if (user[0] === 0) {
            return res.json({ message: 'User not updated' })
        }

        res.json({ message: 'User updated successfully' })
    } catch (err) {
        res.json(err)
    }
})

app.delete('/users/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const user = await models.User.destroy({
            where: {
                id: userId,
            },
        })

        if (user === 0) {
            return res.json({ message: 'User not deleted' })
        }

        res.json({ message: 'User deleted successfully' })
    } catch (err) {
        res.json(err)
    }
})

app.get('/users', async (req, res) => {
    const { orderby = 'ASC' } = req.query

    try {
        const usersList = await models.User.findAll({
            order: [['name', orderby]],
        })
        res.json(usersList)
    } catch (err) {
        res.json(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
