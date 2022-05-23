<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Empty 空状态</h1>
      <p class="cd-public-p">空状态时的占位提示</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <div class="cd-public-div-frame">
        <cd-empty></cd-empty>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-empty>&lt;/cd-empty>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">自定义图片</h2>
      <p class="cd-public-p">通过设置 <code>img</code> 属性传入图片 URL</p>
      <div class="cd-public-div-frame su">
        <cd-empty
          img="https://fastly.jsdelivr.net/gh/lztnb/img@master/4.jpg"
        ></cd-empty>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-empty
          img="https://fastly.jsdelivr.net/gh/lztnb/img@master/4.jpg"
        >&lt;/cd-empty>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">图片尺寸</h2>
      <p class="cd-public-p">使用 <code>imageSize</code> 属性控制图片的大小</p>
      <div class="cd-public-div-frame">
        <cd-empty :imageSize="150"></cd-empty>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-empty :imageSize="150">&lt;/cd-empty>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">底部内容</h2>
      <p class="cd-public-p">使用默认插槽可在底部插入内容</p>
      <div class="cd-public-div-frame">
        <cd-empty :imageSize="150">
          <cd-button backgroundCcolor="#409EEF" color="white">Button</cd-button>
        </cd-empty>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-empty :imageSize="150">
          &lt;cd-button backgroundCcolor="#409EEF" color="white">Button&lt;/cd-button>
        &lt;/cd-empty>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Empty 属性</h2>
      <cd-table
        :data="emptyAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Empty 插槽</h2>
      <cd-table :data="emptySlot" :listName="['插槽名', '说明']"></cd-table>
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
        title: "自定义图片",
      },
      {
        anchorName: "three",
        title: "图片尺寸",
      },
      {
        anchorName: "four",
        title: "底部内容",
      },
      {
        anchorName: "five",
        title: "Empty 属性",
      },
      {
        anchorName: "six",
        title: "Empty 插槽",
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
    let emptyAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "ima",
        explain: "图片地址",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "imageSize",
        explain: "图片大小",
        type: "number",
        optional: "--",
        default: "200",
      },
      {
        property: "description",
        explain: "描述",
        type: "string",
        optional: "--",
        default: "No Data",
      },
    ]);

    interface IEmptySlot {
      property: string;
      explain: string;
    }
    let emptySlot = ref<IEmptySlot[]>([
      {
        property: "default",
        explain: "自定义底部内容",
      },
      {
        property: "description",
        explain: "自定义描述",
      },
      {
        property: "image",
        explain: "自定义图片",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      emptySlot,
      emptyAttributesForm,
    };
  },
};
</script>

<style scoped>
</style>