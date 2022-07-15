import { GetBalanceService } from '@/data/services/get-balance-service'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from './controller'

type HttpRequest = {
  body: Object
  token: string
  locals: { user: {id: string}}
}

export class GetBalanceController extends Controller {
  constructor (private readonly getBalanceService: GetBalanceService) {
    super()
  }

  override async perform (params: HttpRequest): Promise<HttpResponse> {
    const { user } = params.locals
    try {
      const result = await this.getBalanceService.exec({ id: user.id })
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
