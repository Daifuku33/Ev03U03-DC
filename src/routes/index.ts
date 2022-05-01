import { Router } from 'express'
import healthRoutes from './healthRoutes'
import taskRoutes from './taskRoutes'
import authRoutes from './authRoutes'
import tokenValidator from '../middlewares/tokenValidator'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/tasks', tokenValidator(), taskRoutes)
apiRoutes.use('/auth', authRoutes)

export default apiRoutes
