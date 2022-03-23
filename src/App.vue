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
      href="https://github.com/lzt-T/component-website"
    >
      <img :src="githubImg" />
    </a>
  </header>
  <!-- 大体框架 -->
  <div class="cd-website-app-frame" ref="app">
    <nav
      :class="{
        'cd-website-app-nav': true && isConceal == false,
        'cd-website-app-nav-vanishanimation': isConceal && isAnimation,
        'cd-website-app-nav-showanimation': isConceal == false && isAnimation,
      }"
    >
      <div class="cd-website-app-nav-list">
        <div
          v-for="(data, ind) in navList"
          :key="ind"
          :class="{
            'cd-website-app-nav-list-every': true,
            'cd-website-app-nav-list-every-select': selectInd == ind,
          }"
          @click="selectRouter(data.router, ind)"
        >
          {{ data.title }}
        </div>
      </div>
    </nav>
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
          <cd-icon name="leftArrowTow" :size="20"></cd-icon>
          <div>{{ navList[selectInd - 1]?.title }}</div>
        </div>
        <div
          class="cd-website-app-footer-righticon"
          v-show="selectInd + 1 < navList.length"
          @click="selectRouter(navList[selectInd + 1]?.router, selectInd + 1)"
        >
          <div>{{ navList[selectInd + 1]?.title }}</div>
          <cd-icon name="rightArrowTow" :size="20"></cd-icon>
        </div>
      </footer>
    </section>
  </div>
  <!-- 页面太小时的出现的Menu -->
  <cd-drawer
    v-model="controlNav"
    direction="left"
    :size="35"
    title="Menu"
    class="cd-website-app-nav-list-every-frame"
  >
    <div
      v-for="(data, ind) in navList"
      :key="ind"
      :class="{
        'cd-website-app-nav-list-every': true,
        'cd-website-app-nav-list-every-select': selectInd == ind,
      }"
      @click="selectRouter(data.router, ind)"
    >
      {{ data.title }}
    </div>
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
    let app = ref<HTMLElement>();
    let appWidth = ref<number>();
    let isAnimation = ref<boolean>(false);
    let isConceal = ref<boolean>(false);
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
      navList.value.forEach((val, ind) => {
        if (val.router == route.path) {
          selectInd.value = ind;
        }
      });
    }
    watch(isConceal, (newval, oldval) => {
      if (newval) {
        isAnimation.value = true;
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
    }
    let navList = ref<navEveryObject[]>([
      {
        title: "Homepage 主页",
        router: "/homepage",
      },
      {
        title: "Button 按钮",
        router: "/button",
      },
      {
        title: "Boeder 边框",
        router: "/border",
      },
      {
        title: "Icon 图标",
        router: "/icon",
      },
      {
        title: "Layout 布局",
        router: "/layout",
      },
      {
        title: "Link 链接",
        router: "/link",
      },
      {
        title: "Scrollbar 滚动条",
        router: "/scrollbar",
      },
      {
        title: "Cascader 级联选择器",
        router: "/cascader",
      },
      {
        title: "Checkbox 多选框",
        router: "/checkbox",
      },
      {
        title: "DatePicker 日期选择器",
        router: "/datepicker",
      },
      {
        title: "Input 输入框",
        router: "/input",
      },
      {
        title: "Input Number 数字输入框",
        router: "/inputNumber",
      },
      {
        title: "Radio 单选框",
        router: "/radio",
      },
      {
        title: "Rate 评分",
        router: "/rate",
      },
      {
        title: "Select 选择器",
        router: "/select",
      },
    ]);

    return {
      app,
      onResize,
      navList,
      isConceal,
      controlNav,
      onMenuChange,
      isAnimation,
      selectRouter,
      selectInd,
      githubImg,
      carpediemImg,
    };
  },
};
</script>

<style>
body::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
/* 滑块 */
body:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}
/* 滚动槽 */
body::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
body::-webkit-scrollbar-thumb {
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
  background-color: white;
}
.cd-website-app-nav {
  border-right: 1px solid #dcdfe6;
  position: sticky;
  top: 50px;
  overflow: auto;
  height: 100vh;
  min-width: 280px;
  flex: 1;
}
.cd-website-app-nav-vanishanimation {
  position: relative;
  overflow: auto;
  height: 100vh;
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
  position: relative;
  overflow: auto;
  height: 100vh;
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
}
.cd-website-app-nav-list-every-frame {
  position: relative;
  z-index: 2;
}
.cd-website-app-nav-list-every {
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 10px 20px;
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
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
  border-top: 1px solid #dcdfe6;
}
.cd-website-app-footer-lefticon {
  position: absolute;
  left: 30px;
  display: flex;
  align-items: center;
  line-height: 20px;
  cursor: pointer;
}
.cd-website-app-footer-righticon {
  position: absolute;
  right: 30px;
  display: flex;
  align-items: center;
  line-height: 20px;
  cursor: pointer;
}
</style>
