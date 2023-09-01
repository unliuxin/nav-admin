import {createWebHistory, createRouter} from "vue-router";
import type {App} from 'vue'
// 获取所有路由
import routes from './routes'

const router = createRouter({
  routes,
  // 这里使用历史记录模式
  history: createWebHistory()
})

export const useRouter = (app: App<Element>): void => {
    app.use(router)
}