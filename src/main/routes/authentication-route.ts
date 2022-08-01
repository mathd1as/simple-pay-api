import { adaptExpressRoute } from '@/main/adapters/express-route'
import { makeAuthenticationController } from '@/main/factories/controllers/make-authentication-controller'

import { Router } from 'express'

export default (router: Router): void => {
  const controller = makeAuthenticationController()
  router.post('/authentication', adaptExpressRoute(controller))
}
