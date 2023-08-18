const mongoose = require('mongoose');
require('dotenv').config()
mongoose
    .connect('', { useNewUrlParser: true })
    .then(() => console.log(`Mongodb Connected`))
    .catch(error => console.log(error));
