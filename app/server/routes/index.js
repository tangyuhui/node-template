import Router from 'koa-router'
import userRouter from './user'
import wechatRouter from './wechat'
const router = new Router()
router.use(userRouter.routes())
router.use(wechatRouter.routes())     
export default router   