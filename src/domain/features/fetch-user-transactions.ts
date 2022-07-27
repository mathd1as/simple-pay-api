import { Transaction } from '../models'

export interface FetchUserTransactions {
  exec: (params: FetchUserTransactions.Params) => Promise<FetchUserTransactions.Result>
}

export namespace FetchUserTransactions {
  export type Params = { id: number }
  export type Result = Transaction[] | []
}
