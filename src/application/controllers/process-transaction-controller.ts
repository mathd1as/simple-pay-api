import { ProcessTransactionService } from '@/data/services'
import { HttpResponse } from '@/application/helpers/http'
import { TransactionDto } from '@/domain/models/transaction-dto'
import { serverError, unauthorized, ok } from '@/application/helpers'

type HttpRequest = {
  body: TransactionDto
  token: string
}

export class ProcessTransactionController {
  constructor (private readonly ProcessTransactionService: ProcessTransactionService) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (httpRequest.token === undefined) return unauthorized()
    try {
      const result = await this.ProcessTransactionService.exec(httpRequest.body)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
