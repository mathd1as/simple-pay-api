import { ProcessTransactionService } from '@/data/services'
import { HttpResponse } from '@/application/helpers/http'
import { serverError, ok } from '@/application/helpers'
import { PaymentMethod, TransactionDto } from '@/domain/models'

type HttpRequest = {
  body: {
    value: number
    description: string
    paymentMethod: PaymentMethod
    cardNumber: number
    cardHolderName: string
    cardExpiringDate: string
    securityCode: number
  }
  locals: { userId: number }
}

export class ProcessTransactionController {
  constructor (private readonly ProcessTransactionService: ProcessTransactionService) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const transactionDto: TransactionDto = {
      value: httpRequest.body.value,
      description: httpRequest.body.description,
      paymentMethod: httpRequest.body.paymentMethod,
      cardNumber: httpRequest.body.cardNumber,
      cardHolderName: httpRequest.body.cardHolderName,
      cardExpiringDate: httpRequest.body.cardExpiringDate,
      securityCode: httpRequest.body.securityCode,
      userId: httpRequest.locals.userId
    }
    try {
      const result = await this.ProcessTransactionService.exec(transactionDto)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
