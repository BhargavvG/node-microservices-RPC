const mongoose = require('mongoose');
require('dotenv').config()
mongoose
    .connect('mongodb://localhost:27017/test-rpc-users', { useNewUrlParser: true })
    .then(() => console.log(`Mongodb Connected`))
    .catch(error => console.log(error));
// Note : test-rpc-users is database name, As we are using separate database for users.