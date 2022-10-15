import express, { Express } from 'express'
import { Server } from 'socket.io'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

export class ExpressApp {
  app: Express

  constructor() {
    dotenv.config()
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(cookieParser())
  }

  getExpressApp() {
    return this.app
  }
}
