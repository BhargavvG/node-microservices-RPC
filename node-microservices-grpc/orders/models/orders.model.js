const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    orderId:{
        type: String,
        required: true,
        unique: true,
    },
    userId:{
        type: String,
        required: true,
    },
    productId:{
        type: String,
        required: true,
    },
    quantity:{
        type : Number,
        required: true,
    },
    status:{
        type: String,
        default : "Orderplaced"
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = OrdersModel = mongoose.model('orders', OrdersSchema);