import { RequestHandler } from 'express'

type Adapter = (middleware: any) => RequestHandler

export const adaptExpressMiddleware: Adapter = middleware => async (req, res, next) => {
  req.headers.authorization = req.headers.authorization?.split(' ')[1]
  const { statusCode, data } = await middleware.handle({ ...req.headers })
  if (statusCode === 200) {
    req.locals = data
    next()
  } else {
    res.status(statusCode).json({ error: data.message })
  }
}
