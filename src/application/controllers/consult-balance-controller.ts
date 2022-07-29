import { ConsultBalanceService } from '@/domain/services/consult-balance-service'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from './controller'

type HttpRequest = {
  body: Object
  token: string
  locals: { user: { id: string }}
}

export class ConsultBalanceController extends Controller {
  constructor (private readonly consultBalanceService: ConsultBalanceService) {
    super()
  }

  override async perform (params: HttpRequest): Promise<HttpResponse> {
    const { user } = params.locals
    try {
      const result = await this.consultBalanceService.exec({ id: Number(user.id) })
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
