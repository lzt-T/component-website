<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Link 链接</h1>
      <p class="cd-public-p">文字超链接</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        基础的文字链接用法,设定 <code>color</code> 属性可以改变链接的字体颜色
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-border-row-margin" flexWrap="wrap">
          <cd-link>default</cd-link>
          <cd-link color="#409EFF">primary</cd-link>
          <cd-link color="#67C23A">success</cd-link>
          <cd-link color="#E6A23C">warning</cd-link>
          <cd-link color="#F56C6C">danger</cd-link>
          <cd-link color="#909399">info</cd-link>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-link>default&lt;/cd-link>
        &lt;cd-link color="#409EFF">primary&lt;/cd-link>
        &lt;cd-link color="#67C23A">success&lt;/cd-link>
        &lt;cd-link color="#E6A23C">warning&lt;/cd-link>
        &lt;cd-link color="#F56C6C">danger&lt;/cd-link>
        &lt;cd-link color="#909399">info&lt;/cd-link>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">
        通过 <code>disabled</code> 属性来设定元素的禁用状态
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-link disabled>default</cd-link>
          <cd-link disabled color="#409EFF">primary</cd-link>
          <cd-link disabled color="#67C23A">success</cd-link>
          <cd-link disabled color="#E6A23C">warning</cd-link>
          <cd-link disabled color="#F56C6C">danger</cd-link>
          <cd-link disabled color="#909399">info</cd-link>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-link disabled>default&lt;/cd-link>
        &lt;cd-link disabled color="#409EFF">primary&lt;/cd-link>
        &lt;cd-link disabled color="#67C23A">success&lt;/cd-link>
        &lt;cd-link disabled color="#E6A23C">warning&lt;/cd-link>
        &lt;cd-link disabled color="#F56C6C">danger&lt;/cd-link>
        &lt;cd-link disabled color="#909399">info&lt;/cd-link>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">图标链接</h2>
      <cd-alert
        type="warning"
        title=" icon 组件的大小设定成文字大小一样，才会跟文字垂直居中"
        showIcon
        :closable="false"
      ></cd-alert>
      <p class="cd-public-p">带图标的链接</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-link> <cd-icon name="editTwo" :size="16"></cd-icon>Edit</cd-link>
          <cd-link> <cd-icon name="trash" :size="16"></cd-icon>Trash</cd-link>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-link> &lt;cd-icon name="editTwo" :size="16">&lt;/cd-icon>Edit &lt;/cd-link>
        &lt;cd-link> &lt;cd-icon name="trash" :size="16">&lt;/cd-icon>Trash &lt;/cd-link>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Link 属性</h2>
      <cd-table
        :data="linkAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Link 插槽</h2>
      <cd-table :data="borderSlot" :listName="['插槽名', '说明']"></cd-table>
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
        title: "禁用状态",
      },
      {
        anchorName: "three",
        title: "图标链接",
      },
      {
        anchorName: "four",
        title: "Link 属性",
      },
      {
        anchorName: "five",
        title: "Link 插槽",
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
    let linkAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "color",
        explain: "链接的字体颜色",
        type: "string",
        optional: "--",
        default: "black",
      },
      {
        property: "href",
        explain: "原生的href属性",
        type: "string",
        optional: "--",
        default: "#",
      },
      {
        property: "underline",
        explain: "触摸式是否有下划线",
        type: "boolean",
        optional: "true/false",
        default: "true",
      },
      {
        property: "disabled",
        explain: "是否处于禁用状态",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);

    interface ILinkSlot {
      property: string;
      explain: string;
    }
    let borderSlot = ref<ILinkSlot[]>([
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
      linkAttributesForm,
      borderSlot,
    };
  },
};
</script>

<style>
</style>