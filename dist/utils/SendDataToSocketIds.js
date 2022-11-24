"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDataToSocketId = exports.sendDataToMultipleSocketIds = void 0;
const SocketUsersManager_1 = __importDefault(require("../class/SocketUsersManager"));
const sendDataToMultipleSocketIds = (data, socketEvenToSign) => {
    for (let i = 0; i < data.to.length; ++i) {
        let targetSockets = SocketUsersManager_1.default.findSocketIdsByUserId(data.to[i].id);
        if (targetSockets.length > 0 && socketEvenToSign !== undefined) {
            for (let j = 0; j < targetSockets.length; ++j) {
                GL_IO.to(targetSockets[j].socketId).emit(socketEvenToSign, data);
            }
        }
    }
};
exports.sendDataToMultipleSocketIds = sendDataToMultipleSocketIds;
const sendDataToSocketId = (data, socketEvenToSign) => {
    let targetSockets = SocketUsersManager_1.default.findSocketIdsByUserId(data.to.id);
    if (targetSockets.length > 0 && socketEvenToSign !== undefined) {
        for (let j = 0; j < targetSockets.length; ++j) {
            GL_IO.to(targetSockets[j].socketId).emit(socketEvenToSign, data);
        }
    }
};
exports.sendDataToSocketId = sendDataToSocketId;
