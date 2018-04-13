import Router from 'koa-router'
import { User } from '../controllers'
const router = new Router()
router.get('/', User.getUser)
export default router;