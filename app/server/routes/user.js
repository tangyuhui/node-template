import Router from 'koa-router'
import { User } from '../controllers'
const router = new Router({ prefix:'/users'})
router.get('/', User.getAllUser)
export default router;