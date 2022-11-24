import SocketManager from '../class/SocketUsersManager'
import { SocketEventEnum } from '../enum/SocketEventConstants'

export const sendDataToMultipleSocketIds = (
  data: any,
  socketEvenToSign?: SocketEventEnum
) => {
  for (let i = 0; i < data.to.length; ++i) {
    let targetSockets = SocketManager.findSocketIdsByUserId(data.to[i].id)

    if (targetSockets.length > 0 && socketEvenToSign !== undefined) {
      for (let j = 0; j < targetSockets.length; ++j) {
        GL_IO.to(targetSockets[j].socketId).emit(socketEvenToSign, data)
      }
    }
  }
}

export const sendDataToSocketId = (
  data: any,
  socketEvenToSign?: SocketEventEnum
) => {
  let targetSockets = SocketManager.findSocketIdsByUserId(data.to.id)

  if (targetSockets.length > 0 && socketEvenToSign !== undefined) {
    for (let j = 0; j < targetSockets.length; ++j) {
      GL_IO.to(targetSockets[j].socketId).emit(socketEvenToSign, data)
    }
  }
}
