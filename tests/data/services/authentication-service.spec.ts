import { HashComparator } from '@/data/contracts/crypto/password'
import { TokenGenerator } from '@/data/contracts/crypto/token'
import { AuthenticationRepo } from '@/data/contracts/repos/authentication-repo'
import { AuthenticationService } from '@/data/services'
import { InvalidPasswordError, UserNotFoundError } from '@/domain/errors'
import { mock, MockProxy } from 'jest-mock-extended'

describe('AuthenticationService', () => {
  let cryptoMock: MockProxy<TokenGenerator>
  let authenticationRepoMock: MockProxy<AuthenticationRepo>
  let hashComparator: MockProxy<HashComparator>
  const accessToken = 'accessToken'

  beforeEach(() => {
    cryptoMock = mock()
    authenticationRepoMock = mock()
    hashComparator = mock()

    cryptoMock.generate.mockResolvedValue(accessToken)
    authenticationRepoMock.verifyUser.mockResolvedValue(undefined)
    hashComparator.compare.mockResolvedValue(false)
  })
  it('should throw when verifyUser returns undefined', async () => {
    const params = {
      email: 'not_registred_user_email',
      password: 'any_password'
    }
    const authenticationService = new AuthenticationService(cryptoMock, authenticationRepoMock, hashComparator)
    const result = authenticationService.exec(params)
    await expect(result).rejects.toThrow(new UserNotFoundError())
    expect(authenticationRepoMock.verifyUser).toHaveBeenCalledTimes(1)
  })

  it('should throw when compare returns false', async () => {
    const params = {
      email: 'registred_user_email',
      password: 'incorrect_password'
    }
    authenticationRepoMock.verifyUser.mockResolvedValue({
      password: 'hashPassword',
      id: 1
    })
    const authenticationService = new AuthenticationService(cryptoMock, authenticationRepoMock, hashComparator)
    const result = authenticationService.exec(params)
    await expect(result).rejects.toThrow(new InvalidPasswordError())
    expect(hashComparator.compare).toHaveBeenCalledTimes(1)
  })

  it('should ', async () => {
    const params = {
      email: 'registred_user_email',
      password: 'correct_password'
    }
    authenticationRepoMock.verifyUser.mockResolvedValue({
      password: 'hashPassword',
      id: 1
    })
    hashComparator.compare.mockResolvedValue(true)
    const authenticationService = new AuthenticationService(cryptoMock, authenticationRepoMock, hashComparator)
    const result = await authenticationService.exec(params)
    expect(result).toEqual({ accessToken })
    expect(cryptoMock.generate).toHaveBeenCalledTimes(1)
  })
})
