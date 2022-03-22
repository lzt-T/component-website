<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Input Number 数字输入框</h1>
      <p class="cd-public-p">仅允许输入标准的数字值，可定义范围</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        要使用它，只需要在 &lt;el-input-number> 元素中使用 v-model
        绑定变量即可，变量的初始值即为默认值。
      </p>
      <div class="cd-public-div-frame">
        <cd-input-number
          :min="1"
          :max="10"
          v-model="inputNumberData"
        ></cd-input-number>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-input-number
      :min="1"
      :max="10"
      v-model="inputNumberData"
    >&lt;/cd-input-number>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let inputNumberData = ref&lt;number>(1);
      return{
        inputNumberData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">
        <code>disabled</code> 属性接受一个 <code>Boolean</code>,设置为
        <code>true</code> 即可禁用整个组件
      </p>
      <div class="cd-public-div-frame">
        <cd-input-number
          v-model="inputNumberDisabledData"
          disabled
        ></cd-input-number>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-input-number
      v-model="inputNumberDisabledData"
      disabled
    >&lt;/cd-input-number>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let inputNumberDisabledData = ref&lt;number>(1);
      return{
        inputNumberDisabledData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">步进</h2>
      <cd-alter
        type="warning"
        title="步进的实际长度是根据 step*precision，step最好是一个非负数的整数"
        showIcon
        :closable="false"
      ></cd-alter>
      <p class="cd-public-p">允许定义递增递减的步进控制</p>
      <p class="cd-public-p">设置 <code>step</code> 属性可以控制步长,默认为1</p>
      <div class="cd-public-div-frame">
        <cd-input-number
          v-model="inputNumberStepData"
          :step="3"
        ></cd-input-number>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-input-number
      v-model="inputNumberStepData"
      :step="3"
    >&lt;/cd-input-number>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let inputNumberStepData = ref&lt;number>(1);
      return{
        inputNumberStepData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">精度</h2>
      <cd-alter
        type="warning"
        title="对精度的解释为保留小数点后几位，如0.1保留小数点后一位，并且会四舍五入"
        showIcon
        :closable="false"
      ></cd-alter>
      <p class="cd-public-p">
        设置 <code>precision</code> 属性可以控制数值精度，接收一个
        <code>Number</code>
      </p>
      <div class="cd-public-div-frame">
        <cd-input-number
          v-model="inputNumberPrecisionData"
          :precision="0.01"
        ></cd-input-number>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-input-number
      v-model="inputNumberPrecisionData"
      :precision="0.01"
    >&lt;/cd-input-number>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let inputNumberPrecisionData = ref&lt;number>(1);
      return{
        inputNumberPrecisionData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        不同的输入框尺寸
      </h2>
      <p class="cd-public-p">
        通过 <code>height</code>、<code>width</code> 属性可以控制组件大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input-number
            v-model="inputNumberSize"
            :height="38"
            :width="180"
          ></cd-input-number>
          <cd-input-number v-model="inputNumberSizeOne"></cd-input-number>
          <cd-input-number
            v-model="inputNumberSizeTwo"
            :height="26"
            :width="120"
          ></cd-input-number>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="20" flexWrap="wrap">
      &lt;cd-input-number
        v-model="inputNumberSize"
        :height="38"
        :width="180"
      >&lt;/cd-input-number>
      &lt;cd-input-number v-model="inputNumberSizeOne">&lt;/cd-input-number>
      &lt;cd-input-number
        v-model="inputNumberSizeTwo"
        :height="26"
        :width="120"
      >&lt;/cd-input-number>
    &lt;/cd-row>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let inputNumberSize = ref&lt;number>(1);
      let inputNumberSizeOne = ref&lt;number>(1);
      let inputNumberSizeTwo = ref&lt;number>(1);
      return{
        inputNumberSize,
        inputNumberSizeOne,
        inputNumberSizeTwo
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">
        Input Number 属性
      </h2>
      <cd-table
        :data="inputNumberAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">
        Input Number 事件
      </h2>
      <cd-table
        :data="inputNumberEvent"
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
    let inputNumberData = ref<number>(1);
    let inputNumberDisabledData = ref<number>(1);
    let inputNumberStepData = ref<number>(1);
    let inputNumberPrecisionData = ref<number>(1);
    let inputNumberSize = ref<number>(1);
    let inputNumberSizeOne = ref<number>(1);
    let inputNumberSizeTwo = ref<number>(1);
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
        title: "步进",
      },
      {
        anchorName: "four",
        title: "精度",
      },
      {
        anchorName: "five",
        title: "不同的输入框尺寸",
      },
      {
        anchorName: "six",
        title: "Input Number 属性",
      },
      {
        anchorName: "seven",
        title: "Input Number 事件",
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
    let inputNumberAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "选中项绑定值，必传",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "height",
        explain: "高度,最小值为24",
        type: "number",
        optional: "--",
        default: "32",
      },
      {
        property: "width",
        explain: "宽度,最小值为120",
        type: "number",
        optional: "--",
        default: "150",
      },
      {
        property: "min",
        explain: "设置计数器允许的最小值",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "max",
        explain: "设置计数器允许的最大值",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "step",
        explain: "计数器步长",
        type: "number",
        optional: "--",
        default: "1",
      },
      {
        property: "precision",
        explain: "数值精度，保留小数点后几位",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "disabled",
        explain: "是否禁用计数器",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "placeholder",
        explain: "输入框默认 placeholder",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "name",
        explain: "表单原生属性name",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);

    interface IInputNumberEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let inputNumberEvent = ref<IInputNumberEvent[]>([
      {
        property: "focus",
        explain: "在 Input 获得焦点时触发",
        parameter: "(event: Event)",
      },
      {
        property: "blur",
        explain: "在 Input 失去焦点时触发",
        parameter: "(event: Event)",
      },
      {
        property: "change",
        explain: "绑定值被改变时触发",
        parameter: "(value: number)",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      inputNumberData,
      inputNumberDisabledData,
      inputNumberStepData,
      inputNumberPrecisionData,
      inputNumberSize,
      inputNumberSizeOne,
      inputNumberSizeTwo,
      inputNumberAttributesForm,
      inputNumberEvent,
    };
  },
};
</script>

<style lang="scss">
</style>