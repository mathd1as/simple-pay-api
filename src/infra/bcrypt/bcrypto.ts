import { HashGenerator } from '@/data/contracts/crypto/password'
import bcrypt from 'bcrypt'

export class Bcrypto implements HashGenerator {
  async generatePasswordHash (password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12)
    return await bcrypt.hash(password, salt)
  }
}
