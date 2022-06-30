import { ProcessTransactionService } from '@/data/services'
import { HttpResponse } from '@/application/helpers/http'
import { serverError, ok } from '@/application/helpers'
import { TransactionDto } from '@/domain/models'
import { ProcessTransactionDTO } from '../dtos/process-transaction-dto'

type HttpRequest = {
  body: ProcessTransactionDTO
  locals: any
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
      userId: httpRequest.locals.user.id
    }

    try {
      const result = await this.ProcessTransactionService.exec(transactionDto)
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
