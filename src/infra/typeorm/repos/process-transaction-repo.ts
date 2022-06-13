import { ProcessTransactionRepo } from '@/data/contracts/repos'
import { DataSource } from 'typeorm'
import { PgPayable, PgTransaction } from '@/infra/typeorm/entities'

export class ProcessTransactionRepoository implements ProcessTransactionRepo {
  constructor (private readonly dataSource: DataSource) {}
  async savePayable (params: ProcessTransactionRepo.PayableParams): Promise<ProcessTransactionRepo.PayableResult> {
    const { value, status, paymentDateHour } = params

    const insertResult = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(PgPayable)
      .values([
        { value, status, paymentDateHour }
      ])
      .execute()

    return insertResult.identifiers[0].id
  }

  async saveTransaction (params: ProcessTransactionRepo.TrasactionParams): Promise<ProcessTransactionRepo.TransactionResult> {
    // const { value, paymentMethod, cardNumber, CardholderName, validity, payableId } = params

    const insertResult = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(PgTransaction)
      .values([
        // { value, paymentMethod, cardNumber, CardholderName, validity, payableId }
      ])
      .execute()

    return insertResult.identifiers[0].id
  }
}
