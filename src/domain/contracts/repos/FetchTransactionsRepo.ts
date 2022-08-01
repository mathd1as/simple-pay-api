import { Transaction } from '@/domain/entities/models'

export interface FetchTransactionsRepo {
  perform: (params: FetchTransactionsRepo.Params) => Promise<FetchTransactionsRepo.Result>
}

export namespace FetchTransactionsRepo {
  export type Params = { id: number }
  export type Result = Transaction[] | []
}
