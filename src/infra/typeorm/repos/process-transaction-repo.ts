import { ProcessTransactionRepo } from '@/domain/contracts/repos'
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
    const { value, paymentMethod, cardNumber, cardHolderName, validity, payableId, userId } = params
    const securityCode = params.securityCode.toString()
    const insertResult = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(PgTransaction)
      .values([
        { value, paymentMethod, cardNumber, securityCode, cardHolderName, validity, payableId, userId }
      ])
      .execute()

    return insertResult.identifiers[0].id
  }
}
