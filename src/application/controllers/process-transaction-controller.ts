import { ProcessTransaction } from '@/domain/features'
import { PaymentMethod } from '@/domain/models'

export class ProcessTransactionController {
  constructor (private readonly processTransaction: ProcessTransaction) {}

  async handle (httpRequest: any): Promise<any> {
    const teste = {
      value: 10,
      paymentMethod: PaymentMethod.credit_card,
      cardNumber: 1044,
      CardholderName: 'string',
      validity: new Date(),
      securityCode: 154
    }

    const result = await this.processTransaction.exec(teste)

    return {
      statusCode: 200,
      data: result
    }
  }
}
