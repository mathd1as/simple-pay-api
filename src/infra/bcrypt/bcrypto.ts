import { HashComparator, HashGenerator } from '@/domain/contracts/crypto/password'
import bcrypt from 'bcrypt'

export class Bcrypto implements HashGenerator, HashComparator {
  async generatePasswordHash (password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12)
    return await bcrypt.hash(password, salt)
  }

  async compare (params: { passwordHash: string, password: string }): Promise<boolean> {
    return await bcrypt.compare(params.password, params.passwordHash)
  }
}
