import { Socket } from 'socket.io'

export type TypingPayloadType = {
  targetUserId: string
  isTyping: boolean
}
