import { CreateUserController } from '@/application/controllers/create-user-controller'
import { makeCreateUserService } from '../services/make-create-user-service'

export const makeCreateUserController = (): CreateUserController => {
  return new CreateUserController(
    makeCreateUserService()
  )
}
