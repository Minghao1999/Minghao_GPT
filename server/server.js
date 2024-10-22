const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err))

const messageRoutes = require('./routes/message')
app.use('/api/messages', messageRoutes)

app.use(express.static(path.join(__dirname,'dist')))

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})