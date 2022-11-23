export enum SocketEventEnum {
  FIRE_CONNECTION = 'FIRE_CONNECTION',
  TYPING_MSG = 'TYPING_MSG',
  CHANGE_TYPING_STATE = 'CHANGE_TYPING_STATE',
  SEND_MSG = 'SEND_MSG',
  RECEIVE_MSG = 'RECEIVE_MSG',
  DISCONNECT = 'DISCONNECT',
  FORWARD = 'FORWARD',
  BLOCK = 'BLOCK',
  SEND_REVOKE_MSG_CMD = 'SEND_REVOKE_MSG_CMD',
  REVOKE_MSG = 'REVOKE_MSG',
  SEND_UPDATE_MSG_CMD = 'SEND_UPDATE_MSG_CMD',
  UPDATE_MSG = 'UPDATE_MSG',
  ADD_MEMBERS = 'ADD_MEMBERS',
  UPDATE_MEMBERS = 'UPDATE_MEMBERS',
  CREATE_CONVER = 'CREATE_CONVER',
  UPDATE_CONVERLIST_AFTER_CREATE = 'UPDATE_CONVERLIST_AFTER_CREATE',
  DELETE_CONVER = 'DELETE_CONVER',
  UPDATE_CONVERLIST_AFTER_DELETE = 'UPDATE_CONVERLIST_AFTER_DELETE',
  CHANGE_STATUS_FOR_PARTICIPANT = 'CHANGE_STATUS_FOR_PARTICIPANT',
  UPDATE_STATUS_FOR_PARTICIPANT = 'UPDATE_STATUS_FOR_PARTICIPANT',
  OUT_GROUP = 'OUT_GROUP',
  UPDATE_CONVERLIST_AFTER_OUT = 'UPDATE_CONVERLIST_AFTER_OUT',
  CHANGE_ROLE_OF_PARTICIPANT = 'CHANGE_ROLE_OF_PARTICIPANT',
  UPDATE_CONVERLIST_AFTER_CHANGE_ROLE = 'UPDATE_CONVERLIST_AFTER_CHANGE_ROLE',
  CHANGE_CONVER_INFO = 'CHANGE_CONVER_INFO',
  UPDATE_CONVER_AFTER_CHANGE_INFO = 'UPDATE_CONVER_AFTER_CHANGE_INFO',
}
