import { ConsultBalanceController } from '@/application/controllers/consult-balance-controller'
import { Controller } from '@/application/controllers/controller'
import { ok, serverError } from '@/application/helpers'
import { ConsultBalanceService } from '@/data/services/consult-balance-service'
// import { InvalidPasswordError, UserNotFoundError } from '@/domain/errors'
import { mock, MockProxy } from 'jest-mock-extended'

describe('ConsultoBalanceController', () => {
  let sut: ConsultBalanceController
  let consultBalanceService: MockProxy<ConsultBalanceService>
  const balanceMock = {
    waitingFunds: 21,
    available: 10
  }

  beforeEach(() => {
    consultBalanceService = mock()
    consultBalanceService.exec.mockResolvedValue(balanceMock)
    sut = new ConsultBalanceController(consultBalanceService)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  it('should returns ok when exec returns an accessToken', async () => {
    const param = {
      body: {
        id: 1
      },
      locals: { user: { id: 1 } }
    }
    const result = await sut.handle(param)
    expect(result).toEqual(ok(balanceMock))
  })

  it('should returns serverError when exec throws', async () => {
    const param = {
      body: {
        id: 1
      },
      locals: { user: { id: 1 } }
    }
    consultBalanceService.exec.mockRejectedValue(new Error())
    const result = await sut.handle(param)
    expect(result).toEqual(serverError(new Error()))
  })
})
