import { CreateUserService } from '@/domain/services/create-user-service'
import { makeCreateUserRepo } from '../repositories/make-create-user-repo'
import { Bcrypto } from '@/infra/bcrypt/bcrypto'

export const makeCreateUserService = (): CreateUserService => {
  return new CreateUserService(
    makeCreateUserRepo(),
    new Bcrypto()
  )
}
