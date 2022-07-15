import { AppDataSource } from '@/infra/typeorm/data-source'
import { GetBalanceRepository } from '@/infra/typeorm/repos/get-balance-repo'

export const makeGetBalanceRepo = (): GetBalanceRepository => {
  AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))
  return new GetBalanceRepository(AppDataSource)
}
