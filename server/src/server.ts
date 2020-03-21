import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app: Application = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`)
})
