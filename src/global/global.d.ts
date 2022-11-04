import { Server, Socket } from 'socket.io'

declare global {
  var GL_SOCKET: Socket
  var GL_ONLINE_USERS: Map<number, string>
  var GL_IO: Server
}
