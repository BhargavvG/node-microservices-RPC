const UsersModel = require('../models/UsersModel');

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
  const result = await UsersModel.findOne({userId})
  return { data: result };
};

module.exports = {
  createUser,
  updateUser,
  getUser,
  deleteUser,
};
