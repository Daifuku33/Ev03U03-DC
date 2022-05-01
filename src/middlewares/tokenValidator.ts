import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../lib/jwt"

const MISSING_AUTH_MESSAGE = 'Missing Authorization Message'

export default function tokenValidator() {
  return function (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
  
    if (!authHeader) {
      res.status(401).json({ message: MISSING_AUTH_MESSAGE })
      return
    }

    const [bearer, token] = authHeader.split(' ')

    if (bearer !== 'Bearer') {
      res.status(401).json({ message: MISSING_AUTH_MESSAGE })
      return
    }

    try {
      const tokenPayload = verifyToken(token)
      req.user = tokenPayload
    } catch {
      res.status(401).json({ message: MISSING_AUTH_MESSAGE })
      return
    }

    return next()
  }
}