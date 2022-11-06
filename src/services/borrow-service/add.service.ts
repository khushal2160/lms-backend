import fs from 'fs'
import appConfig from '../../config/app.config'
import { APIError } from '../../config/error.config'
import { IBorrow } from "../../dto/borrow.dto"
import { getBorrows, getCustomerBorrows } from "./data.service"

export const validateBorrow = (book_id: number, customer_id: number) => {
    const borrows: IBorrow[] = getCustomerBorrows(customer_id)
    let totalBorrows = 0
    for (const borrow of borrows) {
        if (borrow.customer_id === customer_id) {
            if (borrow.book_id === book_id) {
                // means cannot borrow another one
                throw new APIError(appConfig.StatusCodes.BAD_REQUEST, {
                    message: 'cannot borrow'
                })
            }
            totalBorrows += 1
            if (totalBorrows > 1) {
                // means limit exceeded
                throw new APIError(appConfig.StatusCodes.BAD_REQUEST, {
                    message: 'cannot borrow'
                })
            }
        }
    }
    return borrows
}

export const updateBorrow = (book_id: number, customer_id: number) => {
    let borrows: IBorrow[] = validateBorrow(book_id, customer_id)
    borrows.push({
        id: Date.now(),
        customer_id,
        book_id
    })
    writeToBorrows(JSON.stringify(borrows))
}

export const redoBorrow = (book_id: number, customer_id: number) => {
    const borrows: IBorrow[] = getBorrows()
    const newBorrows = []
    for (const borrow of borrows) {
        if (borrow.customer_id !== customer_id) {
            newBorrows.push(borrow)
        } else if (borrow.book_id !== book_id) {
            newBorrows.push(borrow)
        }
    }
    writeToBorrows(JSON.stringify(newBorrows))
}

const writeToBorrows = (data: string) => {
    fs.writeFileSync('src/data/borrows.json', data)
}