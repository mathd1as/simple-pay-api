import { CreateUserService } from '@/data/services/create-user-service'
import { makeCreateUserRepo } from '../repositories/make-create-user-repo'

export const makeCreateUserService = (): CreateUserService => {
  return new CreateUserService(
    makeCreateUserRepo()
  )
}
