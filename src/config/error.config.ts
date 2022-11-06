import { NextFunction, Request, Response } from "express"

interface ErrorData {
    /**
     * Human readable error message
     */
    message: string
    /**
     * Additional properties
     */
    [key: string]: any
}

export class APIError extends Error {
    statusCode: number
    data: ErrorData | null

    constructor(statusCode: number, data: ErrorData | null = null) {
        super()
        this.statusCode = statusCode
        this.data = data
    }
}

export function APIErrorHandler(err: APIError, req: Request, res: Response, next: NextFunction) {
    if (err) {
        console.log(err);

        if (!err.data) {
            return res.sendStatus(err.statusCode);
        }

        return res.status(err.statusCode).json({
            success: false,
            ...err.data
        });
    }
    next(err);
}
