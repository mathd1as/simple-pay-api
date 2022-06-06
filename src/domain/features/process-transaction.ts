import { ProcessTransactionError } from '@/domain/errors'
import { TransactionDto } from '@/domain/models'

export interface ProcessTransaction {
  exec: (params: ProcessTransaction.Params) => Promise<ProcessTransaction.Result>
}

export namespace ProcessTransaction {
  export type Params = TransactionDto

  export type Result = string | ProcessTransactionError
}
