<template>
  <!-- 头部 -->
  <header class="cd-website-app-header">
    <div
      class="cd-website-app-header-carpediemImg"
      @click="selectRouter('/', 0)"
    >
      <img :src="carpediemImg" alt="" class="cd-website-app-header-cdImg" />
    </div>
    <div class="cd-website-app-header-content" @click="selectRouter('/', 0)">
      Carpediem
    </div>
    <a
      class="cd-website-app-header-githubImg"
      href="https://github.com/lzt-T/cd-ui"
    >
      <img :src="githubImg" />
    </a>
  </header>
  <!-- 大体框架 -->
  <div class="cd-website-app-frame" ref="app">
    <!-- 左侧导航栏 -->
    <nav
      :class="{
        'cd-website-app-nav': true && isConceal == false,
        'cd-website-app-nav-vanishanimation': isConceal && isAnimation,
        'cd-website-app-nav-showanimation': isConceal == false && isAnimation,
      }"
      ref="leftNav"
      @wheel.stop
    >
      <div class="cd-website-app-nav-list">
        <div
          :class="{
            'cd-website-app-nav-list-every': true,
            'cd-website-app-nav-list-every-select': selectInd == 0,
          }"
          @click="selectRouter('/homepage', 0)"
        >
          Homepage 主页
        </div>
        <div class="cd-website-app-nav-list-title">Basic 基础组件</div>
        <div v-for="(data, ind) in basedComponent" :key="ind">
          <div
            :class="{
              'cd-website-app-nav-list-every': true,
              'cd-website-app-nav-list-every-select': selectInd == data.ind,
            }"
            @click="selectRouter(data.router, data.ind)"
          >
            {{ data.title }}
          </div>
        </div>
        <div class="cd-website-app-nav-list-title">Form 表单组件</div>
        <div v-for="(data, ind) in formComponents" :key="ind">
          <div
            :class="{
              'cd-website-app-nav-list-every': true,
              'cd-website-app-nav-list-every-select': selectInd == data.ind,
            }"
            @click="selectRouter(data.router, data.ind)"
          >
            {{ data.title }}
          </div>
        </div>
        <div class="cd-website-app-nav-list-title">Data 数据展示</div>
        <div v-for="(data, ind) in dataDisplay" :key="ind">
          <div
            :class="{
              'cd-website-app-nav-list-every': true,
              'cd-website-app-nav-list-every-select': selectInd == data.ind,
            }"
            @click="selectRouter(data.router, data.ind)"
          >
            {{ data.title }}
          </div>
        </div>
        <div class="cd-website-app-nav-list-title">Navigation 导航</div>
        <div v-for="(data, ind) in navigation" :key="ind">
          <div
            :class="{
              'cd-website-app-nav-list-every': true,
              'cd-website-app-nav-list-every-select': selectInd == data.ind,
            }"
            @click="selectRouter(data.router, data.ind)"
          >
            {{ data.title }}
          </div>
        </div>
        <div class="cd-website-app-nav-list-title">Feedback 反馈组件</div>
        <div v-for="(data, ind) in feedback" :key="ind">
          <div
            :class="{
              'cd-website-app-nav-list-every': true,
              'cd-website-app-nav-list-every-select': selectInd == data.ind,
            }"
            @click="selectRouter(data.router, data.ind)"
          >
            {{ data.title }}
          </div>
        </div>
      </div>
    </nav>
    <!-- 右侧内容 -->
    <section class="cd-website-app-content">
      <div class="cd-website-app-conceal" v-show="isConceal">
        <cd-icon name="menu" :size="24" @click="onMenuChange"></cd-icon>
        <cd-backtop :visibilityHeight="100">
          <div class="cd-website-app-conceal-totop">Back to top</div>
        </cd-backtop>
      </div>
      <router-view></router-view>
      <footer class="cd-website-app-footer">
        <div class="cd-website-app-footer-hr"></div>
        <div
          class="cd-website-app-footer-lefticon"
          v-show="selectInd - 1 >= 0"
          @click="selectRouter(navList[selectInd - 1]?.router, selectInd - 1)"
        >
          <cd-icon name="leftArrowTwo" :size="20"></cd-icon>
          <div>{{ navList[selectInd - 1]?.title }}</div>
        </div>
        <div
          class="cd-website-app-footer-righticon"
          v-show="selectInd + 1 < navList.length"
          @click="selectRouter(navList[selectInd + 1]?.router, selectInd + 1)"
        >
          <div>{{ navList[selectInd + 1]?.title }}</div>
          <cd-icon name="rightArrowTwo" :size="20"></cd-icon>
        </div>
      </footer>
    </section>
  </div>
  <!-- 页面太小时的出现的Menu -->
  <cd-drawer
    v-model="controlNav"
    direction="left"
    :size="45"
    title="Menu"
    class="cd-website-app-nav-list-every-frame"
    :zIndex="2"
  >
    <div
      :class="{
        'cd-website-app-nav-list-every': true,
        'cd-website-app-nav-list-every-select': selectInd == 0,
      }"
      @click="selectRouter('/homepage', 0)"
    >
      Homepage 主页
    </div>
    <div class="cd-website-app-nav-list-title">Basic 基础组件</div>
    <div v-for="(data, ind) in basedComponent" :key="ind">
      <div
        :class="{
          'cd-website-app-nav-list-every': true,
          'cd-website-app-nav-list-every-select': selectInd == data.ind,
        }"
        @click="selectRouter(data.router, data.ind)"
      >
        {{ data.title }}
      </div>
    </div>
    <div class="cd-website-app-nav-list-title">Form 表单组件</div>
    <div v-for="(data, ind) in formComponents" :key="ind">
      <div
        :class="{
          'cd-website-app-nav-list-every': true,
          'cd-website-app-nav-list-every-select': selectInd == data.ind,
        }"
        @click="selectRouter(data.router, data.ind)"
      >
        {{ data.title }}
      </div>
    </div>
    <div class="cd-website-app-nav-list-title">Data 数据展示</div>
    <div v-for="(data, ind) in dataDisplay" :key="ind">
      <div
        :class="{
          'cd-website-app-nav-list-every': true,
          'cd-website-app-nav-list-every-select': selectInd == data.ind,
        }"
        @click="selectRouter(data.router, data.ind)"
      >
        {{ data.title }}
      </div>
    </div>
    <div class="cd-website-app-nav-list-title">Navigation 导航</div>
    <div v-for="(data, ind) in navigation" :key="ind">
      <div
        :class="{
          'cd-website-app-nav-list-every': true,
          'cd-website-app-nav-list-every-select': selectInd == data.ind,
        }"
        @click="selectRouter(data.router, data.ind)"
      >
        {{ data.title }}
      </div>
    </div>
    <div class="cd-website-app-nav-list-title">Feedback 反馈组件</div>
    <div v-for="(data, ind) in feedback" :key="ind">
      <div
        :class="{
          'cd-website-app-nav-list-every': true,
          'cd-website-app-nav-list-every-select': selectInd == data.ind,
        }"
        @click="selectRouter(data.router, data.ind)"
      >
        {{ data.title }}
      </div>
    </div>
    <br />
  </cd-drawer>
