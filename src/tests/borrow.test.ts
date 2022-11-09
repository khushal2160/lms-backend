import request from 'supertest'
import app from '../app'

describe("Borrow and return Books", () => {
    it("Borrow List API", async () => {
        const result = await request(app).get("/api/customer/borrows?id=2")
        expect(result.statusCode).toEqual(200)
        expect(result.body.success).toBeTruthy()
    })

    it("Borrow a Book API", async () => {
        const result = await request(app)
                                .post("/api/customer/borrow")
                                .send({ book_id: 4, customer_id: 2 })
        expect(result.statusCode).toEqual(200)
        expect(result.body.success).toBeTruthy()
    })

    it("Borrow a same Book again API", async () => {
        const result = await request(app)
                                .post("/api/customer/borrow")
                                .send({ book_id: 4, customer_id: 2 })
        expect(result.statusCode).toEqual(400)
        expect(result.body.success).toBeFalsy()
    })

    it("Borrow other Book API", async () => {
        const result = await request(app)
                                .post("/api/customer/borrow")
                                .send({ book_id: 5, customer_id: 2 })
        expect(result.statusCode).toEqual(200)
        expect(result.body.success).toBeTruthy()
    })

    it("Borrow more than 2 Books API", async () => {
        const result = await request(app)
                                .post("/api/customer/borrow")
                                .send({ book_id: 6, customer_id: 2 })
        expect(result.statusCode).toEqual(400)
        expect(result.body.success).toBeFalsy()
    })

    it("Return a Book API", async () => {
        const result = await request(app)
                                .post("/api/customer/return")
                                .send({ book_id: 4, customer_id: 2 })
        expect(result.statusCode).toEqual(200)
        expect(result.body.success).toBeTruthy()
    })

    it("Return a Book API", async () => {
        const result = await request(app)
                                .post("/api/customer/return")
                                .send({ book_id: 5, customer_id: 2 })
        expect(result.statusCode).toEqual(200)
        expect(result.body.success).toBeTruthy()
    })

    it("Return a Book API", async () => {
        const result = await request(app)
                                .post("/api/customer/return")
                                .send({ book_id: 6, customer_id: 2 })
        expect(result.statusCode).toEqual(200)
        expect(result.body.success).toBeTruthy()
    })
})