const { orderServices } = require("../services");
const createOrder = async (req, res) => {
  try {
    const { error, data } = await orderServices.createOrder(req.body);
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const { error, data } = await orderServices.getOrder({orderId :req.query.orderId});
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { error, data } = await orderServices.updateOrder(
      req.query.orderId,
      req.body
    );
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};
const deleteOrder = async (req, res) => {
  try {
    const { error, data } = await orderServices.deleteOrder(req.query.orderId);
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
};
