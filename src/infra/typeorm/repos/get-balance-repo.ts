import { DataSource } from 'typeorm'
import { PgTransaction } from '@/infra/typeorm/entities'
import { GetBalanceRepo } from '@/data/contracts/repos/get-balance-repo'

export class GetBalanceRepository {
  constructor (private readonly dataSource: DataSource) {}

  async getUserTransactions (params: GetBalanceRepo.Params): Promise<string> {
    // const { id } = params
    const id = 3
    const transaction = await this.dataSource
      .createQueryBuilder()
      .select('transaction')
      .from(PgTransaction, 'transaction')
      .where('transaction.userId = :id', { id })
      .getMany()

    console.log(transaction)
    return 'teste'
    // return transaction
  }
}
