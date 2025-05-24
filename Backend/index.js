import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/db/db.js';

import bookRoute from './Route/book.route.js'
import userRoute from './Route/user.route.js'

const app = express()
app.use(cors());
app.use(express.json())

dotenv.config({ path: './.env'})

connectDB()
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err)
    })

const PORT=process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send()
})

// Defining Routes
app.use('/api/v1/book',bookRoute)
app.use('/api/v1/user',userRoute)

app.listen(PORT, () => {
  console.log(`Library.com is listening on port ${PORT}`)
})
