<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Page Header 页头</h1>
      <p class="cd-public-p">
        如果页面的路径比较简单，推荐使用页头组件而非面包屑组件
      </p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <div class="cd-public-div-frame">
        <cd-pageheader content="detail"> </cd-pageheader>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-pageheader content="detail"> &lt;/cd-pageheader>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">自定义图标</h2>
      <p class="cd-public-p">通过 <code>icon</code> 属性可以改变图标</p>
      <div class="cd-public-div-frame">
        <cd-pageheader content="detail" icon="leftArrowTow"> </cd-pageheader>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-pageheader content="detail" icon="leftArrowTow"> &lt;/cd-pageheader>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Page Header 属性
      </h2>
      <cd-table
        :data="pageheaderAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        Page Header 事件
      </h2>
      <cd-table
        :data="pageheaderEvent"
        :listName="['事件名', '说明', '参数']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        Page Header 插槽
      </h2>
      <cd-table
        :data="pageheaderSlot"
        :listName="['插槽名', '说明']"
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
        title: "自定义图标",
      },
      {
        anchorName: "three",
        title: "Page Header 属性",
      },
      {
        anchorName: "four",
        title: "Page Header 事件",
      },
      {
        anchorName: "five",
        title: "Page Header 插槽",
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
    let pageheaderAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "icon",
        explain: "图标组件",
        type: "string",
        optional: "--",
        default: "leftArrow",
      },
      {
        property: "title",
        explain: "标题",
        type: "string",
        optional: "--",
        default: "Back",
      },
      {
        property: "content",
        explain: "内容",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);

    interface IPageheaderEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let pageheaderEvent = ref<IPageheaderEvent[]>([
      {
        property: "back",
        explain: "点击左侧区域触发",
        parameter: "--",
      },
    ]);

    interface IPageheaderSlot {
      property: string;
      explain: string;
    }
    let pageheaderSlot = ref<IPageheaderSlot[]>([
      {
        property: "title",
        explain: "标题内容",
      },
      {
        property: "content",
        explain: "内容",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      pageheaderAttributesForm,
      pageheaderEvent,
      pageheaderSlot,
    };
  },
};
</script>

<style>
</style>