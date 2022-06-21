import { adaptExpressRoute } from '@/infra/express/express-route'
import { makeAuthenticationController } from '@/main/factories/controllers/make-authentication-controller'

import { Router } from 'express'

export default (router: Router): void => {
  const controller = makeAuthenticationController()
  router.post('/authentication', adaptExpressRoute(controller))
}
