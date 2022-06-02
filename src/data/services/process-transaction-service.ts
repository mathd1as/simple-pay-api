import { ProcessTransaction } from '@/domain/features'
import { PaymentMethod, PayableStatus, Payable } from '@/domain/models'
import { ProcessTransactionRepo } from '@/data/contracts'
import { ProcessTransactionError } from '@/domain/errors'

export class ProcessTransactionService implements ProcessTransaction {
  constructor (private readonly processTransactionRepo: ProcessTransactionRepo) {}

  async exec (params: ProcessTransaction.Params): Promise<ProcessTransaction.Result> {
    let payableObject: Payable | undefined

    if (params.paymentMethod === PaymentMethod.credit_card) {
      const value = params.value * 0.5
      const paymentDate = new Date()
      paymentDate.setDate(paymentDate.getDate() + 30)

      payableObject = {
        value,
        status: PayableStatus.waiting_funds,
        paymentDateHour: paymentDate
      }
    }

    if (params.paymentMethod === PaymentMethod.debit_card) {
      const value = params.value * 0.3
      payableObject = {
        value,
        status: PayableStatus.paid,
        paymentDateHour: new Date()
      }
    }

    console.log({ payableObject })

    if (payableObject === undefined) {
      throw new ProcessTransactionError()
    }

    await this.processTransactionRepo.saveTransaction(params)
    await this.processTransactionRepo.savePayable(payableObject)

    return 'teste'
  }
}
