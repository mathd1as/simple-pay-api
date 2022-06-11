import { ProcessTransactionRepoository } from '@/infra/typeorm/repos/process-transaction-repo'

export const makeProcessTransactionRepo = (): ProcessTransactionRepoository => {
  return new ProcessTransactionRepoository()
}
