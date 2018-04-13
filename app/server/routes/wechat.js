import Router from 'koa-router'
import { Wechat } from '../controllers'
const router = new Router({ prefix: '/wechat' })
router.get('/onLogin', Wechat.login)
export default router;