import env from "shared/config/env"
import app from "./app"

const PORT = env.PORT
app.listen(PORT, () => {
	console.log(`Server Running at ${PORT}`)
})
