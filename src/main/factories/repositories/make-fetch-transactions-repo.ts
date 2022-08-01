import { AppDataSource } from '@/infra/typeorm/data-source'
import { FetchTransactionsRepository } from '@/infra/typeorm/repos/fetch-transactions-repo'

export const makeFetchTransactionsRepo = (): FetchTransactionsRepository => {
  AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))
  return new FetchTransactionsRepository(AppDataSource)
}
