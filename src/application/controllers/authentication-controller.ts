import { AuthenticationService } from '@/data/services/authentication-service'

import { badRequest, ok, HttpResponse, serverError } from '../helpers'

type HttpRequest = {
  body: { username: String }
}
export class AuthenticationController {
  constructor (private readonly authenticationService: AuthenticationService) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    const { username } = params.body
    if (username === '' || username === undefined) return badRequest(new Error('Username not found'))
    try {
      const result = await this.authenticationService.exec({ username })
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
