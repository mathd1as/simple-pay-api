import { Router } from 'express'

export default (router: Router): void => {
  router.get('/transactions', (req, res) => {
    console.log('hello world')
  })
}
