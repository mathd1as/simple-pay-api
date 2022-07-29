import { Controller } from '@/application/controllers/controller'
import { CreateUserController } from '@/application/controllers/create-user-controller'
import { badRequest, ok, serverError } from '@/application/helpers'
import { CreateUserService } from '@/domain/services/create-user-service'
import { CreateUserError } from '@/domain/entities/errors'
import { mock, MockProxy } from 'jest-mock-extended'

describe('CreateUserController', () => {
  let sut: CreateUserController
  let createUserService: MockProxy<CreateUserService>

  beforeEach(() => {
    createUserService = mock()
    createUserService.exec.mockResolvedValue({
      id: 1
    })
    sut = new CreateUserController(createUserService)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  it('should returns ok when exec returns an accessToken', async () => {
    const param = {
      body: {
        email: 'email',
        password: 'password',
        name: 'user_name',
        confirmPassword: 'password'
      },
      locals: { user: { id: 1 } }
    }
    const result = await sut.handle(param)
    expect(result).toEqual(ok({ id: 1 }))
  })

  it('should returns serverError when exec returns throws', async () => {
    const param = {
      body: {
        email: 'email',
        password: 'password',
        name: 'user_name',
        confirmPassword: 'password'
      },
      locals: { user: { id: 1 } }
    }
    createUserService.exec.mockRejectedValue(new Error())
    const result = await sut.handle(param)
    expect(result).toEqual(serverError(new Error()))
  })

  it('should returns badRequest when exec returns throws a CreateUserError', async () => {
    const param = {
      body: {
        email: 'email',
        password: 'password',
        name: 'user_name',
        confirmPassword: 'password'
      },
      locals: { user: { id: 1 } }
    }
    createUserService.exec.mockRejectedValue(new CreateUserError())
    const result = await sut.handle(param)
    expect(result).toEqual(badRequest(new CreateUserError()))
  })
})
