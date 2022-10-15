import { Socket } from 'socket.io'

export type SendMsgPayloadType = {
  to: string
  msg: string
}
