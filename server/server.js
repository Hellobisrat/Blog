const express = require('express');
const mongoose = require ('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()

// connect db

mongoose.connect(process.env.MONGO_URL,()=>console.log('Mongose has been sucessfully loaded'))

//connect server
app.listen(process.env.PORT,()=>console.log('server has been started sucessfully'))