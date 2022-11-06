import appConfig from "../../config/app.config"
import { APIError } from "../../config/error.config"
import { addToQty, checkQty, updateBook } from "../book-service/add.service"
import { redoBorrow, updateBorrow } from "../borrow-service/add.service"

export const addToBorrow = (book_id: number, customer_id: number) => {
    const enoughQty = checkQty(book_id)
    if (!enoughQty) {
        throw new APIError(appConfig.StatusCodes.BAD_REQUEST, {
            message: 'Not enough Qty'
        })
    }
    updateBorrow(book_id, customer_id)
    updateBook(book_id)
    return true
}

export const returnBorrow = (book_id: number, customer_id: number) => {
    redoBorrow(book_id, customer_id)
    addToQty(book_id)
    return true
}