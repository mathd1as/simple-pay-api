import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { PgTransaction, PgPayable } from '@/infra/typeorm/entities'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'teste',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [PgTransaction, PgPayable],
  migrations: [],
  subscribers: []
})

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))
