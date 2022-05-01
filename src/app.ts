import express from 'express'
import morgan from 'morgan'
import apiRoutes from './routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', apiRoutes)

export default app