<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Backtop 回到顶部</h1>
      <p class="cd-public-p">点击按钮返回到顶部</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        通过 <code>visibilityHeight</code> 属性,设置页面滚动多少显示回到顶部
      </p>
      <p class="cd-public-p">
        通过 <code>right</code>、<code>bottom</code> 属性,可以确定出现按钮位置
      </p>
      <div class="cd-public-div-frame">
        <p class="cd-public-p">滚动页面，看右下方的按钮</p>
        <cd-backtop :visibilityHeight="100">
          <div class="cd-website-backtop-totop">Back to top</div>
        </cd-backtop>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-backtop :visibilityHeight="100">
          &lt;div class="cd-website-backtop-totop">Back to top&lt;/div>
        &lt;/cd-backtop>
    &lt;/template&gt;

    &lt;style scoped>
    .cd-website-backtop-totop {
    color: #409eff;
    font-size: 14px;
    cursor: pointer;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">Backtop 属性</h2>
      <cd-table
        :data="backtopAttributesForm"
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
        title: "Backtop 属性",
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
    let backtopAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "visibilityHeight",
        explain: "页面滚动到什么位置出现按钮",
        type: "number",
        optional: "--",
        default: "200",
      },
      {
        property: "right",
        explain: "距离页面右边的位置",
        type: "number",
        optional: "--",
        default: "40",
      },
      {
        property: "bottom",
        explain: "距离页面下面的位置",
        type: "number",
        optional: "--",
        default: "40",
      },
    ]);

    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      backtopAttributesForm,
    };
  },
};
</script>

<style scoped>
.cd-website-backtop-totop {
  color: #409eff;
  font-size: 14px;
  cursor: pointer;
}
</style>