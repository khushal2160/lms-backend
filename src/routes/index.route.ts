import { Router } from 'express'
import { bookRoutes } from './book.route'
import { customerRoutes } from './customer.route'

const router = Router()

router.use('/book', bookRoutes)
router.use('/customer', customerRoutes)

export { router as routes }