import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { PgTransaction } from '@/infra/database/entities/transaction'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'simple-pay-api-dev',
  password: 'developer',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [PgTransaction],
  migrations: [],
  subscribers: []
})
