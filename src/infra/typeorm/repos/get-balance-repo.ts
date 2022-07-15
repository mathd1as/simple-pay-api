import { DataSource } from 'typeorm'
import { PgTransaction } from '@/infra/typeorm/entities'
import { GetBalanceRepo } from '@/data/contracts/repos/get-balance-repo'

export class GetBalanceRepository implements GetBalanceRepo {
  constructor (private readonly dataSource: DataSource) {}

  async getUserTransactions (params: GetBalanceRepo.Params): Promise<GetBalanceRepo.Result> {
    const { id } = params
    const transaction = await this.dataSource
      .createQueryBuilder()
      .select('transaction')
      .from(PgTransaction, 'transaction')
      .where('transaction.userId = :id', { id })
      .getMany()

    return transaction
  }
}
