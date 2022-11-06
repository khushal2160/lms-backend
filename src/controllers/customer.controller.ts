import { NextFunction, Request, Response } from "express"
import appConfig from "../config/app.config"
import { APIError } from "../config/error.config"
import { IBorrowBookDto } from "../dto/borrow.dto"
import { getCustomerBorrows } from "../services/borrow-service/data.service"
import { addToBorrow, returnBorrow } from "../services/customer-service/add.service"

class CustomerController {
    postBorrowBook(req: Request, res: Response, next: NextFunction) {
        try {
            const body: IBorrowBookDto = req.body
            addToBorrow(body.book_id, body.customer_id)
            res.status(appConfig.StatusCodes.OK).json({
                success: true,
                data: 'Request is updated'
            })
        } catch (error) {
            next(error)
        }
    } 

    postReturnBook(req: Request, res: Response, next: NextFunction) {
        try {
            const body: IBorrowBookDto = req.body
            returnBorrow(body.book_id, body.customer_id)
            res.status(appConfig.StatusCodes.OK).json({
                success: true,
                data: 'Request is updated'
            })
        } catch (error) {
            next(error)
        }
    }
    
    getCustomerBorrows(req: Request, res: Response, next: NextFunction) {
        try {
            const customerId = req.query.id
            if (!customerId || !Number(customerId)) {
                throw new APIError(appConfig.StatusCodes.BAD_REQUEST, {
                    message: 'invalid parameter, id'
                })
            }
            const borrows = getCustomerBorrows(Number(customerId))
            res.status(appConfig.StatusCodes.OK).json({
                success: true,
                data: borrows
            })
        } catch (error) {
            next(error)
        }
    }
}

const customerController = new CustomerController()
export default customerController