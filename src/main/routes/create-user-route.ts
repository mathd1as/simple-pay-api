import { adaptExpressRoute } from '@/infra/express/express-route'
import { makeCreateUserController } from '@/main/factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  const controller = makeCreateUserController()
  router.post('/user', adaptExpressRoute(controller))
}
