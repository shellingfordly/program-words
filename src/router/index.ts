import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: import("@/views/Home.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/list",
    component: import("@/views/WordList.vue"),
    meta: {
      title: "单词列表",
    },
  },
  {
    path: "/about",
    component: import("@/views/About.vue"),
    meta: {
      title: "个人中心",
    },
  },
  {
    path: "/import",
    component: import("@/views/Import.vue"),
    meta: {
      title: "导入单词",
    },
  },
];

export const router = createRouter({ history: createWebHashHistory(), routes });
