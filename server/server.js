const express = require('express');
const mongoose = require ('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT= 5000

// connect db

const db = require('./connection/connection')

//connect server
app.listen(process.env.PORT,()=>console.log('server has been started sucessfully'))


db.once('open', () => {
  app.listen(PORT, () => {
 
    console.log(`connect to  http://localhost:${PORT}`);
  });
});
