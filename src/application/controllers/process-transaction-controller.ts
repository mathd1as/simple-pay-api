import { ProcessTransactionService } from '@/data/services'
import { PaymentMethod } from '@/domain/models'

export class ProcessTransactionController {
  constructor (private readonly ProcessTransactionService: ProcessTransactionService) {}

  async handle (httpRequest: any): Promise<any> {
    const teste = {
      value: 10,
      paymentMethod: PaymentMethod.credit_card,
      cardNumber: 1044,
      cardHolderName: 'string',
      validity: new Date(),
      securityCode: 154
    }

    const result = await this.ProcessTransactionService.exec(teste)

    return {
      statusCode: 200,
      data: result
    }
  }
}
