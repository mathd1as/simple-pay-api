export class ProcessTransactionError extends Error {
  constructor () {
    super('ProcessTransaction failed')
    this.name = 'ProcessTransactionError'
  }
}
