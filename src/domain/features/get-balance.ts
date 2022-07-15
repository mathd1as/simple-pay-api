import { Transaction } from '@/domain/models/transaction'

export interface GetBalance {
  exec: (params: GetBalance.Params) => Promise<GetBalance.Result>
}

export namespace GetBalance {
  export type Params = { id: string }
  export type Result = Transaction
}
