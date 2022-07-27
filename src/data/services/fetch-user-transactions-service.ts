import { FetchUserTransactions } from '@/domain/features/fetch-user-transactions'
import { FetchUserTransactionsRepo } from '../contracts/repos/FetchUserTransactionsRepo'

export class FetchUserTransactionsService implements FetchUserTransactions {
  constructor (private readonly fethUserTransactionsRepo: FetchUserTransactionsRepo) {}
  async exec (params: string): Promise<string> {
    return 'test'
  }
}
