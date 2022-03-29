<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Image 图片</h1>
      <p class="cd-public-p">
        图片容器，在保留所有原生 img
        的特性下，支持懒加载，自定义占位、加载失败等
      </p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        可通过fit确定图片如何适应到容器框,同原生 object-fit。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="45" flexWrap="wrap">
          <cd-col :span="5">
            <div>fill</div>
            <cd-image
              fit="fill"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-image>
          </cd-col>
          <cd-col :span="5">
            <div>contain</div>
            <cd-image
              fit="contain"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-image>
          </cd-col>
          <cd-col :span="5">
            <div>cover</div>
            <cd-image
              fit="cover"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-image>
          </cd-col>
          <cd-col :span="5">
            <div>none</div>
            <cd-image
              fit="none"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-image>
          </cd-col>
          <cd-col :span="5">
            <div>scale-down</div>
            <cd-image
              fit="scale-down"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-image>
          </cd-col>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="45" flexWrap="wrap">
          &lt;cd-col :span="5">
            &lt;div>fill&lt;/div>
            &lt;cd-image
              fit="fill"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            >&lt;/cd-image>
          &lt;/cd-col>
          &lt;cd-col :span="5">
            &lt;div>contain&lt;/div>
            &lt;cd-image
              fit="contain"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            >&lt;/cd-image>
          &lt;/cd-col>
          &lt;cd-col :span="5">
            &lt;div>cover&lt;/div>
            &lt;cd-image
              fit="cover"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            >&lt;/cd-image>
          &lt;/cd-col>
          &lt;cd-col :span="5">
            &lt;div>none&lt;/div>
            &lt;cd-image
              fit="none"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            >&lt;/cd-image>
          &lt;/cd-col>
          &lt;cd-col :span="5">
            &lt;div>scale-down&lt;/div>
            &lt;cd-image
              fit="scale-down"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            >&lt;/cd-image>
          &lt;/cd-col>
        &lt;/cd-row>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">加载失败</h2>
      <p class="cd-public-p">
        可通过 <code>slot = err</code> 可自定义加载失败内容
      </p>
      <div class="cd-public-div-frame">
        <div>Default</div>
        <cd-image src="https://cdn.jsdelivr.net/gh/lztnb/img@maste/4.jpg">
        </cd-image>
        <br />
        <br />
        <div>Custom</div>
        <cd-image src="https://cdn.jsdelivr.net/gh/lztnb/img@maste/4.jpg">
          <template v-slot:err>
            <div class="cd-website-image-errslot">
              <cd-icon name="pictureTwo" :size="70" color="#a8abb2"></cd-icon>
            </div>
          </template>
        </cd-image>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;div>Default&lt;/div>
        &lt;cd-image src="https://cdn.jsdelivr.net/gh/lztnb/img@maste/4.jpg">
        &lt;/cd-image>
        &lt;br />
        &lt;br />
        &lt;div>Custom&lt;/div>
        &lt;cd-image src="https://cdn.jsdelivr.net/gh/lztnb/img@maste/4.jpg">
          &lt;template v-slot:err>
            &lt;div class="cd-website-image-errslot">
              &lt;cd-icon name="pictureTwo" :size="70" color="#a8abb2">&lt;/cd-icon>
            &lt;/div>
          &lt;/template>
        &lt;/cd-image>
    &lt;/template&gt;

    &lt;style scoped>
    .cd-website-image-errslot {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: #f5f7fa;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">懒加载</h2>
      <p class="cd-public-p">
        可通过
        <code>lazy</code> 开启懒加载功能，,当图片滚动到可视范围内才会加载。
        最近一个 <code>overflow</code> 值为 <code>auto</code> 或
        <code>scroll</code> 的父元素。
      </p>
      <div class="cd-public-div-frame">
        <div class="cd-website-image-lazy">
          <cd-image
            src="https://cdn.jsdelivr.net/gh/lztnb/img@master/5.jpg"
            lazy
            fit="cover"
          >
          </cd-image>
          <br />
          <cd-image
            src="https://cdn.jsdelivr.net/gh/lztnb/img@master/6.jpg"
            lazy
            fit="cover"
          >
          </cd-image>
          <br />
          <cd-image
            src="https://cdn.jsdelivr.net/gh/lztnb/img@master/7.jpg"
            lazy
            fit="cover"
          >
          </cd-image>
        </div>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;div class="cd-website-image-lazy">
        &lt;cd-image
            src="https://cdn.jsdelivr.net/gh/lztnb/img@master/5.jpg"
            lazy
            fit="cover"
        >
        &lt;/cd-image>
        &lt;br />
        &lt;cd-image
            src="https://cdn.jsdelivr.net/gh/lztnb/img@master/6.jpg"
            lazy
            fit="cover"
        >
        &lt;/cd-image>
        &lt;br />
        &lt;cd-image
            src="https://cdn.jsdelivr.net/gh/lztnb/img@master/7.jpg"
            lazy
            fit="cover"
        >
        &lt;/cd-image>
    &lt;/div>
  &lt;/template&gt;

    &lt;style scoped>
    .cd-website-image-lazy {
    height: 380px;
    overflow: auto;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">图片预览</h2>
      <p class="cd-public-p">
        可通过 <code>previewSrcList</code> 开启预览大图的功能。 你可以通过
        <code>initialIndex</code> 初始化第一张预览图片的位置。 默认初始位置为
        0。
      </p>
      <div class="cd-public-div-frame">
        <cd-image
          src="https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg"
          :previewSrcList="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
          :initialIndex="2"
        >
        </cd-image>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-image
          src="https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg"
          :previewSrcList="[
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/1.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
            'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
          ]"
          :initialIndex="2"
        >
        &lt;/cd-image>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Image 属性</h2>
      <cd-table
        :data="imageAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Image 插槽</h2>
      <cd-table :data="imageSlot" :listName="['插槽名', '说明']"></cd-table>
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
        title: "加载失败",
      },
      {
        anchorName: "three",
        title: "懒加载",
      },
      {
        anchorName: "four",
        title: "图片预览",
      },
      {
        anchorName: "five",
        title: "Image 属性",
      },
      {
        anchorName: "six",
        title: "Image 插槽",
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
    let imageAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "alt",
        explain: "原生 alt",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "fit",
        explain: "确定图片如何适应容器框，同原生 object-fit",
        type: "string",
        optional: "fill / contain / cover / none / scale-down",
        default: "fill",
      },
      {
        property: "hideOnClickModal",
        explain: "当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "initialIndex",
        explain: "初始预览图像索引",
        type: "number",
        optional: "--",
        default: "0",
      },
      {
        property: "previewSrcList",
        explain: "开启图片预览功能,图片资源数组",
        type: "Array",
        optional: "--",
        default: "--",
      },
      {
        property: "src",
        explain: "图片源，同原生属性一致,必传",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);

    interface IImageSlot {
      property: string;
      explain: string;
    }
    let imageSlot = ref<IImageSlot[]>([
      {
        property: "err",
        explain: "加载失败的内容",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      imageAttributesForm,
      imageSlot,
    };
  },
};
</script>

<style scoped>
.cd-website-image-errslot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #f5f7fa;
}
.cd-website-image-lazy {
  height: 380px;
  overflow: auto;
}
</style>