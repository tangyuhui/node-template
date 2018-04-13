import router from './app/server/routes'
import Koa from 'koa'

// 创建一个Koa对象表示web app本身:
const app = new Koa();
  
// 在端口3000监听:
app.listen(3000);
 
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

