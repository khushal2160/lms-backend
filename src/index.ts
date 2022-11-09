import app from "./app"
import appConfig from "./config/app.config"

app.listen(appConfig.PORT, () => {
    console.log('server is listening to 9001')
})