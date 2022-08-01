import { Transaction } from '../../entities/models'

export interface FetchTransactions {
  exec: (params: FetchTransactions.Params) => Promise<FetchTransactions.Result>
}

export namespace FetchTransactions {
  export type Params = { id: number }
  export type Result = Transaction[] | []
}
