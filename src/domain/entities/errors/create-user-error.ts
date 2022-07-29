export class CreateUserError extends Error {
  constructor () {
    super('Email already registered')
    this.name = 'CreateUserError'
  }
}
