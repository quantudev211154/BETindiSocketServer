import { __onlineUsers } from '..'
import { CheckExistingUserSocketReturnType } from '../types/CheckExistingUserSocketReturnType'

export const checkExistingUserSocket = (
  userId: string
): CheckExistingUserSocketReturnType => {
  const pairSocketList = __onlineUsers.entries()

  for (const pair of pairSocketList)
    if (pair[0] === userId)
      return {
        status: true,
        existingUserSocketId: pair[1],
      }

  return {
    status: false,
    existingUserSocketId: null,
  }
}
