import { ProcessTransactionError } from '@/domain/errors'
import { Transaction } from '@/domain/models/transaction'

export interface ProcessTransaction {
  exec: (params: ProcessTransaction.Params) => Promise<ProcessTransaction.Result>
}

export namespace ProcessTransaction {
  export type Params = Transaction

  export type Result = string | ProcessTransactionError
}
