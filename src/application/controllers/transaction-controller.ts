import { ProcessTransaction } from '@/domain/features'
import { PaymentMethod } from '@/domain/models'

export class TransactionController {
  constructor (private readonly processTransaction: ProcessTransaction) {}

  async handle (httpRequest: any): Promise<void> {
    const teste = {
      value: 10,
      paymentMethod: PaymentMethod.credit_card,
      cardNumber: 1044,
      CardholderName: 'string',
      validity: new Date(),
      securityCode: 154
    }

    await this.processTransaction.exec(teste)
  }
}
