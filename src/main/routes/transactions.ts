import { Router } from 'express'

export default (router: Router): void => {
  router.post('/transaction', (req, res) => {
    res.send({ data: 'any_data' })
  })
}
