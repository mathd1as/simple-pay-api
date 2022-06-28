export interface HashGenerator {
  generatePasswordHash: (params: string) => Promise<string>
}
