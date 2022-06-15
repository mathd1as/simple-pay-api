import { ProcessTransactionService } from '@/data/services'
import { HttpResponse } from '@/application/helpers/http'
import { TransactionDto } from '@/domain/models/transaction-dto'

type HttpRequest = {
  body: TransactionDto
  token: string
}

export class ProcessTransactionController {
  constructor (private readonly ProcessTransactionService: ProcessTransactionService) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (httpRequest.token === undefined) {
      return {
        statusCode: 400,
        data: new Error('Authentication token is required')
      }
    }
    const result = await this.ProcessTransactionService.exec(httpRequest.body)

    return {
      statusCode: 200,
      data: result
    }
  }
}
