const ProductsModel = require('../models/Product.model');

const createProduct = async (product) => {
  try {
    const productObj = new ProductsModel(product);
    const createResult = await productObj.save();
    return { data: createResult };
  } catch (error) {
    return { error };
  }
};

const updateProduct = async (productId, body) => {
  try {
    const updateResult = await ProductsModel.updateOne({productId}, body)
    return { data: updateResult };
  } catch (error) {
    return { error };
  }
};

const deleteProduct = async (productId) => {
  try {
    const deleteResult = await ProductsModel.deleteOne({productId})
    return { data: deleteResult };
  } catch (error) {
    return { error };
  }
};

const getProduct = async (query) => {
  const result = await ProductsModel.findOne(query)
  return { data: result };
};

module.exports = {
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
};
