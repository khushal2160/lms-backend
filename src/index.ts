import express from 'express'

const app = express()

app.listen(9001, () => {
    console.log('server is listening to 9001')
})