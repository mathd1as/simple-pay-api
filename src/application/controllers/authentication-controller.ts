import { AuthenticationService } from '@/data/services/authentication-service'

import { badRequest, ok, HttpResponse, serverError } from '../helpers'

type Params = { username: String}

export class AuthenticationController {
  constructor (private readonly authenticationService: AuthenticationService) {}

  async handle (params: Params): Promise<HttpResponse> {
    const { username } = params
    if (username === '') return badRequest(new Error('Username not found'))
    try {
      const result = this.authenticationService.exec({ username })
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
