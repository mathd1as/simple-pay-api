import { ProcessTransactionController } from '@/application/controllers/process-transaction-controller'
import { makeProcessTransactionService } from '../services/make-process-transaction-service'

export const makeProcessTransactionController = (): ProcessTransactionController => {
  return new ProcessTransactionController(
    makeProcessTransactionService()
  )
}
