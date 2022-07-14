import { GetBalanceService } from '@/data/services/get-balance-service'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from './controller'

type HttpRequest = {
  body: any
}

export class GetBalanceController extends Controller {
  constructor (private readonly getBalanceService: GetBalanceService) {
    super()
  }

  override async perform (params: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.getBalanceService.exec('teste')
      console.log(result)
      return ok({ teste: 'teste' })
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
