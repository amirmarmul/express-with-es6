import express from "express"
import router from "./routes.mjs"

const app = express()
app.use("/app", router)

app.listen("3000")