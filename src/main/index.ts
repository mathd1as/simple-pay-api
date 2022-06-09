import 'reflect-metadata'
import './config/module-alias'
import { createConnection } from 'typeorm'

import { app } from '@/main/config/app'
import { env } from '@/main/config/env'

const concecction = createConnection()
console.log(concecction)

app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
