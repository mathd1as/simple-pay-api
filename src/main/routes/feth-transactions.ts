import { Router } from 'express'
import { adaptExpressRoute } from '@/infra/express/express-route'
import { makeAuthenticationMiddleware } from '../factories/middlewares/make-authentication-middleware'
import { adaptExpressMiddleware } from '@/infra/express/express-middleware'
import { makeFetchTransactionsController } from '../factories/controllers/make-fetch-transactions-controller'

export default (router: Router): void => {
  const controller = makeFetchTransactionsController()
  const middleware = makeAuthenticationMiddleware()
  router.get('/transaction', adaptExpressMiddleware(middleware), adaptExpressRoute(controller))
}
