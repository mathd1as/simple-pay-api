export interface ProcessTransaction {
  exec: () => Promise<{}>
}
