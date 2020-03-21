import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import ownersRoute from './routes/owner'

const app: express.Application = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/owners', ownersRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`)
})
