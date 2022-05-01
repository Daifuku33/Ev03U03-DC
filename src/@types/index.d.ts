import  http from 'http'
import { UserTokenPayload } from '../models/dto/userDTO'

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    user?: UserTokenPayload
  }

  export interface Response extends http.ServerResponse, Express.Response {
    user?: UserTokenPayload
  }
}