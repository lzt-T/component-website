import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'
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
  {
    name: 'BadgeRoute',
    path: '/badge',
    meta: {
      title: 'Badge 徽章 | Carpediem'
    },
    component: () => import("@/views/badge/index.vue")
  },
  {
    name: 'CarouselRoute',
    path: '/carousel',
    meta: {
      title: 'Carousel 走马灯 | Carpediem'
    },
    component: () => import("@/views/carousel/index.vue")
  },
  {
    name: 'CollapseRoute',
    path: '/collapse',
    meta: {
      title: 'Collapse 折叠面板 | Carpediem'
    },
    component: () => import("@/views/collapse/index.vue")
  },
  {
    name: 'EmptyRoute',
    path: '/empty',
    meta: {
      title: 'Empty 空状态 | Carpediem'
    },
    component: () => import("@/views/empty/index.vue")
  },
  {
    name: 'imageRoute',
    path: '/image',
    meta: {
      title: 'Image 图片 | Carpediem'
    },
    component: () => import("@/views/image/index.vue")
  },
  {
    name: 'paginationRoute',
    path: '/pagination',
    meta: {
      title: 'Pagination 分页 | Carpediem'
    },
    component: () => import("@/views/pagination/index.vue")
  },
  {
    name: 'progressRoute',
    path: '/progress',
    meta: {
      title: 'Progress 进度条 | Carpediem'
    },
    component: () => import("@/views/progress/index.vue")
  },
  {
    name: 'tableRoute',
    path: '/table',
    meta: {
      title: 'Table 表格 | Carpediem'
    },
    component: () => import("@/views/table/index.vue")
  },
  {
    name: 'tagRoute',
    path: '/tag',
    meta: {
      title: 'Tag 标签 | Carpediem'
    },
    component: () => import("@/views/tag/index.vue")
  },
  {
    name: 'backtopRoute',
    path: '/backtop',
    meta: {
      title: 'BackTop 回到顶部 | Carpediem'
    },
    component: () => import("@/views/backtop/index.vue")
  },
  {
    name: 'breadcrumbRoute',
    path: '/breadcrumb',
    meta: {
      title: 'Breadcrumb 面包屑 | Carpediem'
    },
    component: () => import("@/views/breadcrumb/index.vue")
  },
  {
    name: 'pageheaderRoute',
    path: '/pageheader',
    meta: {
      title: 'Page Header 面包屑 | Carpediem'
    },
    component: () => import("@/views/pageheader/index.vue")
  },
  {
    name: 'tabsRoute',
    path: '/tabs',
    meta: {
      title: 'Tabs 标签页 | Carpediem'
    },
    component: () => import("@/views/tabs/index.vue")
  },
  {
    name: 'alertRoute',
    path: '/alert',
    meta: {
      title: 'Alert 提示 | Carpediem'
    },
    component: () => import("@/views/alert/index.vue")
  },
  {
    name: 'dialogRoute',
    path: '/dialog',
    meta: {
      title: 'Dialog 对话框 | Carpediem'
    },
    component: () => import("@/views/dialog/index.vue")
  },
  {
    name: 'drawerRoute',
    path: '/drawer',
    meta: {
      title: 'Drawer 抽屉 | Carpediem'
    },
    component: () => import("@/views/drawer/index.vue")
  },
  {
    name: 'messageRoute',
    path: '/message',
    meta: {
      title: 'Message 消息提示 | Carpediem'
    },
    component: () => import("@/views/message/index.vue")
  },
  {
    name: 'tooltipRoute',
    path: '/tooltip',
    meta: {
      title: 'Tooltip 文字提示 | Carpediem'
    },
    component: () => import("@/views/tooltip/index.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
})


export default router
