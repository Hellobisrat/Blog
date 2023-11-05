const authController = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

authController.post('/register', async(req,res)=>{
  try{

  } catch (error){
    return res.status(500).json(error)
  }
})

authController.post('/login', async(req,res)=>{
  try{

  } catch (error){
    return res.status(500).json(error)
  }
}) 