import { readdirSync } from 'fs'
import { Express, Router } from 'express'
import path from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  readdirSync(`${path.join(__dirname)}/../routes`).map(async fileName => {
    await import(`../routes/${fileName}`)
  })
}
