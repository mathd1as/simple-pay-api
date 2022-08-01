import { FetchTransactions } from '@/domain/contracts/use-cases/fetch-transactions'
import { FetchTransactionsRepo } from '../contracts/repos/FetchTransactionsRepo'

export class FetchTransactionsService implements FetchTransactions {
  constructor (private readonly fethUserTransactionsRepo: FetchTransactionsRepo) {}
  async exec (params: FetchTransactions.Params): Promise<FetchTransactions.Result> {
    return await this.fethUserTransactionsRepo.perform(params)
  }
}
