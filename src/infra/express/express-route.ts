import { RequestHandler } from 'express'

export const adaptExpressRoute = (controller: any): RequestHandler => {
  return async (req: any, res: any) => {
    let payloadController
    if (req.headers.authorization !== undefined) {
      payloadController = {
        body: req.body,
        token: req.headers.authorization
      }
    } else {
      payloadController = {
        body: req.body
      }
    }
    const httpResponse = await controller.handle({ ...payloadController })
    if (httpResponse.statusCode === 200) {
      res.status(200).json(httpResponse.data)
    } else {
      res.status(httpResponse.statusCode).json({ error: httpResponse.data.message })
    }
  }
}
