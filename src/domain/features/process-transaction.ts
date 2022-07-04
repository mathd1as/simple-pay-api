import { ProcessTransactionError } from '@/domain/errors'
import { TransactionBaseData } from '@/domain/models'

export interface ProcessTransaction {
  exec: (params: ProcessTransaction.Params) => Promise<ProcessTransaction.Result>
}

export namespace ProcessTransaction {
  export type Params = TransactionBaseData

  export type Result = { id: number } | ProcessTransactionError
}
