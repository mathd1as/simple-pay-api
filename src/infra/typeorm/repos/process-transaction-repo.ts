import { ProcessTransactionRepo } from '@/data/contracts/repos'
import { DataSource } from 'typeorm'
import { PgPayable, PgTransaction } from '@/infra/typeorm/entities'

export class ProcessTransactionRepoository implements ProcessTransactionRepo {
  constructor (private readonly dataSource: DataSource) {}
  async savePayable (params: ProcessTransactionRepo.PayableParams): Promise<ProcessTransactionRepo.PayableResult> {
    try {
      const { value, status, paymentDateHour } = params
      console.log({ params })
      const insertResult = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(PgPayable)
        .values([
          { value, status, paymentDateHour }
        ])
        .execute()

      return insertResult.identifiers[0].id
    } catch (error) {
      // console.log(error)
      return 0
    }
  }

  async saveTransaction (params: ProcessTransactionRepo.TrasactionParams): Promise<ProcessTransactionRepo.TransactionResult> {
    try {
      console.log({ params })
      const { value, paymentMethod, cardNumber, cardHolderName, validity, payableId } = params
      const insertResult = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(PgTransaction)
        .values([
          { value, paymentMethod, cardNumber, cardHolderName, validity, payableId }
        ])
        .execute()

      return insertResult.identifiers[0].id
    } catch (error) {
      // console.log(error)
      return 'teste'
    }
  }
}
