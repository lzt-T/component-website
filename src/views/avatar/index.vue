<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Avatar 头像</h1>
      <p class="cd-public-p">
        Avatar 组件可以用来代表人物或对象， 支持使用图片，图标或者文字作为
        Avatar
      </p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        使用 <code>shape</code> 和 <code>size</code> 属性来控制
        <code>Avatar</code> 的形状和大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="45" flexWrap="wrap">
          <cd-avatar :src="githubImg" :size="60"></cd-avatar>
          <cd-avatar :src="githubImg"></cd-avatar>
          <cd-avatar :src="githubImg" :size="40"></cd-avatar>
          <cd-avatar :src="githubImg" shape="square" :size="60"></cd-avatar>
          <cd-avatar :src="githubImg" shape="square"></cd-avatar>
          <cd-avatar :src="githubImg" shape="square" :size="40"></cd-avatar>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="45" flexWrap="wrap">
      &lt;cd-avatar :src="githubImg" :size="60">&lt;/cd-avatar>
      &lt;cd-avatar :src="githubImg">&lt;/cd-avatar>
      &lt;cd-avatar :src="githubImg" :size="40">&lt;/cd-avatar>
      &lt;cd-avatar :src="githubImg" shape="square" :size="60">&lt;/cd-avatar>
      &lt;cd-avatar :src="githubImg" shape="square">&lt;/cd-avatar>
      &lt;cd-avatar :src="githubImg" shape="square" :size="40">&lt;/cd-avatar>
    &lt;/cd-row>
  &lt;/template&gt;

  &lt;script lang="ts">
  import github from "@/assets/github.png";
  import { ref } from "vue";
  export default {
    setup(){
      let githubImg = ref();
      githubImg.value = github;
        return{
          githubImg
        }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">使用Icon</h2>
      <p class="cd-public-p">
        通过设置 <code>icon</code> 属性展示图标,设置了
        <code>icon</code> 属性就不要再传入 <code>src</code> 属性,否则将会覆盖
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="45" flexWrap="wrap">
          <cd-avatar icon="usersThree"></cd-avatar>
          <cd-avatar icon="man"></cd-avatar>
          <cd-avatar icon="usersTwo"></cd-avatar>
          <cd-avatar icon="woman"></cd-avatar>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="45" flexWrap="wrap">
      &lt;cd-avatar icon="usersThree">&lt;/cd-avatar>
      &lt;cd-avatar icon="man">&lt;/cd-avatar>
      &lt;cd-avatar icon="usersTwo">&lt;/cd-avatar>
      &lt;cd-avatar icon="woman">&lt;/cd-avatar>
    &lt;/cd-row>
  &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        图片如何适应容器
      </h2>
      <p class="cd-public-p">
        当使用图片作为用户头像时，设置该图片如何在容器中展示。与 原生<code
          >object-fit</code
        >
        属性一致
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="45" flexWrap="wrap">
          <div>
            <div>fill</div>
            <cd-avatar
              fit="fill"
              :size="100"
              shape="square"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-avatar>
          </div>
          <div>
            <div>contain</div>
            <cd-avatar
              fit="contain"
              :size="100"
              shape="square"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-avatar>
          </div>
          <div>
            <div>cover</div>
            <cd-avatar
              fit="cover"
              :size="100"
              shape="square"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-avatar>
          </div>
          <div>
            <div>none</div>
            <cd-avatar
              fit="none"
              :size="100"
              shape="square"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-avatar>
          </div>
          <div>
            <div>scale-down</div>
            <cd-avatar
              fit="scale-down"
              :size="100"
              shape="square"
              src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
            ></cd-avatar>
          </div>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="45" flexWrap="wrap">
      &lt;div>
        &lt;div>fill&lt;/div>
        &lt;cd-avatar
          fit="fill"
          :size="100"
          shape="square"
          src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
        >&lt;/cd-avatar>
      &lt;/div>
      &lt;div>
        &lt;div>contain&lt;/div>
        &lt;cd-avatar
          fit="contain"
          :size="100"
          shape="square"
          src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
        >&lt;/cd-avatar>
      &lt;/div>    
      &lt;div>
        &lt;div>cover&lt;/div>
        &lt;cd-avatar
          fit="cover"
          :size="100"
          shape="square"
          src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
        >&lt;/cd-avatar>
      &lt;/div>
      &lt;div>
        &lt;div>none&lt;/div>
        &lt;cd-avatar
          fit="none"
          :size="100"
          shape="square"
          src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
        >&lt;/cd-avatar>
      &lt;/div>
      &lt;div>
        &lt;div>scale-down&lt;/div>
        &lt;cd-avatar
          fit="scale-down"
          :size="100"
          shape="square"
          src="https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg"
        >&lt;/cd-avatar>
      &lt;/div>
    &lt;/cd-row>
  &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Avatar 属性</h2>
      <cd-table
        :data="avatarAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Avatar 事件</h2>
      <cd-table
        :data="avatarEvent"
        :listName="['事件名', '说明', '参数']"
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
import github from "@/assets/github.png";
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
    // 测试
    let githubImg = ref();
    githubImg.value = github;
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
        title: "使用Icon",
      },
      {
        anchorName: "three",
        title: "图片如何适应容器",
      },
      {
        anchorName: "four",
        title: "Avatar 属性",
      },
      {
        anchorName: "five",
        title: "Avatar 事件",
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
    let avatarAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "src",
        explain: "图片头像的资源地址",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "icon",
        explain: "设置头像的图标类型,图标名",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "shape",
        explain: "设置头像的形状",
        type: "string",
        optional: "circle / square",
        default: "circle",
      },
      {
        property: "size",
        explain: "设置头像的大小",
        type: "number",
        optional: "--",
        default: "50",
      },
      {
        property: "alt",
        explain: "描述图像的替换文本",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "fit",
        explain: "当展示类型为图片的时候,设置图片如何适应容器",
        type: "string",
        optional: "fill / contain / cover / none / scale-down",
        default: "cover",
      },
    ]);

    interface IAvatarEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let avatarEvent = ref<IAvatarEvent[]>([
      {
        property: "error",
        explain: "图片类头像加载失败的回调",
        parameter: "(event: Event)",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      githubImg,
      avatarAttributesForm,
      avatarEvent,
    };
  },
};
</script>

<style scoped>
</style>