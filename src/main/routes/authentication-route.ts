import { Router } from 'express'

export default (router: Router): void => {
  router.get('/authentication', () => console.log('works'))
}
