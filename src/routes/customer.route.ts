import { Router } from 'express'
import customerController from '../controllers/customer.controller'

const router = Router()

router.get('/borrows', customerController.getCustomerBorrows)
router.post('/borrow', customerController.postBorrowBook)
router.post('/return', customerController.postReturnBook)

export { router as customerRoutes }