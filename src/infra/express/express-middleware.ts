import { RequestHandler } from 'express'

type Adapter = (middleware: any) => RequestHandler

export const adaptExpressMiddleware: Adapter = middleware => async (req, res, next) => {
  const { statusCode, data } = await middleware.handle({ ...req.headers })
  if (statusCode === 200) {
    req.locals = data
    next()
  } else {
    res.status(statusCode).json({ error: data.message })
  }
}
