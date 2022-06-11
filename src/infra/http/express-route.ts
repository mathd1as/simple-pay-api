import { RequestHandler } from 'express'

export const adaptExpressRoute = (controller: any): RequestHandler => {
  return async (req: any, res: any) => {
    const httpResponse = await controller.handle({ ...req.body })
    if (httpResponse.statusCode === 200) {
      res.status(200).json(httpResponse.data)
    } else {
      res.status(httpResponse.statusCode).json({ error: httpResponse.data.message })
    }
  }
}
