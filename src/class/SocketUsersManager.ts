import { ConnectionType } from '../types/ConnectionType'

class SocketUsersManager {
  private users: ConnectionType[]

  constructor() {
    this.users = []
  }

  getUsers() {
    return this.users
  }

  addUser(newUser: ConnectionType) {
    const existingFlag = this.users.find((user) => user.flag === newUser.flag)

    if (existingFlag === undefined) {
      this.users.push(newUser)
    }
  }

  removeUser(flag: number) {
    this.users = this.users.filter((user) => user.flag !== flag)
  }

  findSocketIdsByUserId(userId: number): ConnectionType[] {
    return this.users.filter((user) => user.userId === userId)
  }
}

const SocketManager = new SocketUsersManager()

export default SocketManager
