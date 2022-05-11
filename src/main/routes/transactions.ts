import { Router } from 'express'

export default (router: Router): void => {
  router.get('/transactions', async (req, res) => {
    console.log('hello world')
  })
}
