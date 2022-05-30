export interface ProcessTransaction {
  exec: () => Promise<void>
}
