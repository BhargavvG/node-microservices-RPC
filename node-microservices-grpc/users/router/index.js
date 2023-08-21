const express = require('express');
const Router = express();
const UserRoutes = require('./user.routes');
Router.use("/", UserRoutes);

module.exports = Router;