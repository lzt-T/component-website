<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">DatePicker 日期选择器</h1>
      <p class="cd-public-p">用于选择或输入日期</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">选择某一天</h2>
      <p class="cd-public-p">以”日“为基本单位，基础的日期选择控件</p>
      <div class="cd-public-div-frame">
        <cd-date-picker v-model="dateData"></cd-date-picker>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-date-picker v-model="dateData">&lt;/cd-date-picker>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let dateData = ref&lt;string>("");
        return{
          dateData
        }
      }
    }
    &lt;/script>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">选择一段时间</h2>
      <p class="cd-public-p">
        设定 <code>type</code> 为 <code>daterange</code>
      </p>
      <p class="cd-public-p">可在一个选择器中便捷地选择一个时间范围</p>
      <div class="cd-public-div-frame">
        <cd-date-picker v-model="dateData" type="daterange"></cd-date-picker>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-date-picker v-model="dateData" type="daterange">&lt;/cd-date-picker>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let dateData = ref&lt;string>("");
        return{
          dateData
        }
      }
    }
    &lt;/script>
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        DatePicker 属性
      </h2>
      <cd-table
        :data="datepickerAttributesForm"
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
    // 测试数据
    let dateData = ref<string>("");
    //   对于锚点的处理
    interface rightNav {
      anchorName: string;
      title: string;
    }
    let rightNavData = ref<rightNav[]>([
      {
        anchorName: "one",
        title: "选择某一天",
      },
      {
        anchorName: "two",
        title: "选择一段时间",
      },
      {
        anchorName: "three",
        title: "DatePicker 属性",
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
    let datepickerAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "日期选择结果",
        type: "string",
        optional: "--",
        default: "black",
      },
      {
        property: "type",
        explain: "设定日期选择器的类型,选择一天还是一个范围",
        type: "string",
        optional: "day/daterange",
        default: "day",
      },
      {
        property: "height",
        explain: "高度,最小为25",
        type: "number",
        optional: "--",
        default: "32",
      },
      {
        property: "width",
        explain: "宽度,最小为250",
        type: "number",
        optional: "--",
        default: "220",
      },
      {
        property: "placeholder",
        explain: "非范围选择时的占位内容",
        type: "string",
        optional: "--",
        default: "Pick a day",
      },
      {
        property: "startPlaceholder",
        explain: "范围选择时开始日期的占位内容",
        type: "string",
        optional: "--",
        default: "Start date",
      },
      {
        property: "endPlaceholder",
        explain: "范围选择时结束日期的占位内容",
        type: "string",
        optional: "--",
        default: "End date",
      },
      {
        property: "name",
        explain: "表单元素原生name属性",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      dateData,
      datepickerAttributesForm,
    };
  },
};
</script>

<style scoped>
</style>