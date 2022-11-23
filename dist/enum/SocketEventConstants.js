"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEventEnum = void 0;
var SocketEventEnum;
(function (SocketEventEnum) {
    SocketEventEnum["FIRE_CONNECTION"] = "FIRE_CONNECTION";
    SocketEventEnum["TYPING_MSG"] = "TYPING_MSG";
    SocketEventEnum["CHANGE_TYPING_STATE"] = "CHANGE_TYPING_STATE";
    SocketEventEnum["SEND_MSG"] = "SEND_MSG";
    SocketEventEnum["RECEIVE_MSG"] = "RECEIVE_MSG";
    SocketEventEnum["DISCONNECT"] = "DISCONNECT";
    SocketEventEnum["FORWARD"] = "FORWARD";
    SocketEventEnum["BLOCK"] = "BLOCK";
    SocketEventEnum["SEND_REVOKE_MSG_CMD"] = "SEND_REVOKE_MSG_CMD";
    SocketEventEnum["REVOKE_MSG"] = "REVOKE_MSG";
    SocketEventEnum["SEND_UPDATE_MSG_CMD"] = "SEND_UPDATE_MSG_CMD";
    SocketEventEnum["UPDATE_MSG"] = "UPDATE_MSG";
    SocketEventEnum["ADD_MEMBERS"] = "ADD_MEMBERS";
    SocketEventEnum["UPDATE_MEMBERS"] = "UPDATE_MEMBERS";
    SocketEventEnum["CREATE_CONVER"] = "CREATE_CONVER";
    SocketEventEnum["UPDATE_CONVERLIST_AFTER_CREATE"] = "UPDATE_CONVERLIST_AFTER_CREATE";
    SocketEventEnum["DELETE_CONVER"] = "DELETE_CONVER";
    SocketEventEnum["UPDATE_CONVERLIST_AFTER_DELETE"] = "UPDATE_CONVERLIST_AFTER_DELETE";
    SocketEventEnum["CHANGE_STATUS_FOR_PARTICIPANT"] = "CHANGE_STATUS_FOR_PARTICIPANT";
    SocketEventEnum["UPDATE_STATUS_FOR_PARTICIPANT"] = "UPDATE_STATUS_FOR_PARTICIPANT";
    SocketEventEnum["OUT_GROUP"] = "OUT_GROUP";
    SocketEventEnum["UPDATE_CONVERLIST_AFTER_OUT"] = "UPDATE_CONVERLIST_AFTER_OUT";
    SocketEventEnum["CHANGE_ROLE_OF_PARTICIPANT"] = "CHANGE_ROLE_OF_PARTICIPANT";
    SocketEventEnum["UPDATE_CONVERLIST_AFTER_CHANGE_ROLE"] = "UPDATE_CONVERLIST_AFTER_CHANGE_ROLE";
    SocketEventEnum["CHANGE_CONVER_INFO"] = "CHANGE_CONVER_INFO";
    SocketEventEnum["UPDATE_CONVER_AFTER_CHANGE_INFO"] = "UPDATE_CONVER_AFTER_CHANGE_INFO";
})(SocketEventEnum = exports.SocketEventEnum || (exports.SocketEventEnum = {}));
