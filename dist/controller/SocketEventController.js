"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRemoveMemberOutOfGroup = exports.onChangeConverInfo = exports.onChangeRoleOfParticipant = exports.onOutGroup = exports.onChangeStatusForParticipant = exports.onDeleteConver = exports.onCreateConver = exports.onAddMembers = exports.onRevokeMsg = exports.onDisconnect = exports.onUpdateMsg = exports.onSendMsg = exports.onTypingMsg = exports.onFireConnection = void 0;
const SocketEventConstants_1 = require("../enum/SocketEventConstants");
const SocketUsersManager_1 = __importDefault(require("../class/SocketUsersManager"));
const SendDataToSocketIds_1 = require("../utils/SendDataToSocketIds");
const onFireConnection = ({ userId, socketId, flag, }) => {
    SocketUsersManager_1.default.addUser({ userId, socketId, flag });
    console.log(SocketUsersManager_1.default.getUsers());
};
exports.onFireConnection = onFireConnection;
const onTypingMsg = ({ conversationId, currentUserId, targetUserId, isTyping, }) => {
    const targetUserSocket = GL_ONLINE_USERS.get(targetUserId);
    // if (targetUserSocket)
    //   GL_IO.to(targetUserSocket as string).emit(
    //     SocketEventEnum.CHANGE_TYPING_STATE,
    //     { conversationId, currentUserId, targetUserId, isTyping }
    //   )
};
exports.onTypingMsg = onTypingMsg;
const onSendMsg = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.RECEIVE_MSG);
};
exports.onSendMsg = onSendMsg;
const onUpdateMsg = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_MSG);
};
exports.onUpdateMsg = onUpdateMsg;
const onDisconnect = ({ flag }) => {
    SocketUsersManager_1.default.removeUser(flag);
};
exports.onDisconnect = onDisconnect;
const onRevokeMsg = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.REVOKE_MSG);
};
exports.onRevokeMsg = onRevokeMsg;
const onAddMembers = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_MEMBERS);
};
exports.onAddMembers = onAddMembers;
const onCreateConver = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_CREATE);
};
exports.onCreateConver = onCreateConver;
const onDeleteConver = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_DELETE);
};
exports.onDeleteConver = onDeleteConver;
const onChangeStatusForParticipant = (data) => {
    (0, SendDataToSocketIds_1.sendDataToSocketId)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_STATUS_FOR_PARTICIPANT);
};
exports.onChangeStatusForParticipant = onChangeStatusForParticipant;
const onOutGroup = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_OUT);
};
exports.onOutGroup = onOutGroup;
const onChangeRoleOfParticipant = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_CONVERLIST_AFTER_CHANGE_ROLE);
};
exports.onChangeRoleOfParticipant = onChangeRoleOfParticipant;
const onChangeConverInfo = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_CONVER_AFTER_CHANGE_INFO);
};
exports.onChangeConverInfo = onChangeConverInfo;
const onRemoveMemberOutOfGroup = (data) => {
    (0, SendDataToSocketIds_1.sendDataToMultipleSocketIds)(data, SocketEventConstants_1.SocketEventEnum.UPDATE_AFTER_REMOVE_MEMBER);
};
exports.onRemoveMemberOutOfGroup = onRemoveMemberOutOfGroup;
