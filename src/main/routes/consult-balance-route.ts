import { adaptExpressRoute } from '@/infra/express/express-route'
import { makeConsultBalanceController } from '../factories/controllers/make-consult-balance-controller'
import { makeAuthenticationMiddleware } from '../factories/middlewares/make-authentication-middleware'
import { adaptExpressMiddleware } from '@/infra/express/express-middleware'

import { Router } from 'express'

export default (router: Router): void => {
  const controller = makeConsultBalanceController()
  const middleware = makeAuthenticationMiddleware()
  router.get('/balance', adaptExpressMiddleware(middleware), adaptExpressRoute(controller))
}
