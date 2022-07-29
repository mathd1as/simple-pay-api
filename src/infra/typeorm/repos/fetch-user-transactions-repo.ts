import { FetchUserTransactionsRepo } from '@/domain/contracts/repos/FetchUserTransactionsRepo'
import { DataSource } from 'typeorm'
import { PgTransaction } from '../entities'

export class FetchUserTransactionsRepository implements FetchUserTransactionsRepo {
  constructor (private readonly dataSource: DataSource) {}
  async perform (params: FetchUserTransactionsRepo.Params): Promise<FetchUserTransactionsRepo.Result> {
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
