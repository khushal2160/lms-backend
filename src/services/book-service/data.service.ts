import fs from 'fs'

export const getBooks = () => {
    const booksData = fs.readFileSync('src/data/books.json', { encoding: 'utf-8' })
    return JSON.parse(booksData)
}