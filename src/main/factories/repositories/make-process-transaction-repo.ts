import { ProcessTransactionRepoository } from '@/infra/typeorm/repos/process-transaction-repo'
import { AppDataSource } from '@/infra/typeorm/data-source'

export const makeProcessTransactionRepo = (): ProcessTransactionRepoository => {
  AppDataSource.initialize()
    .then(() => {
    // here you can start to work with your database
    })
    .catch((error) => console.log(error))
  return new ProcessTransactionRepoository(AppDataSource)
}
