import fs from 'fs'
import { IBook } from '../../dto/book.dto'
import { IBorrow } from '../../dto/borrow.dto'
import { getBooks } from '../book-service/data.service'

export const getCustomerBorrows = (customer_id: number) => {
    const borrowsData = fs.readFileSync('src/data/borrows.json', { encoding: 'utf-8' })
    const booksData: IBook[] = getBooks()
    let bookNames: { [key: string]: IBook } = {}
    const customerBorrows = []
    for (const book of booksData) {
        bookNames[book.id] = book
    }
    const parsedBorrows: IBorrow[] = JSON.parse(borrowsData)
    for (const borrow of parsedBorrows) {
        if (borrow.customer_id === customer_id) {
            customerBorrows.push({
                ...borrow,
                ...bookNames[borrow.book_id]
            })
        }
    }
    return customerBorrows
}

export const getBorrows = () => {
    const borrowsData = fs.readFileSync('src/data/borrows.json', { encoding: 'utf-8' })
    const parsedBorrows: IBorrow[] = JSON.parse(borrowsData)
    return parsedBorrows
}