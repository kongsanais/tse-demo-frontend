const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/R_user')
const adminRouter = require('./routers/R_admin')
const app = express()
const cors = require('cors');
const { static } = require('express');
app.use(cors())

const port = process.env.PORT || 3000
app.use(express.json())
app.use("/api",userRouter)
app.use("/api",adminRouter)
app.use(express.static(__dirname + "/uploaded"))


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

