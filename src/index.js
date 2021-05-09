import express from 'express'
import apiAgenda from './routes/agenda'

const app = express()
app.use(express.json())
app.use('/', apiAgenda)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
