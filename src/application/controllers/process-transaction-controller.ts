import { ProcessTransactionService } from '@/data/services'
import { HttpResponse } from '@/application/helpers/http'
import { serverError, ok } from '@/application/helpers'
import { ProcessTransactionDTO } from '@/application/dtos/process-transaction-dto'
import { ValidationBuilder as Builder } from '@/application/validators/validation-builder'
import { TransactionBaseData } from '@/domain/models'
import { Validator } from '../validators/validator'
import { Controller } from './controller'

type HttpRequest = {
  body: ProcessTransactionDTO
  locals: any
}

export class ProcessTransactionController extends Controller {
  constructor (private readonly ProcessTransactionService: ProcessTransactionService) {
    super()
  }

  override async perform (httpRequest: HttpRequest): Promise<HttpResponse> {
    const transactionBaseData = {
      value: httpRequest.body.value,
      description: httpRequest.body.description,
      paymentMethod: httpRequest.body.paymentMethod,
      cardNumber: httpRequest.body.cardNumber,
      cardHolderName: httpRequest.body.cardHolderName,
      cardExpiringDate: httpRequest.body.cardExpiringDate,
      securityCode: httpRequest.body.securityCode,
      userId: httpRequest.locals.user.id
    }

    try {
      const result = await this.ProcessTransactionService.exec(transactionBaseData)
      return ok(result)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }

  override buildValidators (payload: TransactionBaseData): Validator[] {
    return [
      ...Builder.of({ value: payload.value, fieldName: 'value' }).required().build(),
      ...Builder.of({ value: payload.value, fieldName: 'description' }).required().build(),
      ...Builder.of({ value: payload.value, fieldName: 'paymentMethod' }).required().build(),
      ...Builder.of({ value: payload.value, fieldName: 'cardNumber' }).required().build(),
      ...Builder.of({ value: payload.value, fieldName: 'cardHolderName' }).required().build(),
      ...Builder.of({ value: payload.value, fieldName: 'securityCode' }).required().build(),
      ...Builder.of({ value: payload.value, fieldName: 'cardExpiringDate' }).required().build()
    ]
  }
}
