export interface IBorrow {
    id: number,
    customer_id: number,
    book_id: number
}

export interface IBorrowBookDto {
    book_id: number
    customer_id: number
}