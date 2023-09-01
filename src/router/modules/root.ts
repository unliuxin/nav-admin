import { RouteRecord } from "@/router/type"

const rootRoutes: RouteRecord[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    meta: {
      hidden: true
    }
  }
]

export default rootRoutes