const OrdersModel = require('../models/orders.model');

const createOrder = async (order) => {
  try {
    const orderObj = new OrdersModel(order);
    const createResult = await orderObj.save();
    return { data: createResult };
  } catch (error) {
    return { error };
  }
};

const updateOrder = async (orderId, body) => {
  try {
    const updateResult = await OrdersModel.updateOne({orderId}, body)
    return { data: updateResult };
  } catch (error) {
    return { error };
  }
};

const deleteOrder = async (orderId) => {
  try {
    const deleteResult = await OrdersModel.deleteOne({orderId})
    return { data: deleteResult };
  } catch (error) {
    return { error };
  }
};

const getOrder = async (query) => {
  const result = await OrdersModel.findOne(query)
  return { data: result };
};

module.exports = {
  createOrder,
  updateOrder,
  getOrder,
  deleteOrder,
};
