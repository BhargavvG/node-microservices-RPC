const express = require('express');
const app = express();
const db = require('../utils/db');
const { ProductController} = require('../controller')

app.get('/get-product', ProductController.getProduct);
app.post('/create-product', ProductController.createProduct);
app.put('/update-product', ProductController.updateProduct);
app.delete('/delete-product', ProductController.deleteProduct);
  
module.exports = app;