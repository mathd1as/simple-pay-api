export class InvalidPasswordError extends Error {
  constructor () {
    super('Authentication failed, check your password')
    this.name = 'PasswordError'
  }
}

export class UserNotFoundError extends Error {
  constructor () {
    super('Authentication failed, user not found')
    this.name = 'UserNotFound'
  }
}
