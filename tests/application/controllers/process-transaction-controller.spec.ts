import { Controller } from '@/application/controllers/controller'
import { ProcessTransactionController } from '@/application/controllers/process-transaction-controller'
import { serverError, ok } from '@/application/helpers'

import { ProcessTransactionService } from '@/data/services'
import { ProcessTransactionError } from '@/domain/errors'
import { mock, MockProxy } from 'jest-mock-extended'

describe('ProcessTransactionController', () => {
  let sut: ProcessTransactionController
  let processTransactionService: MockProxy<ProcessTransactionService>

  beforeEach(() => {
    processTransactionService = mock()
    processTransactionService.exec.mockResolvedValue({ id: 1 })
    sut = new ProcessTransactionController(processTransactionService)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  it('Should return ok if processTransactionService returns an object', async () => {
    const param = {
      body: {
        value: 10,
        description: 'test',
        paymentMethod: 'credit_card',
        cardNumber: 1032,
        cardHolderName: 'teste teste teste',
        cardExpiringDate: '09/90',
        securityCode: 234
      },
      locals: { user: { id: 1 } }
    }

    const result = await sut.handle(param)
    console.log(result)
    expect(ok({ id: 1 })).toEqual(result)
  })

  it('Should return serverError when exec throws', async () => {
    processTransactionService.exec.mockRejectedValue(new ProcessTransactionError())
    const param = {
      body: {
        value: 10,
        description: 'test',
        paymentMethod: 'credit_card',
        cardNumber: 1032,
        cardHolderName: 'teste teste teste',
        cardExpiringDate: '09/90',
        securityCode: 234
      },
      locals: { userId: 1 }
    }

    const result = await sut.handle(param)

    expect(result).toEqual(serverError(new ProcessTransactionError()))
  })
})
