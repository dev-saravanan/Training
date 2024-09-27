const express = require('express')
const userRouter = require('./routes/userRouter')
const helmet = require('helmet')

const app = express()

app.use(express.json())
app.use(helmet())

app.use('/', userRouter)

app.listen(3000, () => console.log('Server Started at port 3000'))
