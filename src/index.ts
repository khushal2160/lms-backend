import express from 'express'
import appConfig from './config/app.config'
import { APIErrorHandler } from './config/error.config'
import { routes } from './routes/index.route'

const app = express()

app.use(express.json())
app.use('/api', routes)
app.use(APIErrorHandler)

app.listen(appConfig.PORT, () => {
    console.log('server is listening to 9001')
})