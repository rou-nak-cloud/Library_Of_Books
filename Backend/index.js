import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/db.js';

import bookRoute from './Route/book.route.js'

dotenv.config({ path: './.env'})
const app = express()
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

app.listen(PORT, () => {
  console.log(`Library.com is listening on port ${PORT}`)
})
