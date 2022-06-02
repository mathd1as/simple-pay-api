import { Payable, Transaction } from '@/domain/models'

export interface ProcessTransactionRepo {
  savePayable: (params: ProcessTransactionRepo.PayableParams) => Promise<ProcessTransactionRepo.PayableResult>
  saveTransaction: (params: ProcessTransactionRepo.TrasactionParams) => Promise<ProcessTransactionRepo.TransactionResult>
}

namespace ProcessTransactionRepo {
  export type PayableParams = Payable

  export type PayableResult = string | undefined

  export type TrasactionParams = Transaction

  export type TransactionResult = string
}
