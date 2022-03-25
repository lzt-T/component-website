<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Badge 徽章</h1>
      <p class="cd-public-p">按钮和图标上的数字或状态标记</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        通过设置 <code>value</code> 来调整标记所展示的内容，支持
        <code>number</code> or <code>string</code> 作为参数
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-badge :value="100">
            <cd-button :width="120">Carpediem</cd-button>
          </cd-badge>
          <cd-badge :value="12">
            <cd-button :width="120">Carpediem</cd-button>
          </cd-badge>
          <cd-badge :value="2">
            <cd-button :width="120">Carpediem</cd-button>
          </cd-badge>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="20" flexWrap="wrap">
      &lt;cd-badge :value="100">
        &lt;cd-button :width="120">Carpediem&lt;/cd-button>
      &lt;/cd-badge>
    &lt;cd-badge :value="12">
        &lt;cd-button :width="120">Carpediem&lt;/cd-button>
      &lt;/cd-badge>
      &lt;cd-badge :value="2">
        &lt;cd-button :width="120">Carpediem&lt;/cd-button>
      &lt;/cd-badge>
    &lt;/cd-row>
  &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">最大值</h2>
      <p class="cd-public-p">你还可以自定义最大值</p>
      <p class="cd-public-p">
        由 <code>max</code> 属性定义,它接受一个 <code>number</code>,
        要注意的是，该值当且仅当在 <code>value</code> 的值也是
        <code>number</code> 时生效。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-badge :value="100" :max="99">
            <cd-button :width="120">Carpediem</cd-button>
          </cd-badge>
          <cd-badge :value="12" :max="10">
            <cd-button :width="120">Carpediem</cd-button>
          </cd-badge>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="20" flexWrap="wrap">
      &lt;cd-badge :value="100" :max="99">
        &lt;cd-button :width="120">Carpediem&lt;/cd-button>
      &lt;/cd-badge>
      &lt;cd-badge :value="12" :max="10">
        &lt;cd-button :width="120">Carpediem&lt;/cd-button>
      &lt;/cd-badge>
    &lt;/cd-row>
  &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        自定义显示内容
      </h2>
      <p class="cd-public-p">你也可以展示除数字以外你想要展示的任何值</p>
      <p class="cd-public-p">
        当 <code>value</code> 是一个
        <code>string</code> 类型当时候，你可以展示任何你想展示的内容
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-badge :value="'new'">
            <cd-button :width="120">Carpediem</cd-button>
          </cd-badge>
          <cd-badge :value="'hot'">
            <cd-button :width="120">Carpediem</cd-button>
          </cd-badge>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="20" flexWrap="wrap">
      &lt;cd-badge :value="'new'">
        &lt;cd-button :width="120">Carpediem&lt;/cd-button>
      &lt;/cd-badge>
      &lt;cd-badge :value="'hot'">
        &lt;cd-button :width="120">Carpediem&lt;/cd-button>
      &lt;/cd-badge>
    &lt;/cd-row>
  &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">小红点</h2>
      <p class="cd-public-p">通过一个小红点标记来告知用户有新内容</p>
      <p class="cd-public-p">
        除了数字外，设置 <code>isDot</code> 属性 ,它接受一个
        <code>boolean</code> 类型作为参数。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-badge isDot> query </cd-badge>
          <cd-badge isDot>
            <cd-icon name="more"></cd-icon>
          </cd-badge>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    <cd-row :gap="30" flexWrap="wrap">
      <cd-badge isDot> query </cd-badge>
      <cd-badge isDot>
        <cd-icon name="more"></cd-icon>
      </cd-badge>
    </cd-row>
  &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Badge 属性</h2>
      <cd-table
        :data="badgekAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Badge 插槽</h2>
      <cd-table :data="badgeSlot" :listName="['插槽名', '说明']"></cd-table>
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
        title: "最大值",
      },
      {
        anchorName: "three",
        title: "自定义显示内容",
      },
      {
        anchorName: "four",
        title: "小红点",
      },
      {
        anchorName: "five",
        title: "Badge 属性",
      },
      {
        anchorName: "six",
        title: "Badge 插槽",
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
    let badgekAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "value",
        explain: "显示值",
        type: "string / number",
        optional: "--",
        default: "--",
      },
      {
        property: "max",
        explain:
          "最大值，超过最大值会显示 '{max}+'， 当且仅当 value 是 Number 类型",
        type: "number",
        optional: "--",
        default: "99",
      },
      {
        property: "isDot	",
        explain: "小圆点",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "hidden",
        explain: "隐藏 badge",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "backgroundColor",
        explain: "badge 的背景色",
        type: "string",
        optional: "--",
        default: "#f06a61",
      },
    ]);

    interface IBadgeSlot {
      property: string;
      explain: string;
    }
    let badgeSlot = ref<IBadgeSlot[]>([
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
      badgekAttributesForm,
      badgeSlot,
    };
  },
};
</script>

<style>
</style>