import { GetBalanceRepo } from '@/data/contracts/repos/get-balance-repo'
import { GetBalanceService } from '@/data/services/get-balance-service'
import { mock, MockProxy } from 'jest-mock-extended'

describe('GetBalanceService', () => {
  let getBalanceRepoMock: MockProxy<GetBalanceRepo>

  beforeEach(() => {
    getBalanceRepoMock = mock()
    getBalanceRepoMock.getUserTransactions.mockResolvedValue(
      [
        {
          id: 1,
          value: 1,
          paymentMethod: 'debit_card',
          cardNumber: 1044,
          cardHolderName: 'Fulano de Tal',
          securityCode: '1234',
          validity: new Date('2022-07-15T13:10:04.860Z'),
          payableId: 1,
          userId: 1
        },
        {
          id: 2,
          value: 100,
          paymentMethod: 'credit_card',
          cardNumber: 1044,
          cardHolderName: 'Fulano de Tal',
          securityCode: '1234',
          validity: new Date('2022-07-15T14:29:32.633Z'),
          payableId: 2,
          userId: 1
        },
        {
          id: 3,
          value: 100,
          paymentMethod: 'credit_card',
          cardNumber: 1044,
          cardHolderName: 'Fulano de Tal',
          securityCode: '1234',
          validity: new Date('2022-07-15T14:30:33.984Z'),
          payableId: 3,
          userId: 1
        },
        {
          id: 4,
          value: 50,
          paymentMethod: 'debit_card',
          cardNumber: 1044,
          cardHolderName: 'Fulano de Tal',
          securityCode: '1234',
          validity: new Date('2022-07-15T14:30:49.838Z'),
          payableId: 4,
          userId: 1
        }
      ]
    )
  })
  it('should return available 51 and waitingFund 200', async () => {
    const expectedResult = {
      available: 51, waitingFunds: 200
    }
    const param = {
      id: 10
    }
    const getBalanceService = new GetBalanceService(getBalanceRepoMock)
    const result = await getBalanceService.exec(param)
    expect(expectedResult).toEqual(result)
    expect(getBalanceRepoMock.getUserTransactions).toHaveBeenCalledTimes(1)
  })

  it('should return available 0 and waitingFund 0', async () => {
    const expectedResult = {
      available: 0, waitingFunds: 0
    }
    const param = {
      id: 10
    }
    getBalanceRepoMock.getUserTransactions.mockResolvedValue([])
    const getBalanceService = new GetBalanceService(getBalanceRepoMock)
    const result = await getBalanceService.exec(param)
    expect(expectedResult).toEqual(result)
    expect(getBalanceRepoMock.getUserTransactions).toHaveBeenCalledTimes(1)
  })
})
