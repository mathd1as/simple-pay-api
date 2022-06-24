import { CreateUserRepository } from '@/infra/typeorm/repos/create-user-repo'

import { AppDataSource } from '@/infra/typeorm/data-source'

export const makeCreateUserRepo = (): CreateUserRepository => {
  AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))
  return new CreateUserRepository(AppDataSource)
}
