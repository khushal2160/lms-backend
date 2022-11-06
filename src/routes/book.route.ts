import { Router } from 'express'
import bookController from '../controllers/book.controller'

const router = Router()

router.get('/list', bookController.getListBooks)

export { router as bookRoutes }