import express from 'express'
import morgan from 'morgan'
import {Server as SocketServer} from 'socket.io'
import http from 'http'
import cors from 'cors'

import {PORT} from './config.js'

const APP = express()
const SERVER = http.createServer(APP)
const IO = new SocketServer(SERVER, {
    cors:{
        origin: 'http://localhost:3000',
    }
})

APP.use(cors())
APP.use(morgan('dev'))

IO.on('connection', () =>{
    console.log('new user connected')
})

SERVER.listen(PORT)
console.log('Server running on port: ', PORT)