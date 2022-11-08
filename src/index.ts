import express from 'express'
import cors from 'cors'
import appConfig from './config/app.config'
import { APIErrorHandler } from './config/error.config'
import { routes } from './routes/index.route'

const app = express()

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: '*'
};

app.use(cors(options))
app.use(express.json())
app.use('/api', routes)
app.use(APIErrorHandler)

app.listen(appConfig.PORT, () => {
    console.log('server is listening to 9001')
})