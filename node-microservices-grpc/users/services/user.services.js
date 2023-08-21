const UsersModel = require('../models/Users.model');

const createUser = async (user) => {
  try {
    const userObj = new UsersModel(user);
    const createResult = await userObj.save();
    return { data: createResult };
  } catch (error) {
    return { error };
  }
};

const updateUser = async (userId, body) => {
  try {
    const updateResult = await UsersModel.updateOne({userId}, body)
    return { data: updateResult };
  } catch (error) {
    return { error };
  }
};

const deleteUser = async (userId) => {
  try {
    const deleteResult = await UsersModel.deleteOne({userId})
    return { data: deleteResult };
  } catch (error) {
    return { error };
  }
};

const getUser = async (query) => {
  const result = await UsersModel.findOne(query)
  return { data: result };
};

// const addOrder = async (userId, order) => {
//   const result = await UsersModel.updateOne(userId, {$push: {orders: order}});
//   if(!result.matchedCount){
//     return { error : 'No such user' };
//   }else if(!result.modifiedCount){
//     return { error : 'Order not modified' };
//   }else {
//     return { data : {
//       userId,
//       status : "Order added successfully"
//     }, error: null}
//   }
// };

module.exports = {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  // addOrder
};
