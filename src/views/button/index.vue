<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Button 按钮</h1>
      <cd-button>sd</cd-button>
      <cd-collapse>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
        <div>sadasdasd</div>
      </cd-collapse>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="one">基础用法</h2>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="two">禁用状态</h2>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="three">文字按钮</h2>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="foer">图标按钮</h2>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="five">加载中</h2>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="six">Button 属性</h2>
      <cd-table
        :data="attributesFormData"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
    </section>
    <right-nav
      :rightNavData="rightNavData"
      :isRightNavShow="isRightNavShow"
      :currentAnchor="currentAnchor"
    ></right-nav>
  </div>
</template>

<script lang='ts'>
import "@/assets/css/public.css";
import useRightNavShow from "@/hooks/useRightNavShow";
import useCurrentAbchor from "@/hooks/useCurrentAnchor";
import rightNav from "@/components/rightNav/inidex.vue";
import { ref } from "vue";
export default {
  components: {
    rightNav,
  },
  setup() {
    // 锚点
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
        title: "禁用状态",
      },
      {
        anchorName: "three",
        title: "文字按钮",
      },
      {
        anchorName: "four",
        title: "图标按钮",
      },
      {
        anchorName: "five",
        title: "加载中",
      },
      {
        anchorName: "six",
        title: "Button 属性",
      },
    ]);
    let currentAnchor = ref<number>(-1);
    let anchorArray = ref<object[]>([]);
    const anchor = (el: object) => {
      anchorArray.value.push(el);
    };
    useCurrentAbchor(anchorArray, anchor, currentAnchor);
    // attributesForm数据
    interface attributesfrom {
      property: string;
      explain: string;
      type: string;
      optional: string;
      default: string;
    }
    let attributesFormData = ref<attributesfrom[]>([
      {
        property: "size",
        explain: "高度",
        type: "number",
        optional: "--",
        default: "38",
      },
      {
        property: "width",
        explain: "宽度",
        type: "number",
        optional: "--",
        default: "83",
      },
      {
        property: "backgroundCcolor",
        explain: "背景色",
        type: "string",
        optional: "--",
        default: "white",
      },
      {
        property: "color",
        explain: "字体颜色",
        type: "string",
        optional: "--",
        default: "black",
      },
      {
        property: "round",
        explain: "是否是椭圆",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "circle",
        explain: "是否是圆行",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "loading",
        explain: "是否处于加载状态",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "lAnimation",
        explain: "加载状态的动画",
        type: "string",
        optional: "loading/loading-one/loading-two",
        default: "loading",
      },
      {
        property: "disabled",
        explain: "是否禁用",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "text",
        explain: "是否处于文字状态",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);
    // 右边导航
    let isRightNavShow = ref<boolean>(true);
    useRightNavShow(isRightNavShow);
    return {
      isRightNavShow,
      attributesFormData,
      rightNavData,
      anchor,
      currentAnchor,
    };
  },
};
</script>

<style scoped>
</style>