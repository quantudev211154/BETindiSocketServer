import { SocketEventEnum } from '../enum/SocketEventConstants'
import { FireConnectionPayloadType } from '../types/FireConnectionPayloadType'
import { TypingPayloadType } from '../types/TypingPayloadType'
import { DisconnectPayloadType } from '../types/DisconnectPayloadType'
import SocketManager from '../class/SocketUsersManager'
import {
  sendDataToMultipleSocketIds,
  sendDataToSocketId,
} from '../utils/SendDataToSocketIds'

export const onFireConnection = ({
  userId,
  socketId,
  flag,
}: FireConnectionPayloadType) => {
  SocketManager.addUser({ userId, socketId, flag })
  console.log(SocketManager.getUsers())
}

export const onTypingMsg = ({
  conversationId,
  currentUserId,
  targetUserId,
  isTyping,
}: TypingPayloadType) => {
  const targetUserSocket = GL_ONLINE_USERS.get(targetUserId)

  // if (targetUserSocket)
  //   GL_IO.to(targetUserSocket as string).emit(
  //     SocketEventEnum.CHANGE_TYPING_STATE,
  //     { conversationId, currentUserId, targetUserId, isTyping }
  //   )
}

export const onSendMsg = (data: any) => {
  sendDataToMultipleSocketIds(data, SocketEventEnum.RECEIVE_MSG)
}

export const onUpdateMsg = (data: any) => {
  sendDataToMultipleSocketIds(data, SocketEventEnum.UPDATE_MSG)
}

export const onDisconnect = ({ flag }: DisconnectPayloadType) => {
  SocketManager.removeUser(flag)
}

export const onRevokeMsg = (data: any) => {
  sendDataToMultipleSocketIds(data, SocketEventEnum.REVOKE_MSG)
}

export const onAddMembers = (data: any) => {
  sendDataToMultipleSocketIds(data, SocketEventEnum.UPDATE_MEMBERS)
}

export const onCreateConver = (data: any) => {
  sendDataToMultipleSocketIds(
    data,
    SocketEventEnum.UPDATE_CONVERLIST_AFTER_CREATE
  )
}

export const onDeleteConver = (data: any) => {
  sendDataToMultipleSocketIds(
    data,
    SocketEventEnum.UPDATE_CONVERLIST_AFTER_DELETE
  )
}

export const onChangeStatusForParticipant = (data: any) => {
  sendDataToSocketId(data, SocketEventEnum.UPDATE_STATUS_FOR_PARTICIPANT)
}

export const onOutGroup = (data: any) => {
  sendDataToMultipleSocketIds(data, SocketEventEnum.UPDATE_CONVERLIST_AFTER_OUT)
}

export const onChangeRoleOfParticipant = (data: any) => {
  sendDataToMultipleSocketIds(
    data,
    SocketEventEnum.UPDATE_CONVERLIST_AFTER_CHANGE_ROLE
  )
}

export const onChangeConverInfo = (data: any) => {
  sendDataToMultipleSocketIds(
    data,
    SocketEventEnum.UPDATE_CONVER_AFTER_CHANGE_INFO
  )
}

export const onRemoveMemberOutOfGroup = (data: any) => {
  sendDataToMultipleSocketIds(data, SocketEventEnum.UPDATE_AFTER_REMOVE_MEMBER)
}
