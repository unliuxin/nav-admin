/**
 * 动态加载路由配置
 */
import type { RouteRecordRaw } from "vue-router";

const modules = import.meta.glob("./modules/**/*.ts", { eager: true });

const routes = Object.keys(modules).reduce(
  (routes: RouteRecordRaw[], key: string) => {
    // @ts-ignore
    const module = modules[key].default
    if (Array.isArray(module)) {
      return [...routes, ...module]
    } else {
      return [...routes, ...module.routes]
    }
  }, [] as RouteRecordRaw[]
);

export default routes
