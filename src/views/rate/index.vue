<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Rate 评分</h1>
      <p class="cd-public-p">用于评分</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。
        三个等级所对应的颜色用
        <code>colors</code> 属性设置，而它们对应的两个阈值则通过
        <code>lowThreshold</code> 和 <code>highThreshold</code> 设定。
      </p>
      <div class="cd-public-div-frame">
        <cd-row gap="100" flexWrap="wrap" align="center">
          <div><cd-rate v-model="rateData"></cd-rate> Default</div>
          <div>
            <cd-rate v-model="rateData1"></cd-rate> Color for different levels
          </div>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row gap="100" flexWrap="wrap" align="center">
      &lt;div>&lt;cd-rate v-model="rateData">&lt;/cd-rate> Default&lt;/div>
      &lt;div>
        &lt;cd-rate v-model="rateData1">&lt;/cd-rate> Color for different levels
      &lt;/div>
    &lt;/cd-row>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let rateData = ref&lt;number>(0);
      let rateData1 = ref&lt;number>(3);
      const colors = ref&lt;string[]>(["#99A9BF", "#F7BA2A", "#FF9900"]);
      return{
        rateData,
        rateData1,
        colors
      }
    }
  }
  &lt;/script>       
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">尺寸</h2>
      <div class="cd-public-div-frame">
        <cd-rate v-model="rateSize" :height="38"></cd-rate>
        <cd-rate v-model="rateSize1"></cd-rate>
        <cd-rate v-model="rateSize2" :height="24"></cd-rate>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-rate v-model="rateSize" :height="38">&lt;/cd-rate>
    &lt;cd-rate v-model="rateSize1">&lt;/cd-rate>
    &lt;cd-rate v-model="rateSize2" :height="24">&lt;/cd-rate>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let rateSize = ref&lt;number>(1);
      let rateSize1 = ref&lt;number>(1);
      let rateSize2 = ref&lt;number>(1);
      return{
        rateSize,
        rateSize1,
        rateSize2
      }
    }
  }
  &lt;/script>       
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">显示分数</h2>
      <p>设置 <code>showScore</code> 属性为 <code>teur</code> 来显示分数</p>
      <div class="cd-public-div-frame">
        <cd-rate v-model="rateShowScore" showScore></cd-rate>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-rate v-model="rateShowScore" showScore>&lt;/cd-rate>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let rateShowScore = ref&lt;number>(1);
      return{
       rateShowScore
      }
    }
  }
  &lt;/script>       
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">其他icon</h2>
      <p>设置 <code>iconName</code> 来显示不同的图案</p>
      <div class="cd-public-div-frame">
        <cd-rate v-model="rateIconName" iconName="bell"></cd-rate>
        <cd-rate v-model="rateIconName1"></cd-rate>
        <cd-rate v-model="rateIconName2" iconName="send"></cd-rate>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-rate v-model="rateIconName" iconName="bell">&lt;/cd-rate>
    &lt;cd-rate v-model="rateIconName1">&lt;/cd-rate>
    &lt;cd-rate v-model="rateIconName2" iconName="send">&lt;/cd-rate>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let rateIconName = ref&lt;number>(1);
      let rateIconName1 = ref&lt;number>(1);
      let rateIconName2 = ref&lt;number>(1);
      return{
       rateIconName,
       rateIconName1,
       rateIconName2
      }
    }
  }
  &lt;/script>       
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Rate 属性</h2>
      <cd-table
        :data="rateAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Rate 事件</h2>
      <cd-table
        :data="rateEvent"
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
    //   测试
    let rateData = ref<number>(0);
    let rateData1 = ref<number>(3);
    const colors = ref<string[]>(["#99A9BF", "#F7BA2A", "#FF9900"]);
    let rateSize = ref<number>(1);
    let rateSize1 = ref<number>(1);
    let rateSize2 = ref<number>(1);
    let rateShowScore = ref<number>(1);
    let rateIconName = ref<number>(1);
    let rateIconName1 = ref<number>(1);
    let rateIconName2 = ref<number>(1);
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
        title: "尺寸",
      },
      {
        anchorName: "three",
        title: "显示分数",
      },
      {
        anchorName: "four",
        title: "其他icon",
      },
      {
        anchorName: "five",
        title: "Rate 属性",
      },
      {
        anchorName: "six",
        title: "Rate 事件",
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
    let rateAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "选中项绑定值",
        type: "number",
        optional: "--",
        default: "0",
      },
      {
        property: "max",
        explain: "最大分值",
        type: "number",
        optional: "--",
        default: "5",
      },
      {
        property: "height",
        explain: "高度,最小值为24",
        type: "number",
        optional: "--",
        default: "32",
      },
      {
        property: "disabled",
        explain: "是否处于禁用状态",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "lowThreshold",
        explain: "低分和中等分数的界限值， 值本身被划分在低分中",
        type: "number",
        optional: "--",
        default: "2",
      },
      {
        property: "highThreshold",
        explain: "高分和中等分数的界限值， 值本身被划分在高分中",
        type: "number",
        optional: "--",
        default: "4",
      },
      {
        property: "colors",
        explain:
          "icon 的颜色。 传入数组，共有 3 个元素，为 3 个分段所对应的颜色；",
        type: "array",
        optional: "--",
        default: "['#F7BA2A', '#F7BA2A', '#F7BA2A']",
      },
      {
        property: "voidColor",
        explain: "未选中 icon 的颜色",
        type: "string",
        optional: "--",
        default: "#C6D1DE",
      },
      {
        property: "showScore",
        explain: "是否显示当前分数",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "textColor",
        explain: "辅助文字的颜色",
        type: "string",
        optional: "--",
        default: "#1F2D3D",
      },
      {
        property: "iconName",
        explain: "rate使用的图标",
        type: "string",
        optional: "--",
        default: "star",
      },
    ]);

    interface IRateEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let rateEvent = ref<IRateEvent[]>([
      {
        property: "change",
        explain: "分值改变时触发",
        parameter: "(value: number)",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      rateData,
      rateData1,
      colors,
      rateSize,
      rateSize1,
      rateSize2,
      rateShowScore,
      rateIconName,
      rateIconName1,
      rateIconName2,
      rateAttributesForm,
      rateEvent,
    };
  },
};
</script>

<style scoped>
</style>