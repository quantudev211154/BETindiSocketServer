"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onChangeConverInfo = exports.onChangeRoleOfParticipant = exports.onOutGroup = exports.onChangeStatusForParticipant = exports.onDeleteConver = exports.onCreateConver = exports.onAddMembers = exports.onUpdateMsg = exports.onRevokeMsg = exports.onDisconnect = exports.onSendMsg = exports.onTypingMsg = exports.onFireConnection = void 0;
const SocketEventConstants_1 = require("../enum/SocketEventConstants");
const onFireConnection = ({ userId }) => {
    GL_ONLINE_USERS.set(userId, GL_SOCKET.id);
    // console.log('NEW USER: ' + userId + ' - ' + GL_SOCKET.id)
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
        // console.log(iterator.id + ' ' + iterator.fullName)
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
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_MEMBERS, data);
        }
    }
};
exports.onAddMembers = onAddMembers;
const onCreateConver = (data) => {
    for (let iterator of data.to) {
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_CREATE, data);
        }
    }
};
exports.onCreateConver = onCreateConver;
const onDeleteConver = (data) => {
    for (let iterator of data.to) {
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_DELETE, data);
        }
    }
};
exports.onDeleteConver = onDeleteConver;
const onChangeStatusForParticipant = (data) => {
    const targetUserSocket = GL_ONLINE_USERS.get(data.to.id);
    if (targetUserSocket) {
        GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_STATUS_FOR_PARTICIPANT, data);
    }
};
exports.onChangeStatusForParticipant = onChangeStatusForParticipant;
const onOutGroup = (data) => {
    for (let iterator of data.to) {
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_OUT, data);
        }
    }
};
exports.onOutGroup = onOutGroup;
const onChangeRoleOfParticipant = (data) => {
    for (let iterator of data.to) {
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_CHANGE_ROLE, data);
        }
    }
};
exports.onChangeRoleOfParticipant = onChangeRoleOfParticipant;
const onChangeConverInfo = (data) => {
    for (let iterator of data.to) {
        const targetUserSocket = GL_ONLINE_USERS.get(iterator.id);
        if (targetUserSocket) {
            GL_IO.to(targetUserSocket).emit(SocketEventConstants_1.SocketEventEnum.UPDATE_CONVER_AFTER_CHANGE_INFO, data);
        }
    }
};
exports.onChangeConverInfo = onChangeConverInfo;
