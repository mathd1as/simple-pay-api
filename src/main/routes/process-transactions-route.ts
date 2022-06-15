import { Router } from 'express'
import { makeProcessTransactionController } from '@/main/factories/controllers/make-process-transaction-controller'
import { adaptExpressRoute } from '@/infra/express/express-route'

export default (router: Router): void => {
  const controller = makeProcessTransactionController()
  router.post('/process-transaction', adaptExpressRoute(controller))
}
