import { RouteRecord } from "@/router/type"

const errorRoutes: RouteRecord[] = [
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      title: 'Page Not Found',
      hidden: true
    },
    component: () => import('@/views/error/404.vue')
  },
  // 所有未定义路由，全部重定向到 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]

export default errorRoutes