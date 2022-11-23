"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressApp_1 = require("./class/ExpressApp");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const SocketService_1 = require("./services/SocketService");
const app = new ExpressApp_1.ExpressApp().getExpressApp();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        credentials: true,
    },
    maxHttpBufferSize: 20000,
});
global.GL_IO = io;
const PORT = process.env.PORT || 8000;
httpServer.listen(PORT, () => {
    console.log('NOTI: Socket server is running on http://localhost:' + PORT);
});
global.GL_ONLINE_USERS = new Map();
io.on('connection', SocketService_1.handleSocketEvent);
