import { ProcessTransaction } from '@/domain/features'
import { PaymentMethod, PayableStatus } from '@/domain/models'

export class ProcessTransactionService implements ProcessTransaction {
  async exec (params: ProcessTransaction.Params): Promise<ProcessTransaction.Result> {
    if (params.paymentMethod === PaymentMethod.credit_card) {
      const paymentDate = new Date()
      paymentDate.setDate(paymentDate.getDate() + 30)

      const payableObject = {
        status: PayableStatus.waiting_funds,
        paymentDate: paymentDate
      }

      console.log({ payableObject })
      return 'teste1'
    }

    if (params.paymentMethod === PaymentMethod.debit_card) {
      const payableObject = {
        status: PayableStatus.paid,
        paymentDate: new Date()
      }

      console.log({ payableObject })
      return 'teste1'
    }

    return 'teste'
  }
}
