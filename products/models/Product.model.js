const mongoose = require('mongoose');
require('mongoose-double')(mongoose); 
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
    name:{
        type: String,
    },
    productId:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
    },
    price : {
        type : Number,
    },
    stock : {
        type : Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = ProductsModel = mongoose.model('products', ProductsSchema);