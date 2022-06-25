import { TokenValidator } from '@/data/contracts/crypto/token'
import { HttpResponse, ok, forbidden } from '@/application/helpers'

type HttpRequest = { authorization: string }

export class AuthenticationMiddleware {
  constructor (private readonly auth: TokenValidator) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    try {
      const userId = await this.auth.validate({ token: params.authorization })
      return ok({ userId })
    } catch (error) {
      return forbidden()
    }
  }
}
