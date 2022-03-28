<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Tag 标签</h1>
      <p class="cd-public-p">用于标记和选择</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        通过 <code>color</code>、<code>backgroundColor</code>
        属性来自定义字体颜色和背景颜色
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-tag>Tag</cd-tag>
          <cd-tag color="#409EFF" backgroundColor="#edf5fd">Tag1</cd-tag>
          <cd-tag color="#67C23A" backgroundColor="#edf8ea">Tag2</cd-tag>
          <cd-tag color="#909399" backgroundColor="#f8f4f1">Tag3</cd-tag>
          <cd-tag color="#E6A23C" backgroundColor="#fef5e8">Tag4</cd-tag>
          <cd-tag color="#F56C6C" backgroundColor="#ffeff0">Tag5</cd-tag>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
      &lt;cd-row :gap="20" flexWrap="wrap">
        &lt;cd-tag>Tag&lt;/cd-tag>
        &lt;cd-tag color="#409EFF" backgroundColor="#edf5fd">Tag1&lt;/cd-tag>
        &lt;cd-tag color="#67C23A" backgroundColor="#edf8ea">Tag2&lt;/cd-tag>
        &lt;cd-tag color="#909399" backgroundColor="#f8f4f1">Tag3&lt;/cd-tag>
        &lt;cd-tag color="#E6A23C" backgroundColor="#fef5e8">Tag4&lt;/cd-tag>
        &lt;cd-tag color="#F56C6C" backgroundColor="#ffeff0">Tag5&lt;/cd-tag>
      &lt;/cd-row>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">可移除标签</h2>
      <p class="cd-public-p">
        设置 <code>closable</code> 属性可以定义一个标签是否可移除。 它接受一个
        <code>Boolean</code>。当 Tag 被移除时会触发 <code>close</code> 事件
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-tag closable>Tag</cd-tag>
          <cd-tag color="#409EFF" backgroundColor="#edf5fd" closable
            >Tag1</cd-tag
          >
          <cd-tag color="#67C23A" backgroundColor="#edf8ea" closable
            >Tag2</cd-tag
          >
          <cd-tag color="#909399" backgroundColor="#f8f4f1" closable
            >Tag3</cd-tag
          >
          <cd-tag color="#E6A23C" backgroundColor="#fef5e8" closable
            >Tag4</cd-tag
          >
          <cd-tag color="#F56C6C" backgroundColor="#ffeff0" closable
            >Tag5</cd-tag
          >
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
      &lt;cd-row :gap="20" flexWrap="wrap">
        &lt;cd-tag closable>Tag&lt;/cd-tag>
        &lt;cd-tag color="#409EFF" backgroundColor="#edf5fd" closable
          >Tag1&lt;/cd-tag
        >
        &lt;cd-tag color="#67C23A" backgroundColor="#edf8ea" closable
          >Tag2&lt;/cd-tag
        >
        &lt;cd-tag color="#909399" backgroundColor="#f8f4f1" closable
          >Tag3&lt;/cd-tag
        >
        &lt;cd-tag color="#E6A23C" backgroundColor="#fef5e8" closable
          >Tag4&lt;/cd-tag
        >
        &lt;cd-tag color="#F56C6C" backgroundColor="#ffeff0" closable
          >Tag5&lt;/cd-tag
        >
      &lt;/cd-row>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">不同尺寸</h2>
      <p class="cd-public-p">
        通过 <code>height</code>、<code>width</code> 属性来控制组件大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-tag :height="28" :width="70">Tag</cd-tag>
          <cd-tag>Tag</cd-tag>
          <cd-tag :height="20" :width="50">Tag</cd-tag>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
      &lt;cd-row :gap="20" flexWrap="wrap">
        &lt;cd-tag :height="28" :width="70">Tag&lt;/cd-tag>
        &lt;cd-tag>Tag&lt;/cd-tag>
        &lt;cd-tag :height="20" :width="50">Tag&lt;/cd-tag>
      &lt;/cd-row>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Tag 属性</h2>
      <cd-table
        :data="tagAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Tag 事件</h2>
      <cd-table
        :data="tagEvent"
        :listName="['事件名', '说明', '参数']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Tag 插槽</h2>
      <cd-table :data="tagSlot" :listName="['插槽名', '说明']"></cd-table>
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
        title: "可移除标签",
      },
      {
        anchorName: "three",
        title: "不同尺寸",
      },
      {
        anchorName: "four",
        title: "Tag 属性",
      },
      {
        anchorName: "five",
        title: "Tag 事件",
      },
      {
        anchorName: "six",
        title: "Tag 插槽",
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
    let tagAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "closable",
        explain: "是否可关闭",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "height",
        explain: "高度，最小值为20",
        type: "number",
        optional: "--",
        default: "24",
      },
      {
        property: "width",
        explain: "宽度，最小值为50",
        type: "number",
        optional: "--",
        default: "60",
      },
      {
        property: "color",
        explain: "字体颜色",
        type: "string",
        optional: "--",
        default: "black",
      },
      {
        property: "backgroundColor",
        explain: "背景色",
        type: "string",
        optional: "--",
        default: "white",
      },
    ]);

    interface ITagEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let tagEvent = ref<ITagEvent[]>([
      {
        property: "click",
        explain: "点击 Tag 时触发的事件",
        parameter: "--",
      },
      {
        property: "close",
        explain: "关闭 Tag 时触发的事件",
        parameter: "--",
      },
    ]);

    interface ITagSlot {
      property: string;
      explain: string;
    }
    let tagSlot = ref<ITagSlot[]>([
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
      tagAttributesForm,
      tagEvent,
      tagSlot,
    };
  },
};
</script>

<style>
</style>