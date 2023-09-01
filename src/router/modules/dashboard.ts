import { RouteRecord } from "@/router/type"
import BasicLayout from "@/layouts/BasicLayout.vue";

import { DashboardCustomizeRound } from '@vicons/material'

const dashboardRoutes: RouteRecord[] = [
  {
    path: "/dashboard",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          icon: DashboardCustomizeRound,
        }
      },
    ],
  },
];

export default dashboardRoutes;
