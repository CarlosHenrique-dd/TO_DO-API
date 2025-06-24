import express from "express"
import userRouter from "./presentation/routes/userRoutes"
import ErrorHandler from "./shared/middlewares/ErrorHandler"

const app = express()

app.use(express.json())
app.use("/users", userRouter)

app.use(ErrorHandler)

export default app