</template>

<script lang="ts">
import gitHub from "@/assets/github.png";
import carpediem from "@/assets/carpediem.png";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  props: {},
  setup() {
    let leftNav = ref<object>();
    let app = ref<HTMLElement>();
    let appWidth = ref<number>();
    let isAnimation = ref<boolean>(false);
    let isConceal = ref<boolean>(false);
    let isRefresh = ref<boolean>(false);
    // 页面大小改变时
    window.addEventListener("resize", onResize);
    function onResize(): void {
      appWidth.value = app.value?.clientWidth;
    }
    watch(appWidth, (newval, oldval) => {
      if (newval !== undefined) {
        isConceal.value = newval >= 920 ? false : true;
        if (isConceal.value) {
          controlNav.value = false;
        }
      }
    });
    // 页面刷新时
    window.addEventListener("pageshow", refresh);
    const route = useRoute();
    function refresh(): void {
      isRefresh.value = true;
      basedComponent.value.forEach((val, ind) => {
        if (val.router == route.path) {
          selectInd.value = val.ind;
        }
      });
      formComponents.value.forEach((val, ind) => {
        if (val.router == route.path) {
          selectInd.value = val.ind;
        }
      });
      dataDisplay.value.forEach((val, ind) => {
        if (val.router == route.path) {
          selectInd.value = val.ind;
        }
      });
      navigation.value.forEach((val, ind) => {
        if (val.router == route.path) {
          selectInd.value = val.ind;
        }
      });
      feedback.value.forEach((val, ind) => {
        if (val.router == route.path) {
          selectInd.value = val.ind;
        }
      });
    }
    watch(isConceal, (newval, oldval) => {
      if (newval) {
        isAnimation.value = true;
      } else {
        if (selectInd.value >= 10) {
          setTimeout(() => {
            (leftNav.value as HTMLDivElement).scrollTo({
              top: (selectInd.value - 10) * 45,
            });
          }, 10);
        }
      }
    });
    watch(isRefresh, (newval, oldval) => {
      if (newval) {
        if (selectInd.value >= 10) {
          (leftNav.value as HTMLDivElement).scrollTo({
            top: (selectInd.value - 10) * 45,
            behavior: "smooth",
          });
        }
        isRefresh.value = false;
      }
    });
    onMounted(() => {
      onResize();
    });
    // 菜单的出现和消失
    let controlNav = ref<boolean>();
    function onMenuChange() {
      controlNav.value = !controlNav.value;
    }
    // github图标
    let githubImg = ref<string>();
    githubImg.value = gitHub;
    // carpediem图片
    let carpediemImg = ref<string>();
    carpediemImg.value = carpediem;
    // 选择菜单
    const router = useRouter();
    let selectInd = ref<number>(0);
    function selectRouter(routerDeom: string, ind: number) {
      router.push(routerDeom);
      controlNav.value = false;
      selectInd.value = ind;
    }
    // 菜单数据
    interface navEveryObject {
      title: string;
      router: string;
      ind: number;
    }
    let basedComponent = ref<navEveryObject[]>([
      {
        title: "Button 按钮",
        router: "/button",
        ind: 1,
      },
      {
        title: "Boeder 边框",
        router: "/border",
        ind: 2,
      },
      {
        title: "Icon 图标",
        router: "/icon",
        ind: 3,
      },
      {
        title: "Layout 布局",
        router: "/layout",
        ind: 4,
      },
      {
        title: "Link 链接",
        router: "/link",
        ind: 5,
      },
      {
        title: "Scrollbar 滚动条",
        router: "/scrollbar",
        ind: 6,
      },
    ]);
    let formComponents = ref<navEveryObject[]>([
      {
        title: "Cascader 级联选择器",
        router: "/cascader",
        ind: 7,
      },
      {
        title: "Checkbox 多选框",
        router: "/checkbox",
        ind: 8,
      },
      {
        title: "DatePicker 日期选择器",
        router: "/datepicker",
        ind: 9,
      },
      {
        title: "Input 输入框",
        router: "/input",
        ind: 10,
      },
      {
        title: "Input Number 数字输入框",
        router: "/inputNumber",
        ind: 11,
      },
      {
        title: "Radio 单选框",
        router: "/radio",
        ind: 12,
      },
      {
        title: "Rate 评分",
        router: "/rate",
        ind: 13,
      },
      {
        title: "Select 选择器",
        router: "/select",
        ind: 14,
      },
      {
        title: "Slider 滑块",
        router: "/slider",
        ind: 15,
      },
      {
        title: "Swicth 开关",
        router: "/switch",
        ind: 16,
      },
      {
        title: "Upload 上传",
        router: "/upload",
        ind: 17,
      },
    ]);
    let dataDisplay = ref<navEveryObject[]>([
      {
        title: "Avatar 头像",
        router: "/avatar",
        ind: 18,
      },
      {
        title: "Badge 徽章",
        router: "/badge",
        ind: 19,
      },
      {
        title: "Carousel 走马灯",
        router: "/carousel",
        ind: 20,
      },
      {
        title: "Collapse 折叠面板",
        router: "/collapse",
        ind: 21,
      },
      {
        title: "Empty 空状态",
        router: "/empty",
        ind: 22,
      },
      {
        title: "Image 图片",
        router: "/image",
        ind: 23,
      },
      {
        title: "Pagination 分页",
        router: "/pagination",
        ind: 24,
      },
      {
        title: "Progress 进度条",
        router: "/progress",
        ind: 25,
      },
      {
        title: "Table 表格",
        router: "/table",
        ind: 26,
      },
      {
        title: "Tag 标签",
        router: "/tag",
        ind: 27,
      },
    ]);
    let navigation = ref<navEveryObject[]>([
      {
        title: "Backtop 回到顶部",
        router: "/backtop",
        ind: 28,
      },
      {
        title: "Breadcrumb 面包屑",
        router: "/breadcrumb",
        ind: 29,
      },
      {
        title: "Page Header 页头",
        router: "/pageheader",
        ind: 30,
      },
      {
        title: "Tabs 标签页",
        router: "/tabs",
        ind: 31,
      },
    ]);
    let feedback = ref<navEveryObject[]>([
      {
        title: "Alert 提示",
        router: "/alert",
        ind: 32,
      },
      {
        title: "Dialog 对话框",
        router: "/dialog",
        ind: 33,
      },
      {
        title: "Drawer 抽屉",
        router: "/drawer",
        ind: 34,
      },
      {
        title: "Message 抽屉",
        router: "/message",
        ind: 35,
      },
      {
        title: "Tooltip 文字提示",
        router: "/tooltip",
        ind: 36,
      },
    ]);
    let navList = ref<navEveryObject[]>([
      {
        title: "Homepage 主页",
        router: "/homepage",
        ind: 0,
      },
      {
        title: "Button 按钮",
        router: "/button",
        ind: 1,
      },
      {
        title: "Boeder 边框",
        router: "/border",
        ind: 2,
      },
      {
        title: "Icon 图标",
        router: "/icon",
        ind: 3,
      },
      {
        title: "Layout 布局",
        router: "/layout",
        ind: 4,
      },
      {
        title: "Link 链接",
        router: "/link",
        ind: 5,
      },
      {
        title: "Scrollbar 滚动条",
        router: "/scrollbar",
        ind: 6,
      },
      {
        title: "Cascader 级联选择器",
        router: "/cascader",
        ind: 7,
      },
      {
        title: "Checkbox 多选框",
        router: "/checkbox",
        ind: 8,
      },
      {
        title: "DatePicker 日期选择器",
        router: "/datepicker",
        ind: 9,
      },
      {
        title: "Input 输入框",
        router: "/input",
        ind: 10,
      },
      {
        title: "Input Number 数字输入框",
        router: "/inputNumber",
        ind: 11,
      },
      {
        title: "Radio 单选框",
        router: "/radio",
        ind: 12,
      },
      {
        title: "Rate 评分",
        router: "/rate",
        ind: 13,
      },
      {
        title: "Select 选择器",
        router: "/select",
        ind: 14,
      },
      {
        title: "Slider 滑块",
        router: "/slider",
        ind: 15,
      },
      {
        title: "Swicth 滑块",
        router: "/switch",
        ind: 16,
      },
      {
        title: "Upload 上传",
        router: "/upload",
        ind: 17,
      },
      {
        title: "Avatar 头像",
        router: "/avatar",
        ind: 18,
      },
      {
        title: "Badge 徽章",
        router: "/badge",
        ind: 19,
      },
      {
        title: "Carousel 走马灯",
        router: "/carousel",
        ind: 20,
      },
      {
        title: "Collapse 折叠面板",
        router: "/collapse",
        ind: 21,
      },
      {
        title: "Empty 空状态",
        router: "/empty",
        ind: 22,
      },
      {
        title: "Image 图片",
        router: "/image",
        ind: 23,
      },
      {
        title: "Pagination 分页",
        router: "/pagination",
        ind: 24,
      },
      {
        title: "Progress 进度条",
        router: "/progress",
        ind: 25,
      },
      {
        title: "Table 表格",
        router: "/table",
        ind: 26,
      },
      {
        title: "Tag 标签",
        router: "/tag",
        ind: 27,
      },
      {
        title: "Backtop 回到顶部",
        router: "/backtop",
        ind: 28,
      },
      {
        title: "Breadcrumb 面包屑",
        router: "/breadcrumb",
        ind: 29,
      },
      {
        title: "Page Header 页头",
        router: "/pageheader",
        ind: 30,
      },
      {
        title: "Tabs 标签页",
        router: "/tabs",
        ind: 31,
      },
      {
        title: "Alert 提示",
        router: "/alert",
        ind: 32,
      },
      {
        title: "Dialog 对话框",
        router: "/dialog",
        ind: 33,
      },
      {
        title: "Drawer 抽屉",
        router: "/drawer",
        ind: 34,
      },
      {
        title: "Message 抽屉",
        router: "/message",
        ind: 35,
      },
      {
        title: "Tooltip 文字提示",
        router: "/tooltip",
        ind: 36,
      },
    ]);
    return {
      app,
      onResize,
      isConceal,
      controlNav,
      onMenuChange,
      isAnimation,
      selectRouter,
      selectInd,
      githubImg,
      carpediemImg,
      leftNav,
      basedComponent,
      formComponents,
      dataDisplay,
      navigation,
      feedback,
      navList,
    };
  },
};
</script>

