import fs from 'fs'
import appConfig from '../../config/app.config'
import { APIError } from '../../config/error.config'
import { IBook } from "../../dto/book.dto"
import { getBooks } from "./data.service"

export const updateBook = (book_id: number) => {
    let booksData: IBook[] = getBooks()
    let isUpdated = false
    for (let book of booksData) {
        if (book.id === book_id && book.book_qty > 0) {
            isUpdated = true
            book.book_qty -= 1
        }
    }
    writeBackToBooks(booksData)
    return isUpdated
}

export const addToQty = (book_id: number) => {
    let booksData: IBook[] = getBooks()
    let isUpdated = false
    for (let book of booksData) {
        if (book.id === book_id) {
            isUpdated = true
            book.book_qty += 1
        }
    }
    writeBackToBooks(booksData)
    return isUpdated
}

export const checkQty = (book_id: number) => {
    let booksData: IBook[] = getBooks()
    for (let book of booksData) {
        if (book.id === book_id && book.book_qty <= 0) {
            throw new APIError(appConfig.StatusCodes.BAD_REQUEST, {
                message: 'not available'
            })
        }
    }
    return true
}

export const writeBackToBooks = (newBooks: IBook[]) => {
    fs.writeFileSync('src/data/books.json', JSON.stringify(newBooks))
}