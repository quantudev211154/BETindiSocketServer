"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocketUsersManager {
    constructor() {
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    addUser(newUser) {
        const existingFlag = this.users.find((user) => user.flag === newUser.flag);
        if (existingFlag === undefined) {
            this.users.push(newUser);
        }
    }
    removeUser(flag) {
        this.users = this.users.filter((user) => user.flag !== flag);
    }
    findSocketIdsByUserId(userId) {
        return this.users.filter((user) => user.userId === userId);
    }
}
const SocketManager = new SocketUsersManager();
exports.default = SocketManager;
