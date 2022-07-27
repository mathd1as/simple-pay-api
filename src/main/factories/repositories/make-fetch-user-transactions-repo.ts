import { AppDataSource } from '@/infra/typeorm/data-source'
import { FetchUserTransactionsRepository } from '@/infra/typeorm/repos/fetch-user-transactions'

export const makeFetchUserTransactionsRepo = (): FetchUserTransactionsRepository => {
  AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))
  return new FetchUserTransactionsRepository(AppDataSource)
}
