import { FetchUserTransactionsRepo } from '@/data/contracts/repos/FetchUserTransactionsRepo'
import { DataSource } from 'typeorm'

export class FetchUserTransactionsRepository implements FetchUserTransactionsRepo {
  constructor (private readonly dataSource: DataSource) {}
  async perform (params: string): Promise<string> {
    return 'testre'
  }
}
