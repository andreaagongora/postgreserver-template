const express = require('express');
const sequelize = require('sequelize');
const dotenv = require('dotenv').config()

const {  
    getAllCustomer, 
    createCustomer,
    getOneCustomer 
}  = require('./src/controllers/customers.controller');

const app = express();

// middleware
app.use(express.json())

app.get('/', function (req, res) {
  
  // Acceder a la bd
  res.send('hello world')
})

app.post('/customer/create', createCustomer)

app.listen(3000)

