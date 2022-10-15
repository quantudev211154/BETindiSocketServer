import { SocketEventEnum } from '../enum/SocketEventConstants'
import { FireConnectionPayloadType } from '../types/FireConnectionPayloadType'
import { SendFriendInvitationPayloadType } from '../types/SendFriendInvitationPayloadType'
import { SendMsgPayloadType } from '../types/SendMsgPayloadType'
import { TypingPayloadType } from '../types/TypingPayloadType'
import { checkExistingUserSocket } from '../utils/CheckExistingUserSocket'

export const onFireConnection = ({ userId }: FireConnectionPayloadType) => {
  const checkExistingUser = checkExistingUserSocket(userId)

  checkExistingUser.status
    ? GL_ONLINE_USERS.set(
        userId,
        checkExistingUser.existingUserSocketId as string
      )
    : GL_ONLINE_USERS.set(userId, GL_SOCKET.id)
}

export const onTypingMsg = ({ targetUserId, isTyping }: TypingPayloadType) => {
  const targetUserSocket = GL_ONLINE_USERS.get(targetUserId)

  if (targetUserSocket)
    GL_SOCKET.to(targetUserSocket).emit(
      SocketEventEnum.CHANGE_TYPING_STATE,
      isTyping
    )
}

export const onSendMsg = ({ to, msg }: SendMsgPayloadType) => {
  const targetUserSocket = GL_ONLINE_USERS.get(to)

  if (targetUserSocket)
    GL_SOCKET.to(targetUserSocket).emit(SocketEventEnum.RECEIVE_MSG, msg)
}

export const onSendFriendInvitation = ({
  id,
  name,
  avatar,
  phone,
}: SendFriendInvitationPayloadType) => {
  const targetUserSocket = GL_ONLINE_USERS.get(id)

  const friendInvitationOwner = {
    id,
    name,
    avatar,
    phone,
  }

  if (targetUserSocket)
    GL_SOCKET.to(targetUserSocket).emit(
      SocketEventEnum.RECEIVE_FRIEND_INVITATION,
      friendInvitationOwner
    )
}
