import { Router } from 'express'
import { makeProcessTransactionController } from '@/main/factories/controllers/make-process-transaction-controller'
import { adaptExpressRoute } from '@/main/adapters/express-route'
import { makeAuthenticationMiddleware } from '../factories/middlewares/make-authentication-middleware'
import { adaptExpressMiddleware } from '@/main/adapters/express-middleware'

export default (router: Router): void => {
  const controller = makeProcessTransactionController()
  const middleware = makeAuthenticationMiddleware()
  router.post('/transaction', adaptExpressMiddleware(middleware), adaptExpressRoute(controller))
}
