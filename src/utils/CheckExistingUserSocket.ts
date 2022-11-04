import { CheckExistingUserSocketReturnType } from '../types/CheckExistingUserSocketReturnType'

export const checkExistingUserSocket = (
  userId: number
): CheckExistingUserSocketReturnType => {
  const pairSocketList = GL_ONLINE_USERS.entries()

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
