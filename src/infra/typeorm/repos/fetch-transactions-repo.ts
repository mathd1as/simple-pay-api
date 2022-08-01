import { FetchTransactionsRepo } from '@/domain/contracts/repos/FetchTransactionsRepo'
import { DataSource } from 'typeorm'
import { PgTransaction } from '../entities'

export class FetchTransactionsRepository implements FetchTransactionsRepo {
  constructor (private readonly dataSource: DataSource) {}
  async perform (params: FetchTransactionsRepo.Params): Promise<FetchTransactionsRepo.Result> {
    const { id } = params
    const transactions = await this.dataSource
      .createQueryBuilder()
      .select('transaction')
      .from(PgTransaction, 'transaction')
      .where('transaction.userId = :id', { id })
      .getMany()

    return transactions
  }
}
