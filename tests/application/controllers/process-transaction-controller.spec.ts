import { ProcessTransactionController } from '@/application/controllers/process-transaction-controller'
import { serverError } from '@/application/helpers'
import { ProcessTransactionService } from '@/data/services'
import { PaymentMethod } from '@/domain/models'
import { mock } from 'jest-mock-extended'

describe('ProcessTransactionController', () => {
  // it('Should return unauthorized if token is string empty', async () => {
  //   const serviceMock = mock<ProcessTransactionService>()
  //   const processTransactionController = new ProcessTransactionController(serviceMock)

  //   const param = {
  //     body: {
  //       value: 10,
  //       description: 'test',
  //       paymentMethod: PaymentMethod.credit_card,
  //       cardNumber: 1032,
  //       cardHolderName: 'teste teste teste',
  //       cardExpiringDate: '09/90',
  //       securityCode: 234
  //     },
  //     locals: { userId: 1 }
  //   }

  //   const result = await processTransactionController.handle(param)

  //   expect(result).toEqual(unauthorized())
  // })

  // it('Should return ok after process transaction', async () => {
  //   const serviceMock = mock<ProcessTransactionService>()
  //   const processTransactionController = new ProcessTransactionController(serviceMock)

  //   const param = {
  //     body: {
  //       value: 10,
  //       description: 'test',
  //       paymentMethod: PaymentMethod.credit_card,
  //       cardNumber: 1032,
  //       cardHolderName: 'teste teste teste',
  //       cardExpiringDate: '09/90',
  //       securityCode: 234
  //     },
  //     locals: { userId: 1 }
  //   }

  //   const result = await processTransactionController.handle(param)

  //   expect(result).toEqual({ data: undefined, statusCode: 200 })
  // })

  it('Should return serverError when throw process transaction', async () => {
    const serviceMock = mock<ProcessTransactionService>()
    serviceMock.exec.mockRejectedValue(new Error())
    const processTransactionController = new ProcessTransactionController(serviceMock)

    const param = {
      body: {
        value: 10,
        description: 'test',
        paymentMethod: PaymentMethod.credit_card,
        cardNumber: 1032,
        cardHolderName: 'teste teste teste',
        cardExpiringDate: '09/90',
        securityCode: 234
      },
      locals: { user: { id: 1 } }
    }

    const result = await processTransactionController.handle(param)

    expect(result).toEqual(serverError(new Error()))
  })
})
