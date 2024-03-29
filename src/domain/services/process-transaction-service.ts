import { ProcessTransaction } from '@/domain/contracts/use-cases'
import { PayableStatus, Payable } from '@/domain/entities/models'
import { ProcessTransactionRepo } from '@/domain/contracts/repos'
import { ProcessTransactionError } from '@/domain/entities/errors'

export class ProcessTransactionService implements ProcessTransaction {
  constructor (private readonly processTransactionRepo: ProcessTransactionRepo) {}

  async exec (params: ProcessTransaction.Params): Promise<ProcessTransaction.Result> {
    let payableObject: Payable | undefined

    if (params.paymentMethod === 'credit_card') {
      const value = params.value * 0.95
      const paymentDate = new Date()
      paymentDate.setDate(paymentDate.getDate() + 30)

      payableObject = {
        value,
        status: PayableStatus.waiting_funds,
        paymentDateHour: paymentDate
      }
    } else {
      const value = params.value * 0.97
      payableObject = {
        value,
        status: PayableStatus.paid,
        paymentDateHour: new Date()
      }
    }

    try {
      const payableId = await this.processTransactionRepo.savePayable(payableObject)

      const transactionObject = {
        value: params.value,
        paymentMethod: params.paymentMethod,
        cardNumber: params.cardNumber,
        cardHolderName: params.cardHolderName,
        securityCode: params.securityCode,
        payableId,
        userId: params.userId,
        validity: new Date()
      }

      const id = await this.processTransactionRepo.saveTransaction(transactionObject)

      return { id }
    } catch (error) {
      console.log({ error })
      throw new ProcessTransactionError()
    }
  }
}
