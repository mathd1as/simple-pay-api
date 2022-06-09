import 'reflect-metadata'
import './config/module-alias'
import '@/infra/database/data-source'

import { app } from '@/main/config/app'
import { env } from '@/main/config/env'

app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
