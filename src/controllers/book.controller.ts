import { NextFunction, Request, Response } from "express"
import appConfig from "../config/app.config"
import { getBooks } from "../services/book-service/data.service"

class BookController {
    async getListBooks(req: Request, res: Response, next: NextFunction) {
        try {
            const booksData = await getBooks()
            res.status(appConfig.StatusCodes.OK).json({
                success: true,
                data: booksData
            })
        } catch (error) {
            next(error) 
        }
    }
}

const bookController = new BookController()
export default bookController