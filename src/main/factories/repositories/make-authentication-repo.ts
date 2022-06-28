import { AuthenticationRepository } from '@/infra/typeorm/repos/authentication-repo'
import { AppDataSource } from '@/infra/typeorm/data-source'

export const makeAuthenticationRepo = (): AuthenticationRepository => {
  AppDataSource.initialize()
    .then(() => {
    // here you can start to work with your database
    })
    .catch((error) => console.log(error))
  return new AuthenticationRepository(AppDataSource)
}
