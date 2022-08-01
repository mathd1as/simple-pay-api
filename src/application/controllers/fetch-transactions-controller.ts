import { FetchTransactionsService } from '@/domain/services/fetch-transactions-service'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from './controller'

type HttpRequest = {
  body: Object
  token: string
  locals: { user: { id: number }}
}

export class FetchTransactionsController extends Controller {
  constructor (private readonly fetchTransactionsService: FetchTransactionsService) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { user } = httpRequest.locals
    try {
      const result = await this.fetchTransactionsService.exec({ id: user.id })
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
