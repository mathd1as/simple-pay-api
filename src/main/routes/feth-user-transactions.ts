import { Router } from 'express'
import { adaptExpressRoute } from '@/infra/express/express-route'
import { makeAuthenticationMiddleware } from '../factories/middlewares/make-authentication-middleware'
import { adaptExpressMiddleware } from '@/infra/express/express-middleware'
import { makeFetchUserTransactionsController } from '../factories/controllers/make-fetch-user-transactions-controller'

export default (router: Router): void => {
  const controller = makeFetchUserTransactionsController()
  const middleware = makeAuthenticationMiddleware()
  router.get('/transaction', adaptExpressMiddleware(middleware), adaptExpressRoute(controller))
}
