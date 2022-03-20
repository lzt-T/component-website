<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Border 边框</h1>
      <p class="cd-public-p">为用户提供不同的样式和大小的框</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        使用 <code>height</code> 、<code>width</code> 来设定框的大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-border-row-margin" flexWrap="wrap">
          <cd-border :height="250" :width="450"></cd-border>
          <cd-border></cd-border>
          <cd-border :height="150" :width="350"></cd-border>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-border :height="250" :width="450">&lt;/cd-border>
        &lt;cd-border>&lt;/cd-border>
        &lt;cd-border :height="150" :width="350">&lt;/cd-border>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">边框样式</h2>
      <p class="cd-public-p">
        使用 <code>borderStyle</code> 属性来设定框的的样式
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-border-row-margin" flexWrap="wrap">
          <cd-border></cd-border>
          <cd-border borderStyle="cd-border-one"></cd-border>
          <cd-border borderStyle="cd-border-two"></cd-border>
          <cd-border borderStyle="cd-border-three"></cd-border>
          <cd-border borderStyle="cd-border-four"></cd-border>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-border>&lt;/cd-border>
        &lt;cd-border borderStyle="cd-border-one">&lt;/cd-border>
        &lt;cd-border borderStyle="cd-border-two">&lt;/cd-border>
        &lt;cd-border borderStyle="cd-border-three">&lt;/cd-border>
        &lt;cd-border borderStyle="cd-border-four">&lt;/cd-border>
    &lt;/template&gt;         
        </pre>
      </cd-collapse>

      <h2 class="cd-public-headline-h2" :ref="anchor" id="three">
        Border 属性
      </h2>
      <cd-table
        :data="attributesFormData"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="four">Border 插槽</h2>
      <cd-table :data="borderSlot" :listName="['属性', '说明']"></cd-table>
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
    // 对于锚点的处理
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
        title: "边框样式",
      },
      {
        anchorName: "three",
        title: "Border 属性",
      },
      {
        anchorName: "four",
        title: "Border 插槽",
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
    interface attributesfrom {
      property: string;
      explain: string;
      type: string;
      optional: string;
      default: string;
    }
    let attributesFormData = ref<attributesfrom[]>([
      {
        property: "height",
        explain: "高度",
        type: "number",
        optional: "--",
        default: "200",
      },
      {
        property: "width",
        explain: "宽度",
        type: "number",
        optional: "--",
        default: "400",
      },
      {
        property: "borderStyle",
        explain: "边框的样式",
        type: "string",
        optional:
          "cd-border/cd-border-one/cd-border-two/cd-border-three/cd-border-four",
        default: "cd-border",
      },
    ]);
    interface IborderSlot {
      property: string;
      explain: string;
    }
    let borderSlot = ref<IborderSlot[]>([
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
      attributesFormData,
      borderSlot,
    };
  },
};
</script>

<style scoped>
.cd-border-row-margin {
  margin: 10px 0px;
}
</style>