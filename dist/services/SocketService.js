"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocketEvent = void 0;
const SocketEventController_1 = require("../controller/SocketEventController");
const SocketEventConstants_1 = require("../enum/SocketEventConstants");
const handleSocketEvent = (socket) => {
    socket.on(SocketEventConstants_1.SocketEventEnum.FIRE_CONNECTION, (data) => {
        (0, SocketEventController_1.onFireConnection)({
            userId: data.userId,
            flag: data.flag,
            socketId: socket.id,
        });
    });
    socket.on(SocketEventConstants_1.SocketEventEnum.CHANGE_TYPING_STATE, SocketEventController_1.onTypingMsg);
    socket.on(SocketEventConstants_1.SocketEventEnum.SEND_MSG, SocketEventController_1.onSendMsg);
    socket.on(SocketEventConstants_1.SocketEventEnum.DISCONNECT, SocketEventController_1.onDisconnect);
    socket.on(SocketEventConstants_1.SocketEventEnum.SEND_REVOKE_MSG_CMD, SocketEventController_1.onRevokeMsg);
    socket.on(SocketEventConstants_1.SocketEventEnum.SEND_UPDATE_MSG_CMD, SocketEventController_1.onUpdateMsg);
    socket.on(SocketEventConstants_1.SocketEventEnum.ADD_MEMBERS, SocketEventController_1.onAddMembers);
    socket.on(SocketEventConstants_1.SocketEventEnum.CREATE_CONVER, SocketEventController_1.onCreateConver);
    socket.on(SocketEventConstants_1.SocketEventEnum.DELETE_CONVER, SocketEventController_1.onDeleteConver);
    socket.on(SocketEventConstants_1.SocketEventEnum.CHANGE_STATUS_FOR_PARTICIPANT, SocketEventController_1.onChangeStatusForParticipant);
    socket.on(SocketEventConstants_1.SocketEventEnum.OUT_GROUP, SocketEventController_1.onOutGroup);
    socket.on(SocketEventConstants_1.SocketEventEnum.CHANGE_ROLE_OF_PARTICIPANT, SocketEventController_1.onChangeRoleOfParticipant);
    socket.on(SocketEventConstants_1.SocketEventEnum.CHANGE_CONVER_INFO, SocketEventController_1.onChangeConverInfo);
};
exports.handleSocketEvent = handleSocketEvent;
