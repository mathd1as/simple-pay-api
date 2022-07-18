import { AppDataSource } from '@/infra/typeorm/data-source'
import { ConsultBalanceRepository } from '@/infra/typeorm/repos/consult-balance-repo'

export const makeConsultBalanceRepo = (): ConsultBalanceRepository => {
  AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))
  return new ConsultBalanceRepository(AppDataSource)
}
