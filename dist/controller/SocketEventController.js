"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAddMembers = exports.onUpdateMsg = exports.onRevokeMsg = exports.onDisconnect = exports.onSendMsg = exports.onTypingMsg = exports.onFireConnection = void 0;
const SocketEventConstants_1 = require("../enum/SocketEventConstants");
const onFireConnection = ({ userId }) => {
    GL_ONLINE_USERS.set(userId, GL_SOCKET.id);
    console.log('NEW USER: ' + userId + ' - ' + GL_SOCKET.id);
};
exports.onFireConnection = onFireConnection;
const onTypingMsg = ({ conversationId, currentUserId, targetUserId, isTyping, }) => {
    const targetUserSocket = GL_ONLINE_USERS.get(targetUserId);
    if (targetUserSocket)
        GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.CHANGE_TYPING_STATE, { conversationId, currentUserId, targetUserId, isTyping });
};
exports.onTypingMsg = onTypingMsg;
const onSendMsg = (data) => {
    for (let iterator of data.to) {
        console.log(iterator.id + ' ' + iterator.fullName);
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.RECEIVE_MSG, data);
        }
    }
};
exports.onSendMsg = onSendMsg;
const onDisconnect = ({ userId }) => {
    GL_ONLINE_USERS.delete(userId);
};
exports.onDisconnect = onDisconnect;
const onRevokeMsg = ({ conversation, message, targetUserId, }) => {
    const targetUserSocket = GL_ONLINE_USERS.get(targetUserId);
    if (targetUserSocket) {
        GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.REVOKE_MSG, {
            conversation,
            message,
            targetUserId,
        });
    }
};
exports.onRevokeMsg = onRevokeMsg;
const onUpdateMsg = (data) => {
    for (let iterator of data.to) {
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_MSG, data);
        }
    }
};
exports.onUpdateMsg = onUpdateMsg;
const onAddMembers = (data) => {
    for (let iterator of data.to) {
        console.log(data);
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_MEMBERS, data);
        }
    }
};
exports.onAddMembers = onAddMembers;