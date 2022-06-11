import { ProcessTransactionService } from '@/data/services'
import { makeProcessTransactionRepo } from '../repositories/make-process-transaction-repo'

export const makeProcessTransactionService = (): ProcessTransactionService => {
  return new ProcessTransactionService(
    makeProcessTransactionRepo()
  )
}
