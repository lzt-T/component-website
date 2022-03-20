<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Layout 布局</h1>
      <p class="cd-public-p">通过基础的 24 分栏，迅速简便地创建布局</p>
      <cd-alter
        title="组件默认使用 Flex 布局，不需要手动设置"
        type="warning"
        :showIcon="true"
        :closable="false"
      ></cd-alter>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础布局</h2>
      <p class="cd-public-p">使用列创建基础网格布局</p>
      <p class="cd-public-p">
        通过 <code>row</code> 和 <code>col</code> 组件，并通过
        <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局
      </p>
      <div class="cd-public-div-frame">
        <cd-row>
          <cd-col :span="24" class="cd-website-col-background-color"></cd-col>
        </cd-row>
        <cd-row>
          <cd-col :span="12" class="cd-website-col-background-color"></cd-col>
          <cd-col
            :span="12"
            class="cd-website-col-background-color-light"
          ></cd-col>
        </cd-row>
        <cd-row>
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
          <cd-col
            :span="8"
            class="cd-website-col-background-color-light"
          ></cd-col>
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row>
          &lt;cd-col :span="24" class="cd-website-col-background-color">&lt;/cd-col>
        &lt;/cd-row>
        &lt;cd-row>
          &lt;cd-col :span="12" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col
            :span="12"
            class="cd-website-col-background-color-light"
          >&lt;/cd-col>
        &lt;/cd-row>
        &lt;cd-row>
          &lt;cd-col :span="8" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col
            :span="8"
            class="cd-website-col-background-color-light"
          >&lt;/cd-col>
          &lt;cd-col :span="8" class="cd-website-col-background-color">&lt;/cd-col>
        &lt;/cd-row>
    &lt;/template&gt;
    &lt;style scoped>
    .cd-website-col-background-color {
        margin: 10px 0px;
        height: 32px;
        background-color: #d3dce6;
    }
    .cd-website-col-background-color-light {
        margin: 10px 0px;
        height: 32px;
        background-color: #e5e9f2;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">分栏间隔</h2>
      <p class="cd-public-p">支持列间距</p>
      <p class="cd-public-p">
        行提供 <code>gap</code> 属性来指定列之间的间距，其默认值为0
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20">
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row  :gap="20">
          &lt;cd-col :span="8" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col
            :span="8"
            class="cd-website-col-background-color"
          >&lt;/cd-col>
          &lt;cd-col :span="8" class="cd-website-col-background-color">&lt;/cd-col>
        &lt;/cd-row>
    &lt;/template&gt;
    &lt;style scoped>
    .cd-website-col-background-color {
        margin: 10px 0px;
        height: 32px;
        background-color: #d3dce6;
    }
    &lt;/style>        
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">混合布局</h2>
      <p class="cd-public-p">
        通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20">
          <cd-col :span="16" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
        </cd-row>
        <cd-row :gap="20">
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="4" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="8" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="4" class="cd-website-col-background-color"></cd-col>
        </cd-row>
        <cd-row :gap="20">
          <cd-col :span="4" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="16" class="cd-website-col-background-color"></cd-col>
          <cd-col :span="4" class="cd-website-col-background-color"></cd-col>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20">
          &lt;cd-col :span="16" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col :span="8" class="cd-website-col-background-color">&lt;/cd-col>
        &lt;/cd-row>
        &lt;cd-row :gap="20">
          &lt;cd-col :span="8" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col :span="4" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col :span="8" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col :span="4" class="cd-website-col-background-color">&lt;/cd-col>
        &lt;/cd-row>
        &lt;cd-row :gap="20">
          &lt;cd-col :span="4" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col :span="16" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col :span="4" class="cd-website-col-background-color">&lt;/cd-col>
        &lt;/cd-row>
    &lt;/template&gt;
    &lt;style scoped>
    .cd-website-col-background-color {
        margin: 10px 0px;
        height: 32px;
        background-color: #d3dce6;
    }
    &lt;/style>        
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">列偏移</h2>
      <cd-alter
        title="使用 offset 属性,不能给 col 组件设置水平margin值,不然会导致offest失效"
        type="warning"
        :showIcon="true"
        :closable="false"
      ></cd-alter>
      <p class="cd-public-p">您可以指定列偏移量</p>
      <p class="cd-public-p">
        通过制定 <code>col</code> 组件的
        <code>offset</code> 属性可以指定分栏偏移的栏数
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20">
          <cd-col :span="6" class="cd-website-col-background-color"></cd-col>
          <cd-col
            :offset="6"
            :span="6"
            class="cd-website-col-background-color"
          ></cd-col>
        </cd-row>
        <cd-row :gap="20">
          <cd-col
            :offset="6"
            :span="6"
            class="cd-website-col-background-color"
          ></cd-col>
          <cd-col
            :offset="6"
            :span="6"
            class="cd-website-col-background-color"
          ></cd-col>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;  
        &lt;cd-row :gap="20">
          &lt;cd-col :span="6" class="cd-website-col-background-color">&lt;/cd-col>
          &lt;cd-col
            :offset="6"
            :span="6"
            class="cd-website-col-background-color"
          >&lt;/cd-col>
        &lt;/cd-row>
        &lt;cd-row :gap="20">
          &lt;cd-col
            :offset="6"
            :span="6"
            class="cd-website-col-background-color"
          >&lt;/cd-col>
          &lt;cd-col
            :offset="6"
            :span="6"
            class="cd-website-col-background-color"
          >&lt;/cd-col>
        &lt;/cd-row>
    &lt;/template&gt;  
    &lt;style scoped>
    .cd-website-col-background-color {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 32px;
    background-color: #d3dce6;
    }
    &lt;/style>       
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Row 属性</h2>
      <cd-table
        :data="rowAttributes"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Row 插槽</h2>
      <cd-table
        :data="rowSlot"
        :listName="['插槽名', '说明', '子标签']"
      ></cd-table>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">Col 属性</h2>
      <cd-table
        :data="colAttributes"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="eight" :ref="anchor" class="cd-public-headline-h2">Col 插槽</h2>
      <cd-table :data="colSlot" :listName="['属性', '说明']"></cd-table>
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
    interface rightNav {
      anchorName: string;
      title: string;
    }
    let rightNavData = ref<rightNav[]>([
      {
        anchorName: "one",
        title: "基础布局",
      },
      {
        anchorName: "two",
        title: "分栏间隔",
      },
      {
        anchorName: "three",
        title: "混合布局",
      },
      {
        anchorName: "four",
        title: "列偏移",
      },
      {
        anchorName: "five",
        title: "Row 属性",
      },
      {
        anchorName: "six",
        title: "Row 插槽",
      },
      {
        anchorName: "seven",
        title: "Col 属性",
      },
      {
        anchorName: "eight",
        title: "Col 插槽",
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
    let rowAttributes = ref<Iattributesfrom[]>([
      {
        property: "flexDirection",
        explain: "flex布局原生属性flex-direction",
        type: "string",
        optional: "row/row-reverse/column/colum-reverse",
        default: "row",
      },
      {
        property: "gap",
        explain: "列元素的间隔",
        type: "number",
        optional: "--",
        default: "0",
      },
      {
        property: "justify",
        explain: "flex布局原生属性justify-content",
        type: "string",
        optional: "flex-start/flex-end/center/space-around/space-between",
        default: "flex-start",
      },
      {
        property: "align",
        explain: "flex布局原生属性align-items",
        type: "string",
        optional: "flex-start/flex-end/center/stretch",
        default: "flex-start",
      },
      {
        property: "flexWrap",
        explain: "flex布局原生属性flex-wrap",
        type: "string",
        optional: "nowrap/wrap",
        default: "nowrap",
      },
      {
        property: "textAlign",
        explain: "原生CSS属性text-align",
        type: "string",
        optional: "--",
        default: "center",
      },
    ]);
    let colAttributes = ref<Iattributesfrom[]>([
      {
        property: "span",
        explain: "栅格占据的列数",
        type: "number",
        optional: "--",
        default: "24",
      },
      {
        property: "offset",
        explain: "栅格左侧的间隔格数",
        type: "number",
        optional: "--",
        default: "0",
      },
    ]);

    interface IattributesSlot {
      property: string;
      explain: string;
      childtags: string;
    }
    let rowSlot = ref<IattributesSlot[]>([
      {
        property: "--",
        explain: "自定义默认内容",
        childtags: "Col",
      },
    ]);
    interface IattributesSlotOne {
      property: string;
      explain: string;
    }
    let colSlot = ref<IattributesSlotOne[]>([
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
      rowAttributes,
      colAttributes,
      rowSlot,
      colSlot,
    };
  },
};
</script>

<style scoped>
.cd-website-col-background-color {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 32px;
  background-color: #d3dce6;
}
.cd-website-col-background-color-light {
  margin: 10px 0px;
  height: 32px;
  background-color: #e5e9f2;
}
</style>