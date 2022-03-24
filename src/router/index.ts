import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homepage',
  },
  {
    name: 'homepageRoute',
    path: '/homepage',
    meta: {
      title: 'Homepage 主页 | Carpediem'
    },
    component: () => import("@/views/homepage/index.vue"),
  },
  {
    name: 'buttonRoute',
    path: '/button',
    meta: {
      title: 'Button 按钮 | Carpediem'
    },
    component: () => import("@/views/button/index.vue")
  },
  {
    name: 'borderRoute',
    path: '/border',
    meta: {
      title: 'Border 边框 | Carpediem'
    },
    component: () => import("@/views/border/index.vue")
  },
  {
    name: 'iconRoute',
    path: '/icon',
    meta: {
      title: 'Icon 图标 | Carpediem'
    },
    component: () => import("@/views/icon/index.vue")
  },
  {
    name: 'layoutRoute',
    path: '/layout',
    meta: {
      title: 'Layout 布局 | Carpediem'
    },
    component: () => import("@/views/layout/index.vue")
  },
  {
    name: 'linkRoute',
    path: '/link',
    meta: {
      title: 'Link 链接 | Carpediem'
    },
    component: () => import("@/views/link/index.vue")
  },
  {
    name: 'scrollbarRoute',
    path: '/scrollbar',
    meta: {
      title: 'Scrollbar 滚动条 | Carpediem'
    },
    component: () => import("@/views/scrollbar/index.vue")
  },
  {
    name: 'cascaderRoute',
    path: '/cascader',
    meta: {
      title: 'Cascader 级联选择器 | Carpediem'
    },
    component: () => import("@/views/cascader/index.vue")
  },
  {
    name: 'checkboxRoute',
    path: '/checkbox',
    meta: {
      title: 'Checkbox 多选框 | Carpediem'
    },
    component: () => import("@/views/checkbox/index.vue")
  },
  {
    name: 'datepickerRoute',
    path: '/datepicker',
    meta: {
      title: 'Datepicker 日期选择器 | Carpediem'
    },
    component: () => import("@/views/datepicker/index.vue")
  },
  {
    name: 'inputRoute',
    path: '/input',
    meta: {
      title: 'Input 输入框 | Carpediem'
    },
    component: () => import("@/views/input/index.vue")
  },
  {
    name: 'inputNumberRoute',
    path: '/inputNumber',
    meta: {
      title: 'Input Number 数字输入框 | Carpediem'
    },
    component: () => import("@/views/inputnumber/index.vue")
  },
  {
    name: 'radioRoute',
    path: '/radio',
    meta: {
      title: 'Radio 单选框 | Carpediem'
    },
    component: () => import("@/views/radio/index.vue")
  },
  {
    name: 'rateRoute',
    path: '/rate',
    meta: {
      title: 'Rate 评分 | Carpediem'
    },
    component: () => import("@/views/rate/index.vue")
  },
  {
    name: 'selectRoute',
    path: '/select',
    meta: {
      title: 'Select 选择器 | Carpediem'
    },
    component: () => import("@/views/select/index.vue")
  },
  {
    name: 'sliderRoute',
    path: '/slider',
    meta: {
      title: 'Slider 滑块 | Carpediem'
    },
    component: () => import("@/views/slider/index.vue")
  },
  {
    name: 'switchRoute',
    path: '/switch',
    meta: {
      title: 'Switch 滑块 | Carpediem'
    },
    component: () => import("@/views/switch/index.vue")
  },
  {
    name: 'uploadRoute',
    path: '/upload',
    meta: {
      title: 'Upload 上传 | Carpediem'
    },
    component: () => import("@/views/upload/index.vue")
  },
  {
    name: 'AvatarRoute',
    path: '/avatar',
    meta: {
      title: 'Avatar 头像 | Carpediem'
    },
    component: () => import("@/views/avatar/index.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
})


export default router
