<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Tooltip 文字提示</h1>
      <p class="cd-public-p">常用于展示鼠标 hover 时的提示信息</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">提供 4 种不同方向的展示方式</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-tooltip content="top"> <cd-button>Top</cd-button> </cd-tooltip>
          <cd-tooltip content="left" direction="left">
            <cd-button>Left</cd-button>
          </cd-tooltip>
          <cd-tooltip content="bottom" direction="bottom">
            <cd-button>Bottom</cd-button>
          </cd-tooltip>
          <cd-tooltip content="right" direction="right">
            <cd-button>Right</cd-button>
          </cd-tooltip>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-tooltip content="top"> &lt;cd-button>Top&lt;/cd-button> &lt;/cd-tooltip>
          &lt;cd-tooltip content="left" direction="left">
            &lt;cd-button>Left&lt;/cd-button>
          &lt;/cd-tooltip>
          &lt;cd-tooltip content="bottom" direction="bottom">
            &lt;cd-button>Bottom&lt;/cd-button>
          &lt;/cd-tooltip>
          &lt;cd-tooltip content="right" direction="right">
            &lt;cd-button>Right&lt;/cd-button>
          &lt;/cd-tooltip>
        &lt;/cd-row>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">Tooltip 属性</h2>
      <cd-table
        :data="tooltipAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Tooltip 插槽
      </h2>
      <cd-table :data="tooltipSlot" :listName="['插槽名', '说明']"></cd-table>
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
        title: "Tooltip 属性",
      },
      {
        anchorName: "three",
        title: "Tooltip 插槽",
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
    let tooltipAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "content",
        explain: "显示的内容",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "direction",
        explain: "显示的方向",
        type: "string",
        optional: "top | bottom | left | right",
        default: "top",
      },
      {
        property: "backgroundColor",
        explain: "背景颜色",
        type: "string",
        optional: "--",
        default: "#2f2f31",
      },
      {
        property: "color",
        explain: "字体颜色",
        type: "string",
        optional: "--",
        default: "white",
      },
    ]);

    interface ITooltipSlot {
      property: string;
      explain: string;
    }
    let tooltipSlot = ref<ITooltipSlot[]>([
      {
        property: "--",
        explain: "自定义默认内容",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      tooltipAttributesForm,
      tooltipSlot,
    };
  },
};
</script>

<style>
</style>