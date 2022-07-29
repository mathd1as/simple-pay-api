import { Transaction } from '@/domain/entities/models/transaction'

export interface ConsultBalanceRepo {
  getUserTransactions: (params: ConsultBalanceRepo.Params) => Promise<ConsultBalanceRepo.Result>
}

export namespace ConsultBalanceRepo {
  export type Params = { id: number }
  export type Result = Transaction[] | []
}
