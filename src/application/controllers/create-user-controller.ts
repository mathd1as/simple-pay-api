import { HttpResponse } from '@/application/helpers/http'
import { serverError, ok, badRequest } from '@/application/helpers'
import { CreateUserService } from '@/data/services/create-user-service'
import { CreateUserDTO } from '@/application/dtos/create-user-dto'
import { CreateUserError } from '@/domain/errors'
import { Controller } from './controller'
import { ValidationBuilder as Builder } from '@/application/validators/validation-builder'
import { Validator } from '../validators/validator'

type HttpRequest = {
  body: CreateUserDTO
}

export class CreateUserController extends Controller {
  constructor (private readonly createUserService: CreateUserService) {
    super()
  }

  override async perform (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (httpRequest.body.password !== httpRequest.body.confirmPassword) {
        return badRequest(new Error('As senhas não coincidem'))
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
      if (error instanceof CreateUserError) {
        return badRequest(error)
      }
      return serverError(error)
    }
  }

  override buildValidators (payload: any): Validator[] {
    return [
      ...Builder.of({ value: payload.name, fieldName: 'name' }).required().build(),
      ...Builder.of({ value: payload.email, fieldName: 'email' }).required().build(),
      ...Builder.of({ value: payload.password, fieldName: 'password' }).required().build(),
      ...Builder.of({ value: payload.confirmPassword, fieldName: 'confirmPassword' }).required().build()
    ]
  }
}
