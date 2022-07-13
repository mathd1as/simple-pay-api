import { Validator } from '@/application/validators/validator'
import { IsStringError } from '@/application/errors/validator'

export class IsString implements Validator {
  constructor (
    readonly value: any,
    readonly fieldName?: string
  ) {}

  validate (): Error | undefined {
    if (typeof this.value !== 'string') {
      return new IsStringError(this.fieldName)
    }
  }
}
