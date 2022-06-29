export class AuthenticationError extends Error {
  constructor () {
    super('Authentication failed, check your password')
    this.name = 'AuthenticationError'
  }
}
