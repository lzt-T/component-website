<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Upload 上传</h1>
      <cd-alter
        type="warning"
        title="upload 组件上传成功后会有 √ 的标志,没有出现则是上传失败,本组件使用 FormData、XMLHttpRequest 上传"
        showIcon
        :closable="false"
      ></cd-alter>
      <p class="cd-public-p">通过点击或拖放上传文件</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">可通过设置 limit 来限制上传文件的个数</p>
      <div class="cd-public-div-frame">
        <cd-upload
          action="http://cd.hewkq.top:3300/upload"
          :limit="4"
        ></cd-upload>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-upload action="http://cd.hewkq.top:3300/upload" :limit="4">&lt;/cd-upload>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">手动上传</h2>
      <p class="cd-public-p">
        通过设置 <code>autoUpload</code> 为<code>false</code> 实现手动上传
      </p>
      <p class="cd-public-p">未上传的文件后面会显示 <code> ! </code></p>
      <div class="cd-public-div-frame">
        <cd-upload
          action="http://cd.hewkq.top:3300/upload"
          :limit="4"
          :autoUpload="false"
        ></cd-upload>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-upload
          action="http://cd.hewkq.top:3300/upload"
          :limit="4"
          :autoUpload="false"
        >&lt;/cd-upload>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        以图片形式显示
      </h2>
      <cd-alter
        type="warning"
        title="要通过 height、width 属性重新设定宽高,否者将会使用 240*32 的默认宽高"
        showIcon
        :closable="false"
      ></cd-alter>
      <p class="cd-public-p">
        通过设置 <code>type</code> 为<code>picture</code>,也可以通过设置
        <code>autoUpload</code> 为<code>false</code> 实现手动上传
      </p>
      <div class="cd-public-div-frame">
        <cd-upload
          action="http://cd.hewkq.top:3300/upload"
          type="picture"
          :height="200"
          :width="200"
        ></cd-upload>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-upload
          action="http://cd.hewkq.top:3300/upload"
          type="picture"
          :height="200"
          :width="200"
        >&lt;/cd-upload>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Upload 属性</h2>
      <cd-table
        :data="uploadAttributesForm"
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
        title: "手动上传",
      },
      {
        anchorName: "three",
        title: "以图片形式显示",
      },
      {
        anchorName: "four",
        title: "Upload 属性",
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
    let uploadAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "type",
        explain: "上传的文件是以列表的形式还是图片是形式显示",
        type: "string",
        optional: "list/picture",
        default: "list",
      },
      {
        property: "height",
        explain: "高度,最小为24",
        type: "number",
        optional: "--",
        default: "32",
      },
      {
        property: "width",
        explain: "宽度,最下为120",
        type: "number",
        optional: "--",
        default: "240",
      },
      {
        property: "action",
        explain: "请求的路径",
        type: "string",
        optional: "--",
        default: "http://127.0.0.1:3300/upload",
      },
      {
        property: "method",
        explain: "请求的方式",
        type: "string",
        optional: "--",
        default: "POST",
      },
      {
        property: "showFileList",
        explain: "是否显示上传文件列表",
        type: "boolean",
        optional: "true/false",
        default: "true",
      },
      {
        property: "multiple",
        explain: "是否支持多文件上传",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "autoUpload",
        explain: "是否自动上传",
        type: "boolean",
        optional: "true/false",
        default: "true",
      },
      {
        property: "limit",
        explain: "限制文件上传个数",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "selectText",
        explain: "文件上传提示",
        type: "string",
        optional: "--",
        default: "Select File",
      },
      {
        property: "manualUploadText",
        explain: "手动上传文件按钮提示",
        type: "string",
        optional: "--",
        default: "upload to server",
      },
      {
        property: "beforeUpload",
        explain: "上传前执行的函数,返回值为true则上传,反之则不上传",
        type: "function",
        optional: "--",
        default: " () => { return true}",
      },
      {
        property: "onRemove",
        explain:
          "文件删除时执行的函数,返回两个参数一个是当前删除文件的file对象,另一个是全部的file对象数组",
        type: "function",
        optional: "--",
        default: "--",
      },
      {
        property: "onerror",
        explain:
          "文件上传失败时执行的函数,返回两个参数一个是当前上传文件的file对象数组,另一个是全部的file对象数组",
        type: "function",
        optional: "--",
        default: "--",
      },
      {
        property: "onSuccess",
        explain:
          "文件成功失败时执行的函数,返回两个参数一个是当前上传文件的file对象数组,另一个是全部的file对象数组",
        type: "function",
        optional: "--",
        default: "--",
      },
      {
        property: "onPropgress",
        explain:
          "文件上传时执行的函数,返回两个参数一个是当前上传文件的file对象数组,另一个是全部的file对象数组",
        type: "function",
        optional: "--",
        default: "--",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      uploadAttributesForm,
    };
  },
};
</script>

<style>
</style>