import { Controller } from '@/application/controllers/controller'
import { FetchTransactionsController } from '@/application/controllers/fetch-transactions-controller'
import { FetchTransactionsService } from '@/domain/services/fetch-transactions-service'
import { mock, MockProxy } from 'jest-mock-extended'

describe('FethUserTransactionsController', () => {
  let sut: FetchTransactionsController
  let fetchTransactionsService: MockProxy<FetchTransactionsService>
  const paramsMock = [
    {
      id: 5,
      value: 50,
      paymentMethod: 'debit_card',
      cardNumber: 1044,
      cardHolderName: 'Milton Mauro Card',
      securityCode: '1234',
      validity: new Date('2022-07-27T16:59:35.342Z'),
      payableId: 5,
      userId: 2
    },
    {
      id: 6,
      value: 100,
      paymentMethod: 'debit_card',
      cardNumber: 1044,
      cardHolderName: 'Milton Mauro Card',
      securityCode: '1234',
      validity: new Date('2022-07-27T18:03:37.255Z'),
      payableId: 6,
      userId: 2
    }
  ]

  beforeEach(() => {
    fetchTransactionsService = mock()
    fetchTransactionsService.exec.mockResolvedValue(paramsMock)
    sut = new FetchTransactionsController(fetchTransactionsService)
  })
  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })
})
