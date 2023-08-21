const express = require('express');
const app = express();
const db = require('../utils/db');
const { OrderController} = require('../controller')

app.get('/get-order', OrderController.getOrder);
app.post('/create-order', OrderController.createOrder);
app.put('/update-order', OrderController.updateOrder);
app.delete('/delete-order', OrderController.deleteOrder);
  
module.exports = app;