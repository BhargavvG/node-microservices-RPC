// const grpc = require("grpc");
// const { getUser:getUserService, addOrder:addOrderService } = require("./user.services");
// const users = {
//   1: { id: "1", name: "Alice" },
//   2: { id: "2", name: "Bob" },
//   // ... (user data)
// };
// const getUser = async (call, callback) => {
//   const userId = call.request.userId;
//   const user = await getUserService({ userId });
//   if (!user) {
//     return callback({ code: grpc.status.NOT_FOUND, details: "User not found" });
//   }
//   callback(null, user);
// };
// const addOrder = async (call, callback) => {
//   const { userId, orderId, productId, quantity } = call.request;
//   const order = { orderId, productId, quantity };
//   const {data, error} = await addOrderService(userId, order);
//   if (error) {
//     return callback({ code: grpc.status.NOT_FOUND, details : error });
//   }
//   callback(null, data);
// };

// module.exports = {
//   getUser,
//   addOrder,
// };
