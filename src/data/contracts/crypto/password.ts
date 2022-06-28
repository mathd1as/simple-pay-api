export interface HashGenerator {
  generatePasswordHash: (params: string) => Promise<string>
}

export interface HashComparator {
  compare: (params: {passwordHash: string, password: string}) => Promise<boolean>
}
