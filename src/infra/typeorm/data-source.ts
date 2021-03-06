import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { PgTransaction, PgPayable, pgUser } from '@/infra/typeorm/entities'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'teste',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [pgUser, PgTransaction, PgPayable],
  migrations: [],
  subscribers: []
})
