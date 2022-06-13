import { ProcessTransactionRepo } from '@/data/contracts/repos'
import { DataSource } from 'typeorm'
import { PgPayable } from '@/infra/typeorm/entities/payable'
import { PaymentMethod } from '@/domain/models'

export class ProcessTransactionRepoository implements ProcessTransactionRepo {
  constructor (private readonly dataSource: DataSource) {}
  async savePayable (params: ProcessTransactionRepo.PayableParams): Promise<ProcessTransactionRepo.PayableResult> {
    const teste = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(PgPayable)
      .values([
        { value: 10, status: 'Saw', paymentDateHour: PaymentMethod.credit_card, transactionId: 10 }
      ])
      .execute()

    console.log({ teste })
    return 10
  }

  async saveTransaction (params: ProcessTransactionRepo.TrasactionParams): Promise<ProcessTransactionRepo.TransactionResult> {
    return 'teste'
  }
}
