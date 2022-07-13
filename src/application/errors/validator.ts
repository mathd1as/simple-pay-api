export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'Field required'
      : `The field ${fieldName} is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}

export class IsStringError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'String required'
      : `The field ${fieldName} must be string`
    super(message)
    this.name = 'IsStringError'
  }
}
