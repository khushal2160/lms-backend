import request from 'supertest'
import app from '../app'

describe("GET /api/book/list - a list of books", () => {
    it("Book List API", async () => {
        const result = await request(app).get("/api/book/list")
        expect(result.statusCode).toEqual(200)
        expect(result.body.success).toBeTruthy()
    })
})