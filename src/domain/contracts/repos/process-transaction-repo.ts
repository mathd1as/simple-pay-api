import { Payable, Transaction } from '@/domain/entities/models'

export interface ProcessTransactionRepo {
  savePayable: (params: ProcessTransactionRepo.PayableParams) => Promise<ProcessTransactionRepo.PayableResult>
  saveTransaction: (params: ProcessTransactionRepo.TrasactionParams) => Promise<ProcessTransactionRepo.TransactionResult>
}

export namespace ProcessTransactionRepo {
  export type PayableParams = Payable

  export type PayableResult = number

  export type TrasactionParams = Transaction

  export type TransactionResult = number
}
