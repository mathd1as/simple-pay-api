import { ProcessTransactionService } from '@/domain/services'
import { makeProcessTransactionRepo } from '../repositories/make-process-transaction-repo'

export const makeProcessTransactionService = (): ProcessTransactionService => {
  return new ProcessTransactionService(
    makeProcessTransactionRepo()
  )
}
