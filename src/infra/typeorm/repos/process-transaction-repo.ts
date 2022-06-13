import { ProcessTransactionRepo } from '@/data/contracts/repos'
import { DataSource } from 'typeorm'
import { PgPayable } from '@/infra/typeorm/entities/payable'

export class ProcessTransactionRepoository implements ProcessTransactionRepo {
  constructor (private readonly dataSource: DataSource) {}
  async savePayable (params: ProcessTransactionRepo.PayableParams): Promise<ProcessTransactionRepo.PayableResult> {
    const { value, status, paymentDateHour } = params
    console.log({ params })
    const teste = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(PgPayable)
      .values([
        { value, status, paymentDateHour }
      ])
      .execute()

    console.log({ teste })
    return 10
  }

  async saveTransaction (params: ProcessTransactionRepo.TrasactionParams): Promise<ProcessTransactionRepo.TransactionResult> {
    return 'teste'
  }
}