<style>
body {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

input:focus,
p:focus,
div:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-modify: read-write-plaintext-only;
}

*::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
/* 滑块 */
*:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}
/* 滚动槽 */
*::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
img {
  height: 100%;
  width: 100%;
}
.cd-website-app-header {
  position: sticky;
  z-index: 1;
  top: 0;
  height: 50px;
  width: 100vw;
  border-bottom: 1px solid #dcdfe6;
  background-color: white;
}
.cd-website-app-header-carpediemImg {
  position: absolute;
  left: 30px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.cd-website-app-header-cdImg {
  object-fit: cover;
}
.cd-website-app-header-content {
  position: absolute;
  left: 90px;
  line-height: 50px;
  color: #409eff;
  font-size: 26px;
  cursor: pointer;
  white-space: nowrap;
}
.cd-website-app-header-githubImg {
  position: absolute;
  top: 10px;
  right: 20px;
  height: 30px;
  width: 30px;
  margin-right: 20px;
}
.cd-website-app-frame {
  position: relative;
  display: flex;
  width: 100vw;
}
.cd-website-app-conceal {
  position: sticky;
  z-index: 1;
  top: 50px;
  padding-left: 10px;
  height: 33px;
  line-height: 33px;
  width: 100%;
  border-top: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  background-color: white;
}
.cd-website-app-nav {
  position: sticky;
  top: 50px;
  border-right: 1px solid #dcdfe6;
  overflow: auto;
  height: calc(100vh - 50px);
  min-width: 280px;
  flex: 1;
}
.cd-website-app-nav-vanishanimation {
  position: sticky;
  top: 50px;
  overflow: auto;
  height: calc(100vh - 50px);
  width: 0px;
  transform: translateX(-100%);
  animation: vanishanimation 0.1s linear;
}
@keyframes vanishanimation {
  0% {
    transform: translateX(0%);
    width: 280px;
  }
  100% {
    width: 0px;
    transform: translateX(-100%);
  }
}
.cd-website-app-nav-showanimation {
  position: sticky;
  top: 50px;
  overflow: auto;
  height: calc(100vh - 50px);
  animation: showanimation 0.1s linear;
}
@keyframes showanimation {
  0% {
    transform: translateX(-100%);
    width: 0px;
  }
  100% {
    width: 280px;
    transform: translateX(-0%);
  }
}
.cd-website-app-nav::-webkit-scrollbar {
  width: 6px;
}
/* 滑块 */
.cd-website-app-nav:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}
/* 滚动槽 */
.cd-website-app-nav::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
.cd-website-app-nav::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}

