import { RequestHandler } from 'express'

export const adaptExpressRoute = (controller: any): RequestHandler => {
  return async (req: any, res: any) => {
    const payloadController = {
      ...req.body,
      token: req.headers.authorization
    }
    const httpResponse = await controller.handle({ ...payloadController })
    if (httpResponse.statusCode === 200) {
      res.status(200).json(httpResponse.data)
    } else {
      res.status(httpResponse.statusCode).json({ error: httpResponse.data.message })
    }
  }
}
