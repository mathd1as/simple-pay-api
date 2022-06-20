import { ProcessTransactionController } from '@/application/controllers/process-transaction-controller'
import { unauthorized } from '@/application/helpers'
import { ProcessTransactionService } from '@/data/services'
import { PaymentMethod } from '@/domain/models'
import { mock } from 'jest-mock-extended'

describe('ProcessTransactionController', () => {
  it('', async () => {
    const serviceMock = mock<ProcessTransactionService>()
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
      token: ''
    }

    const result = await processTransactionController.handle(param)

    expect(result).toEqual(unauthorized())
  })
})
