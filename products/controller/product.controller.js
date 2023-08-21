const { productServices } = require("../services");
const createProduct = async (req, res) => {
  try {
    const { error, data } = await productServices.createProduct(req.body);
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { error, data } = await productServices.getProduct({productId :req.query.productId});
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { error, data } = await productServices.updateProduct(
      req.query.productId,
      req.body
    );
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { error, data } = await productServices.deleteProduct(req.query.productId);
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
