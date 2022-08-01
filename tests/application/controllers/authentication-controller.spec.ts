import { AuthenticationController } from '@/application/controllers/authentication-controller'
import { Controller } from '@/application/controllers/controller'
import { ok } from '@/application/helpers'
import { AuthenticationService } from '@/domain/services'
import { InvalidPasswordError, UserNotFoundError } from '@/domain/entities/errors'
import { mock, MockProxy } from 'jest-mock-extended'
import { ServerError } from '@/application/errors'

describe('AuthenticationController', () => {
  let sut: AuthenticationController
  let authenticationService: MockProxy<AuthenticationService>

  beforeEach(() => {
    authenticationService = mock()
    authenticationService.exec.mockResolvedValue({ accessToken: 'accessToken' })
    sut = new AuthenticationController(authenticationService)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  it('should returns ok when exec returns an accessToken', async () => {
    const param = {
      body: {
        email: 'email',
        password: 'password'
      },
      locals: { user: { id: 1 } }
    }
    const result = await sut.handle(param)
    expect(result).toEqual(ok({ accessToken: 'accessToken' }))
  })

  it('should returns userNotFoundError when exec returns throws', async () => {
    const param = {
      body: {
        email: 'not_registred_email',
        password: 'password'
      },
      locals: { user: { id: 1 } }
    }
    authenticationService.exec.mockRejectedValue(new UserNotFoundError())
    const result = await sut.handle(param)
    expect(result).toEqual({
      data: new UserNotFoundError(),
      statusCode: 400
    })
  })

  it('should returns InvalidPasswordError when exec returns throws', async () => {
    const param = {
      body: {
        email: 'not_registred_email',
        password: 'password'
      },
      locals: { user: { id: 1 } }
    }
    authenticationService.exec.mockRejectedValue(new InvalidPasswordError())
    const result = await sut.handle(param)
    expect(result).toEqual({
      data: new InvalidPasswordError(),
      statusCode: 400
    })
  })

  it('should returns serverError when exec returns throws generic error', async () => {
    const param = {
      body: {
        email: 'not_registred_email',
        password: 'password'
      },
      locals: { user: { id: 1 } }
    }
    authenticationService.exec.mockRejectedValue(new Error())
    const result = await sut.handle(param)
    expect(result).toEqual({
      data: new ServerError(),
      statusCode: 500
    })
  })
})
