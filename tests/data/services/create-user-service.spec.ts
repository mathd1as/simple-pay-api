import { CreateUserRepo } from '@/data/contracts/repos/create-user-repo'
import { CreateUserService } from '@/data/services/create-user-service'
import { HashGenerator } from '@/data/contracts/crypto/password'
import { mock, MockProxy } from 'jest-mock-extended'
import { CreateUserError } from '@/domain/errors'

describe('CreateUserService', () => {
  const newUser = { id: 1 }
  let createUserRepoMock: MockProxy<CreateUserRepo>
  let hashGeneratorRepoMock: MockProxy<HashGenerator>

  beforeEach(() => {
    createUserRepoMock = mock()
    hashGeneratorRepoMock = mock()

    createUserRepoMock.validateEmail.mockResolvedValue(true)
    createUserRepoMock.perform.mockResolvedValue(newUser)
    hashGeneratorRepoMock.generatePasswordHash.mockResolvedValue('password_hash')
  })
  it('should throw if email already exists', async () => {
    const user = {
      name: 'test_user',
      email: 'test_existing_email',
      password: 'password',
      confirmPassword: 'password'
    }
    const createUserService = new CreateUserService(createUserRepoMock, hashGeneratorRepoMock)
    const result = createUserService.exec(user)
    await expect(result).rejects.toThrow(CreateUserError)
  })

  it('should create an user and return the id created', async () => {
    const user = {
      name: 'test_user',
      email: 'test_existing_email',
      password: 'password',
      confirmPassword: 'password'
    }
    createUserRepoMock.validateEmail.mockResolvedValue(false)
    const createUserService = new CreateUserService(createUserRepoMock, hashGeneratorRepoMock)
    const result = await createUserService.exec(user)
    expect(result).toEqual(newUser)
  })

  it('should call perform method 1 time', async () => {
    const user = {
      name: 'test_user',
      email: 'test_existing_email',
      password: 'password',
      confirmPassword: 'password'
    }
    createUserRepoMock.validateEmail.mockResolvedValue(false)
    const createUserService = new CreateUserService(createUserRepoMock, hashGeneratorRepoMock)
    await createUserService.exec(user)
    expect(createUserRepoMock.perform).toHaveBeenCalledTimes(1)
  })

  it('should call generatePasswordHash method 1 time', async () => {
    const user = {
      name: 'test_user',
      email: 'test_existing_email',
      password: 'password',
      confirmPassword: 'password'
    }
    createUserRepoMock.validateEmail.mockResolvedValue(false)
    const createUserService = new CreateUserService(createUserRepoMock, hashGeneratorRepoMock)
    await createUserService.exec(user)
    expect(hashGeneratorRepoMock.generatePasswordHash).toHaveBeenCalledTimes(1)
  })
})
