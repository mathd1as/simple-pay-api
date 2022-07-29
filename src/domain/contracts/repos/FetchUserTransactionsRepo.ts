import { Transaction } from '@/domain/entities/models'

export interface FetchUserTransactionsRepo {
  perform: (params: FetchUserTransactionsRepo.Params) => Promise<FetchUserTransactionsRepo.Result>
}

export namespace FetchUserTransactionsRepo {
  export type Params = { id: number }
  export type Result = Transaction[] | []
}
