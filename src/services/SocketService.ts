import { Socket } from 'socket.io'
import {
  onAddMembers,
  onChangeConverInfo,
  onChangeRoleOfParticipant,
  onChangeStatusForParticipant,
  onCreateConver,
  onDeleteConver,
  onDisconnect,
  onFireConnection,
  onOutGroup,
  onRemoveMemberOutOfGroup,
  onRevokeMsg,
  onSendMsg,
  onTypingMsg,
  onUpdateMsg,
} from '../controller/SocketEventController'
import { SocketEventEnum } from '../enum/SocketEventConstants'

export const handleSocketEvent = (socket: Socket) => {
  socket.on(SocketEventEnum.FIRE_CONNECTION, (data: any) => {
    onFireConnection({
      userId: data.userId,
      flag: data.flag,
      socketId: socket.id,
    })
  })

  socket.on(SocketEventEnum.CHANGE_TYPING_STATE, onTypingMsg)

  socket.on(SocketEventEnum.SEND_MSG, onSendMsg)

  socket.on(SocketEventEnum.DISCONNECT, onDisconnect)

  socket.on(SocketEventEnum.SEND_REVOKE_MSG_CMD, onRevokeMsg)

  socket.on(SocketEventEnum.SEND_UPDATE_MSG_CMD, onUpdateMsg)

  socket.on(SocketEventEnum.ADD_MEMBERS, onAddMembers)

  socket.on(SocketEventEnum.CREATE_CONVER, onCreateConver)

  socket.on(SocketEventEnum.DELETE_CONVER, onDeleteConver)

  socket.on(
    SocketEventEnum.CHANGE_STATUS_FOR_PARTICIPANT,
    onChangeStatusForParticipant
  )

  socket.on(SocketEventEnum.OUT_GROUP, onOutGroup)

  socket.on(
    SocketEventEnum.CHANGE_ROLE_OF_PARTICIPANT,
    onChangeRoleOfParticipant
  )

  socket.on(SocketEventEnum.CHANGE_CONVER_INFO, onChangeConverInfo)

  socket.on(
    SocketEventEnum.REMOVE_MEMBER_OUT_OF_GROUP,
    onRemoveMemberOutOfGroup
  )
}
