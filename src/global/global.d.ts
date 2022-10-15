import { Socket } from 'socket.io'

declare global {
  var GL_SOCKET: Socket
  var GL_ONLINE_USERS: Map<string, string>
}
