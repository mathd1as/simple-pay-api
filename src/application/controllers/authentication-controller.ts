import { AuthenticationService } from '@/data/services/authentication-service'
import { AuthenticationError } from '@/domain/errors/authentication-error'
import { AuthenticationDTO } from '@/application/dtos/authentication-dto'
import { ValidationBuilder as Builder } from '@/application/validators/validation-builder'

import { badRequest, ok, HttpResponse, serverError } from '../helpers'
import { Controller } from './controller'
import { Validator } from '../validators/validator'

type HttpRequest = {
  body: AuthenticationDTO
}
export class AuthenticationController extends Controller {
  constructor (private readonly authenticationService: AuthenticationService) {
    super()
  }

  async perform (params: HttpRequest): Promise<HttpResponse> {
    const { email, password } = params.body
    try {
      const result = await this.authenticationService.exec({ email, password })
      return ok(result)
    } catch (error) {
      console.log(error)
      if (error instanceof AuthenticationError) {
        return badRequest(error)
      }
      return serverError(error)
    }
  }

  override buildValidators (payload: any): Validator[] {
    return [
      ...Builder.of({ value: payload.email, fieldName: 'email' }).required().build(),
      ...Builder.of({ value: payload.password, fieldName: 'password' }).required().build()
    ]
  }
}
