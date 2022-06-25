import { Router } from 'express'
import { makeProcessTransactionController } from '@/main/factories/controllers/make-process-transaction-controller'
import { adaptExpressRoute } from '@/infra/express/express-route'
import { makeAuthenticationMiddleware } from '../factories/middlewares/make-authentication-middleware'
import { adaptExpressMiddleware } from '@/infra/express/express-middleware'

export default (router: Router): void => {
  const controller = makeProcessTransactionController()
  const middleware = makeAuthenticationMiddleware()
  router.post('/transaction', adaptExpressMiddleware(middleware), adaptExpressRoute(controller))
}
