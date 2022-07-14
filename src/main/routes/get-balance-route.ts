import { adaptExpressRoute } from '@/infra/express/express-route'
import { makeGetBalanceController } from '../factories/controllers/make-get-balance-controller'
import { makeAuthenticationMiddleware } from '../factories/middlewares/make-authentication-middleware'
import { adaptExpressMiddleware } from '@/infra/express/express-middleware'

import { Router } from 'express'

export default (router: Router): void => {
  const controller = makeGetBalanceController()
  const middleware = makeAuthenticationMiddleware()
  router.get('/balance', adaptExpressMiddleware(middleware), adaptExpressRoute(controller))
}
