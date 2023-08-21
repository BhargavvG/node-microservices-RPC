const express = require('express');
const Router = express();
const ProductRoutes = require('./product.routes');
Router.use("/", ProductRoutes);

module.exports = Router;