import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homepage',
  },
  {
    name: 'homepageRoute',
    path: '/homepage',
    component: () => import("@/views/homepage/index.vue"),
  },
  {
    name: 'buttonRoute',
    path: '/button',
    component: () => import("@/views/button/index.vue")
  },
  {
    name: 'borderRoute',
    path: '/border',
    component: () => import("@/views/border/index.vue")
  },
  {
    name: 'iconRoute',
    path: '/icon',
    component: () => import("@/views/icon/index.vue")
  },
  {
    name: 'layoutRoute',
    path: '/layout',
    component: () => import("@/views/layout/index.vue")
  },
  {
    name: 'linkRoute',
    path: '/link',
    component: () => import("@/views/link/index.vue")
  },
  {
    name: 'scrollbarRoute',
    path: '/scrollbar',
    component: () => import("@/views/scrollbar/index.vue")
  },
  {
    name: 'cascaderRoute',
    path: '/cascader',
    component: () => import("@/views/cascader/index.vue")
  },
  {
    name: 'checkboxRoute',
    path: '/checkbox',
    component: () => import("@/views/checkbox/index.vue")
  },
  {
    name: 'datepickerRoute',
    path: '/datepicker',
    component: () => import("@/views/datepicker/index.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