.cd-website-app-nav-list {
  position: absolute;
  width: 280px;
  right: 0px;
  padding: 15px 0px;
}
.cd-website-app-nav-list-every-frame {
  position: relative;
}
.cd-website-app-nav-list-title {
  font-weight: 700;
  padding: 25px 15px 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.cd-website-app-nav-list-every {
  font-size: 14px;
  margin: 0px 8px;
  padding: 10px 32px 10px 35px;
  border-radius: 5px;
  cursor: pointer;
}
.cd-website-app-nav-list-every-select {
  color: #409eff;
  background-color: #ecf5fe;
}
.cd-website-app-nav-list-every:hover {
  color: #409eff;
}
.cd-website-app-content {
  flex: 4;
}
.cd-website-app-conceal-totop {
  color: #409eff;
  font-size: 14px;
  cursor: pointer;
}
.cd-website-app-footer {
  width: calc(92%);
  position: relative;
  padding: 16px 35px 550px;
  font-size: 14px;
  color: #409eff;
}
.cd-website-app-footer-hr {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
  border-top: 1px solid #dcdfe6;
}
.cd-website-app-footer-lefticon {
  position: absolute;
  z-index: 0;
  left: 30px;
  display: flex;
  align-items: center;
  line-height: 20px;
  cursor: pointer;
}
.cd-website-app-footer-righticon {
  position: absolute;
  z-index: 0;
  right: 30px;
  display: flex;
  align-items: center;
  line-height: 20px;
  cursor: pointer;
}
</style>
