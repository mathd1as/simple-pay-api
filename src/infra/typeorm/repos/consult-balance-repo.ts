import { DataSource } from 'typeorm'
import { PgTransaction } from '@/infra/typeorm/entities'
import { ConsultBalanceRepo } from '@/data/contracts/repos/consult-balance-repo'

export class ConsultBalanceRepository implements ConsultBalanceRepo {
  constructor (private readonly dataSource: DataSource) {}

  async getUserTransactions (params: ConsultBalanceRepo.Params): Promise<ConsultBalanceRepo.Result> {
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
