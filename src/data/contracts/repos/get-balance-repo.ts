import { Transaction } from '@/domain/models/transaction'

export interface GetBalanceRepo {
  getUserTransactions: (params: GetBalanceRepo.Params) => Promise<GetBalanceRepo.Result>
}

export namespace GetBalanceRepo {
  export type Params = { id: string }
  export type Result = Transaction[]
}
