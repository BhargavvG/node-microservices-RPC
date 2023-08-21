const express = require('express');
const Router = express();
const OrderRoutes = require('./order.routes');
Router.use("/", OrderRoutes);

module.exports = Router;