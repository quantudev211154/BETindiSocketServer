"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistingUserSocket = void 0;
const checkExistingUserSocket = (userId) => {
    const pairSocketList = GL_ONLINE_USERS.entries();
    for (const pair of pairSocketList)
        if (pair[0] === userId)
            return {
                status: true,
                existingUserSocketId: pair[1],
            };
    return {
        status: false,
        existingUserSocketId: null,
    };
};
exports.checkExistingUserSocket = checkExistingUserSocket;
