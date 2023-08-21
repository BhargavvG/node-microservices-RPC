// const grpc = require('grpc');
// const protoLoader = require('@grpc/proto-loader');
// const userProtoPath = `${__dirname}/users.proto`; // Path to your gRPC protobuf definition
// const userPackageDefinition = protoLoader.loadSync(userProtoPath);
// const userProtoDescriptor = grpc.loadPackageDefinition(userPackageDefinition).user;
// require('dotenv').config({path: `${__dirname}/../.env`});
// // require('../utils/db')
// // const grpcServices = require('../services/grpc.services')

// const server = new grpc.Server();

// // Implement the getUser RPC method
// // server.addService(userProtoDescriptor.UserService.service, grpcServices);
// const PORT = process.env.GRPC_PORT || 3000;

// server.bind(`localhost:${PORT}`, grpc.ServerCredentials.createInsecure());
// server.start();