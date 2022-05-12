export interface ProcessTransaction {
  exec: () => Promise<boolean>
}
