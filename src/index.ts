import { ExpressApp } from './class/ExpressApp'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { handleSocketEvent } from './services/SocketService'

const app = new ExpressApp().getExpressApp()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true,
  },
})

const PORT = process.env.PORT || 8000

httpServer.listen(PORT, () => {
  console.log('NOTI: Server is running on http://localhost:' + PORT)
})

global.GL_ONLINE_USERS = new Map<string, string>()

io.on('connection', handleSocketEvent)
