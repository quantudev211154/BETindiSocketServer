import { Socket } from 'socket.io'
import { SocketEventEnum } from '../enum/SocketEventConstants'

export const handleSocketEvent = (socket: Socket) => {
  console.log('NOTI: A new user connected')
  global.GL_SOCKET = socket

  socket.on(SocketEventEnum.FIRE_CONNECTION, () => {})

  socket.on(SocketEventEnum.CHANGE_TYPING_STATE, () => {})

  socket.on(SocketEventEnum.SEND_MSG, () => {})

  socket.on(SocketEventEnum.SEND_FRIEND_INVITATION, () => {})
}
