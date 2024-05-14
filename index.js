const express = require('express');
const sequelize = require('sequelize');
const dotenv = require('dotenv').config()

const {  
    getAllCustomer, 
    createCustomer,
    getOneCustomer 
}  = require('./src/controllers/customers.controller');

const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(express.json())

app.get('/', function (req, res) {
  
  // Acceder a la bd
  res.send('hello world')
})

app.post('/customer/create', createCustomer)

app.get('/customer', getAllCustomer)

app.listen(port)

