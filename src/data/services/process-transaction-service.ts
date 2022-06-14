import { ProcessTransaction } from '@/domain/features'
import { PaymentMethod, PayableStatus, Payable } from '@/domain/models'
import { ProcessTransactionRepo } from '@/data/contracts/repos'
import { ProcessTransactionError } from '@/domain/errors'

export class ProcessTransactionService implements ProcessTransaction {
  constructor (private readonly processTransactionRepo: ProcessTransactionRepo) {}

  async exec (params: ProcessTransaction.Params): Promise<ProcessTransaction.Result> {
    let payableObject: Payable | undefined

    if (params.paymentMethod === PaymentMethod.credit_card) {
      const value = params.value * 0.95
      const paymentDate = new Date()
      paymentDate.setDate(paymentDate.getDate() + 30)

      payableObject = {
        value,
        status: PayableStatus.waiting_funds,
        paymentDateHour: paymentDate
      }
    }

    if (params.paymentMethod === PaymentMethod.debit_card) {
      const value = params.value * 0.97
      payableObject = {
        value,
        status: PayableStatus.paid,
        paymentDateHour: new Date()
      }
    }

    if (payableObject === undefined) {
      throw new ProcessTransactionError()
    }

    const payableId = await this.processTransactionRepo.savePayable(payableObject)

    const transactionObject = {
      value: params.value,
      paymentMethod: params.paymentMethod,
      cardNumber: params.cardNumber,
      cardHolderName: params.cardHolderName,
      validity: params.validity,
      securityCode: params.securityCode,
      payableId
    }

    await this.processTransactionRepo.saveTransaction(transactionObject)

    return 'teste'
  }
}
