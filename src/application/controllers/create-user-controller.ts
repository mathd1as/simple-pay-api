import { HttpResponse } from '@/application/helpers/http'
import { serverError, ok } from '@/application/helpers'
import { CreateUserService } from '@/data/services/create-user-service'
import { CreateUserDTO } from '@/application/dtos/create-user-dto'

type HttpRequest = {
  body: CreateUserDTO
}

export class CreateUserController {
  constructor (private readonly createUserService: CreateUserService) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (httpRequest.body.password !== httpRequest.body.confirmPassword) {
        throw new Error('As senhas não coincidem')
      }
      const user = {
        name: httpRequest.body.name,
        email: httpRequest.body.email,
        password: httpRequest.body.password
      }
      const result = await this.createUserService.exec(user)
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
