import { RouteRecord } from "@/router/type"
import BasicLayout from "@/layouts/BasicLayout.vue";

const tableRoutes: RouteRecord[] = [
  {
    path: "/table",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "Table",
        component: () => import("@/views/table/index.vue"),
      },
    ],
  },
];

export default tableRoutes;
