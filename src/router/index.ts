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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
