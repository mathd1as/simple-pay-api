import { FetchUserTransactions } from '@/domain/features/fetch-user-transactions'
import { FetchUserTransactionsRepo } from '../contracts/repos/FetchUserTransactionsRepo'

export class FetchUserTransactionsService implements FetchUserTransactions {
  constructor (private readonly fethUserTransactionsRepo: FetchUserTransactionsRepo) {}
  async exec (params: FetchUserTransactions.Params): Promise<FetchUserTransactions.Result> {
    return await this.fethUserTransactionsRepo.perform(params)
  }
}
