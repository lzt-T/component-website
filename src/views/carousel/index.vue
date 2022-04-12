<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Carousel 走马灯</h1>
      <p class="cd-public-p">在有限空间内，循环播放同一类型的图片</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        设置 <code>src</code> 属性,即可为走马灯传入图片资源
      </p>
      <p class="cd-public-p">
        默认情况下，在鼠标 hover 底部的指示器时就会触发切换。 通过设置
        <code>trigger</code> 属性为 <code>click</code>,可以达到点击触发的效果。
      </p>
      <div class="cd-public-div-frame">
        <div>Switch when indicator is hovered (default)</div>
        <cd-carousel
          :height="300"
          :src="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
        ></cd-carousel>
        <br />
        <br />
        <div>Switch when indicator is clicked</div>
        <cd-carousel
          :height="300"
          trigger="click"
          :src="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
        ></cd-carousel>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;div>Switch when indicator is hovered (default)&lt;/div>
        &lt;cd-carousel
          :height="300"
          :src="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
        >&lt;/cd-carousel>
        &lt;br />
        &lt;br />
        &lt;div>Switch when indicator is clicked&lt;/div>
        &lt;cd-carousel
          :height="300"
          trigger="click"
          :src="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
        >&lt;/cd-carousel>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">切换箭头</h2>
      <p class="cd-public-p">可以设置切换箭头的显示时机</p>
      <p class="cd-public-p">
        <code>arrow</code> 属性定义了切换箭头的显示时机。
        默认情况下,切换箭头只有在鼠标 <code>hover</code> 到走马灯上时才会显示。
        若将 <code>arrow</code> 设置为 <code>always</code>,则会一直显示；设置为
        <code>never</code>,则会一直隐藏。
      </p>
      <div class="cd-public-div-frame">
        <cd-carousel
          :height="300"
          arrow="always"
          :src="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
        ></cd-carousel>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-carousel
          :height="300"
          arrow="always"
          :src="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
        >&lt;/cd-carousel>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Carousel 属性
      </h2>
      <cd-table
        :data="carouselAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        Carousel 事件
      </h2>
      <cd-table
        :data="carouselEvent"
        :listName="['事件名', '说明', '参数']"
      ></cd-table>
    </section>
    <right-nav
      :rightNavData="rightNavData"
      :isRightNavShow="isRightNavShow"
      :currentAnchor="currentAnchor"
    ></right-nav>
  </div>
</template>

<script lang="ts">
import "@/assets/css/public.css";
import { ref } from "vue";
import useRightNavShow from "@/hooks/useRightNavShow";
import useCurrentAbchor from "@/hooks/useCurrentAnchor";
import rightNav from "@/components/rightNav/inidex.vue";
export default {
  components: {
    rightNav,
  },
  setup() {
    //   预加载图片
    let imgData = ref<string[]>([
      "https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg",
      "https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg",
      "https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg",
    ]);
    // 预加载图片
    function preloadImg(srcArr: string[]): void {
      if (srcArr instanceof Array) {
        for (var i = 0; i < srcArr.length; i++) {
          var oImg = new Image();
          oImg.src = srcArr[i];
        }
      }
    }
    preloadImg(imgData.value);

    //   对于锚点的处理
    interface rightNav {
      anchorName: string;
      title: string;
    }
    let rightNavData = ref<rightNav[]>([
      {
        anchorName: "one",
        title: "基础用法",
      },
      {
        anchorName: "two",
        title: "切换箭头",
      },
      {
        anchorName: "three",
        title: "Carousel 属性",
      },
      {
        anchorName: "four",
        title: "Carousel 事件",
      },
    ]);
    let isRightNavShow = ref<boolean>(true);
    useRightNavShow(isRightNavShow);
    let currentAnchor = ref<number>(-1);
    let anchorArray = ref<object[]>([]);
    const anchor = (el: object) => {
      anchorArray.value.push(el);
    };
    useCurrentAbchor(anchorArray, anchor, currentAnchor);

    // 表单
    interface Iattributesfrom {
      property: string;
      explain: string;
      type: string;
      optional: string;
      default: string;
    }
    let carouselAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "src",
        explain: "走马灯的图片资源数组,必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "height",
        explain: "高度",
        type: "number",
        optional: "--",
        default: "300",
      },
      {
        property: "initialIndex",
        explain: "初始状态激活的幻灯片的索引，从 0 开始	",
        type: "number",
        optional: "--",
        default: "0",
      },
      {
        property: "trigger",
        explain: "指示器的触发方式",
        type: "string",
        optional: "hover/click",
        default: "hover",
      },
      {
        property: "autoplay",
        explain: "是否自动切换	",
        type: "boolean",
        optional: "true/false",
        default: "true",
      },
      {
        property: "interval",
        explain: "自动切换的时间间隔，单位为毫秒，最小不低于1000",
        type: "number",
        optional: "--",
        default: "3000",
      },
      {
        property: "arrow",
        explain: "切换箭头的显示时机",
        type: "string",
        optional: "always/hover/never",
        default: "hover",
      },
      {
        property: "loop",
        explain: "是否循环显示",
        type: "boolean",
        optional: "true/false",
        default: "true",
      },
    ]);

    interface ICarouselEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let carouselEvent = ref<ICarouselEvent[]>([
      {
        property: "change",
        explain: "幻灯片切换时触发",
        parameter: "目前激活的幻灯片的索引",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      carouselAttributesForm,
      carouselEvent,
    };
  },
};
</script>

<style>
</style>