import { CreateUserRepo } from '@/data/contracts/repos/create-user-repo'
import { CreateUserService } from '@/data/services/create-user-service'
import { HashGenerator } from '@/data/contracts/crypto/password'
import { mock, MockProxy } from 'jest-mock-extended'
import { CreateUserError } from '@/domain/errors'

describe('CreateUserService', () => {
  let createUserRepoMock: MockProxy<CreateUserRepo>
  let hashGeneratorRepoMock: MockProxy<HashGenerator>

  beforeEach(() => {
    createUserRepoMock = mock()
    createUserRepoMock.validateEmail.mockResolvedValue(true)
    // createUserRepoMock.perform.mockResolvedValue({})
    // hashGeneratorRepoMock.generatePasswordHash.mockResolvedValue({})
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
})
