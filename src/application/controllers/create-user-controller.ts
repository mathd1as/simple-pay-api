import { HttpResponse } from '@/application/helpers/http'
import { serverError, ok } from '@/application/helpers'
import { CreateUserService } from '@/data/services/create-user-service'
import { User } from '@/domain/models/user'

type HttpRequest = {
  body: User
}

export class CreateUserController {
  constructor (private readonly createUserService: CreateUserService) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.createUserService.exec(httpRequest.body)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
