import { FetchUserTransactions } from '@/domain/contracts/use-cases/fetch-user-transactions'
import { FetchUserTransactionsRepo } from '../contracts/repos/FetchUserTransactionsRepo'

export class FetchUserTransactionsService implements FetchUserTransactions {
  constructor (private readonly fethUserTransactionsRepo: FetchUserTransactionsRepo) {}
  async exec (params: FetchUserTransactions.Params): Promise<FetchUserTransactions.Result> {
    return await this.fethUserTransactionsRepo.perform(params)
  }
}
