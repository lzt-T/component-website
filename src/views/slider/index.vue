<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Slider 滑块</h1>
      <p class="cd-public-p">通过拖动滑块在一个固定区间内进行选择</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">在拖动滑块时，显示当前值</p>
      <p class="cd-public-p">通过设置绑定值自定义滑块的初始值</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="40" flexWrap="wrap">
          <cd-slider v-model="slider"></cd-slider>
          <p>Default</p>
        </cd-row>
        <cd-row :gap="40" flexWrap="wrap">
          <cd-slider v-model="slider1" :max="10"></cd-slider>
          <p>Set Max</p>
        </cd-row>
        <cd-row :gap="40" flexWrap="wrap">
          <cd-slider v-model="slider2" disabled></cd-slider>
          <p>Disabled</p>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="40" flexWrap="wrap">
            &lt;cd-slider v-model="slider">&lt;/cd-slider>
            &lt;p>Default&lt;/p>
        &lt;/cd-row>
        &lt;cd-row :gap="40" flexWrap="wrap">
            &lt;cd-slider v-model="slider1" :max="10">&lt;/cd-slider>
            &lt;p>Set Max&lt;/p>
        &lt;/cd-row>
        &lt;cd-row :gap="40" flexWrap="wrap">
            &lt;cd-slider v-model="slider2" disabled>&lt;/cd-slider>
            &lt;p>Disabled&lt;/p>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let slider = ref&lt;number>(0);
            let slider1 = ref&lt;number>(0);
            let slider2 = ref&lt;number>(0);
            return{
                slider,
                slider1,
                slider2
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">离散值</h2>
      <p class="cd-public-p">设置 <code>step</code> 属性,来确定几步走完</p>
      <p class="cd-public-p">
        改变 <code>step</code> 的值可以改变步长， 通过设置
        <code>showStops</code> 属性可以显示间断点
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="40" flexWrap="wrap">
          <cd-slider v-model="slider3" :step="10"></cd-slider>
          <p>Breakpoints not displayed</p>
        </cd-row>
        <cd-row :gap="40" flexWrap="wrap">
          <cd-slider v-model="slider4" :step="10" showStops></cd-slider>
          <p>Breakpoints displayed</p>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="40" flexWrap="wrap">
          &lt;cd-slider v-model="slider3" :step="10">&lt;/cd-slider>
          &lt;p>Breakpoints not displayed&lt;/p>
        &lt;/cd-row>
        &lt;cd-row :gap="40" flexWrap="wrap">
          &lt;cd-slider v-model="slider4" :step="10" showStops>&lt;/cd-slider>
          &lt;p>Breakpoints displayed&lt;/p>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let slider3 = ref&lt;number>(0);
            let slider4 = ref&lt;number>(0);
            return{
                slider3,
                slider4
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">尺寸</h2>
      <p class="cd-public-p">
        通过设置 <code>height</code>、<code>width</code> 属性来控制尺寸
      </p>
      <div class="cd-public-div-frame">
        <cd-slider v-model="slider5" :height="38" :width="320"></cd-slider>
        <cd-slider v-model="slider6"></cd-slider>
        <cd-slider v-model="slider7" :height="26" :width="200"></cd-slider>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
         &lt;cd-slider v-model="slider5" :height="38" :width="320"> &lt;/cd-slider>
         &lt;cd-slider v-model="slider6"> &lt;/cd-slider>
         &lt;cd-slider v-model="slider7" :height="26" :width="200"> &lt;/cd-slider>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let slider5 = ref&lt;number>(0);
            let slider6 = ref&lt;number>(0);
            let slider7 = ref&lt;number>(0);
            return{
                slider5,
                slider6,
                slider7
            }
        }
    }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">显示标记</h2>
      <p class="cd-public-p">
        设置 <code>marks</code> 属性可以在滑块上显示标记。
      </p>
      <div class="cd-public-div-frame">
        <cd-slider v-model="slider8" :width="360" :marks="marks"></cd-slider>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
     &lt;cd-slider v-model="slider8" :width="360" :marks="marks">&lt;/cd-slider>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref,reactive } from "vue";
  export default {
    setup(){
      let slider8 = ref&lt;number>(0);
      let marks = reactive({
        0: "0°C",
        8: "8°C",
        37: "37°C",
      });
        return{
          slider8,
          marks
        }
      }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Slider 属性</h2>
      <cd-table
        :data="sliderAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Slider 事件</h2>
      <cd-table
        :data="sliderEvent"
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
import { reactive, ref } from "vue";
import useRightNavShow from "@/hooks/useRightNavShow";
import useCurrentAbchor from "@/hooks/useCurrentAnchor";
import rightNav from "@/components/rightNav/inidex.vue";
export default {
  components: {
    rightNav,
  },
  setup() {
    //   测试
    let slider = ref<number>(0);
    let slider1 = ref<number>(0);
    let slider2 = ref<number>(0);
    let slider3 = ref<number>(0);
    let slider4 = ref<number>(0);
    let slider5 = ref<number>(0);
    let slider6 = ref<number>(0);
    let slider7 = ref<number>(0);
    let slider8 = ref<number>(0);
    let marks = reactive({
      0: "0°C",
      8: "8°C",
      37: "37°C",
    });
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
        title: "离散值",
      },
      {
        anchorName: "three",
        title: "尺寸",
      },
      {
        anchorName: "four",
        title: "显示标记",
      },
      {
        anchorName: "five",
        title: "Slider 属性",
      },
      {
        anchorName: "six",
        title: "Slider 事件",
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
    let sliderAttributesForm = ref<Iattributesfrom[]>([
      {
        property: " v-model	",
        explain: "选中项绑定值",
        type: "number",
        optional: "--",
        default: "0",
      },
      {
        property: "height",
        explain: "高度,最下值为24",
        type: "number",
        optional: "--",
        default: "32",
      },
      {
        property: "width",
        explain: "宽度,最小值为160",
        type: "number",
        optional: "--",
        default: "240",
      },
      {
        property: "disabled",
        explain: "是否处于禁用状态",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "step",
        explain: "步长",
        type: "number",
        optional: "--",
        default: "1",
      },
      {
        property: "max",
        explain: "最大值",
        type: "number",
        optional: "--",
        default: "100",
      },
      {
        property: "showStops",
        explain: "是否显示间断点",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "marks",
        explain: "标记文字,格式如{1:'A',20:'B'}",
        type: "object",
        optional: "--",
        default: "--",
      },
    ]);
    interface ISliderEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let sliderEvent = ref<ISliderEvent[]>([
      {
        property: "change",
        explain: "值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）",
        parameter: "(value: number)",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      slider,
      slider1,
      slider2,
      slider3,
      slider4,
      slider5,
      slider6,
      slider7,
      slider8,
      marks,
      sliderAttributesForm,
      sliderEvent,
    };
  },
};
</script>

<style>
</style>