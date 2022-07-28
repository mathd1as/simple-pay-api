import { FetchUserTransactionsService } from '@/data/services/fetch-user-transactions-service'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from './controller'

type HttpRequest = {
  body: Object
  token: string
  locals: { user: { id: number }}
}

export class FetchUserTransactionsController extends Controller {
  constructor (private readonly fetchUserTransactionsService: FetchUserTransactionsService) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { user } = httpRequest.locals
    try {
      const result = await this.fetchUserTransactionsService.exec({ id: user.id })
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
