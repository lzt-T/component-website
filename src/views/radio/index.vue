<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Radio 单选框</h1>
      <p class="cd-public-p">在一组备选项中进行单选</p>
      <cd-alter
        type="warning"
        title=" radio 组件传入v-model、name和label属性是必要的"
        showIcon
        :closable="false"
      ></cd-alter>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        单选框不应该有太多的可选项，
        如果你有很多的可选项你应该使用选择框而不是单选框
      </p>
      <p class="cd-public-p">
        要使用 <code>Radio</code> 组件，只需要设置
        <code>v-model</code>绑定变量， 选中意味着变量的值为相应 Radio
        <code>label</code>属性的值,<code>label</code>为<code>string</code>
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          <cd-radio
            v-model="radioData"
            :height="38"
            :width="130"
            name="one"
            label="option1"
            >Option1</cd-radio
          >
          <cd-radio
            v-model="radioData"
            :height="38"
            :width="130"
            name="one"
            label="option2"
            >Option2</cd-radio
          >
        </cd-row>
        <cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          <cd-radio v-model="radioOneData" name="two" label="option1"
            >Option1</cd-radio
          >
          <cd-radio v-model="radioOneData" name="two" label="option2"
            >Option2</cd-radio
          >
        </cd-row>
        <cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          <cd-radio
            v-model="radioTwoData"
            :height="30"
            :width="90"
            name="three"
            label="option1"
            disabled
            >Option1</cd-radio
          >
          <cd-radio
            v-model="radioTwoData"
            :height="30"
            :width="90"
            name="three"
            label="option2"
            disabled
            >Option2</cd-radio
          >
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          &lt;cd-radio
            v-model="radioData"
            :height="38"
            :width="130"
            name="one"
            label="option1"
            >Option1&lt;/cd-radio
          >
          &lt;cd-radio
            v-model="radioData"
            :height="38"
            :width="130"
            name="one"
            label="option2"
            >Option2&lt;/cd-radio
          >
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          &lt;cd-radio v-model="radioOneData" name="two" label="option1"
            >Option1&lt;/cd-radio
          >
          &lt;cd-radio v-model="radioOneData" name="two" label="option2"
            >Option2&lt;/cd-radio
          >
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          &lt;cd-radio
            v-model="radioTwoData"
            :height="30"
            :width="90"
            name="three"
            label="option1"
            disabled
            >Option1&lt;/cd-radio
          >
          &lt;cd-radio
            v-model="radioTwoData"
            :height="30"
            :width="90"
            name="three"
            label="option2"
            disabled
            >Option2&lt;/cd-radio
          >
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let radioData = ref&lt;string>("option1");
            let radioOneData = ref&lt;string>("option1");
            let radioTwoData = ref&lt;string>("option1");
            return{
                radioData,
                radioOneData,
                radioTwoData
            }
        }
    }
    &lt;/script>     

    &lt;style scoped>
    .cd-radio-row-margin {
    margin: 10px 0px;
    }
    &lt;/style>   
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">
        <code>disabled</code> 属性可以用来控制单选框的禁用状态。
      </p>
      <div class="cd-public-div-frame">
        <cd-radio
          v-model="radioDisabledData"
          disabled
          name="four"
          label="optionA"
          >OptionA</cd-radio
        >
        <cd-radio
          v-model="radioDisabledData"
          disabled
          name="four"
          label="optionB"
          >OptionB</cd-radio
        >
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-radio
          v-model="radioDisabledData"
          disabled
          name="four"
          label="optionA"
          >OptionA&lt;/cd-radio
        >
        &lt;cd-radio
          v-model="radioDisabledData"
          disabled
          name="four"
          label="optionB"
          >OptionB&lt;/cd-radio
        >
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let radioDisabledData = ref&lt;string>("optionB");
            return{
                radioDisabledData
            }
        }
    }
    &lt;/script>     
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">带有边框</h2>
      <p class="cd-public-p">
        设置 <code>border</code> 属性为
        <code>true</code> 可以渲染为带有边框的单选框
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          <cd-radio v-model="radioBorderData" name="five" label="optionC" border
            >OptionC</cd-radio
          >
          <cd-radio v-model="radioBorderData" name="five" label="optionD" border
            >OptionD</cd-radio
          >
        </cd-row>
        <cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          <cd-radio
            v-model="radioBorderOneData"
            name="six"
            label="optionC"
            border
            disabled
            >OptionC</cd-radio
          >
          <cd-radio
            v-model="radioBorderOneData"
            name="six"
            label="optionD"
            border
            disabled
            >OptionD</cd-radio
          >
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          &lt;cd-radio v-model="radioBorderData" name="five" label="optionC" border
            >OptionC&lt;/cd-radio
          >
          &lt;cd-radio v-model="radioBorderData" name="five" label="optionD" border
            >OptionD&lt;/cd-radio
          >
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-radio-row-margin" flexWrap="wrap">
          &lt;cd-radio
            v-model="radioBorderOneData"
            name="six"
            label="optionC"
            border
            disabled
            >OptionC&lt;/cd-radio
          >
          &lt;cd-radio
            v-model="radioBorderOneData"
            name="six"
            label="optionD"
            border
            disabled
            >OptionD&lt;/cd-radio
          >
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let radioBorderData = ref&lt;string>("optionC");
            let radioBorderOneData = ref&lt;string>("optionC");
            return{
                radioBorderData,
                radioBorderOneData
            }
        }
    }
    &lt;/script>    

    &lt;style scoped>
    .cd-radio-row-margin {
    margin: 10px 0px;
    }
    &lt;/style>   
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Radio 属性</h2>
      <cd-table
        :data="radioAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Radio 事件</h2>
      <cd-table
        :data="radioEvent"
        :listName="['事件名', '说明', '参数']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Radio 插槽</h2>
      <cd-table :data="radioSlot" :listName="['插槽名', '说明']"></cd-table>
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
    let radioData = ref<string>("option1");
    let radioOneData = ref<string>("option1");
    let radioTwoData = ref<string>("option1");
    let radioDisabledData = ref<string>("optionB");
    let radioBorderData = ref<string>("optionC");
    let radioBorderOneData = ref<string>("optionC");
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
        title: "带有边框",
      },
      {
        anchorName: "four",
        title: "Radio 属性",
      },
      {
        anchorName: "five",
        title: "Radio 事件",
      },
      {
        anchorName: "six",
        title: "Radio 插槽",
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
    let radioAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "选中项绑定值",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "label",
        explain: "单选框对应的值，必传",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "name",
        explain: "原生name属性,必传",
        type: "string",
        optional: "--",
        default: "--",
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
        explain: "宽度,最小为90",
        type: "number",
        optional: "--",
        default: "110",
      },
      {
        property: "disabled",
        explain: "是否禁用单选框",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "border",
        explain: "是否显示边框",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);

    interface IRadioEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let radioEvent = ref<IRadioEvent[]>([
      {
        property: "change",
        explain: "绑定值变化时触发的事件",
        parameter: "选中的 Radio label 值",
      },
    ]);

    interface IRadioSlot {
      property: string;
      explain: string;
    }
    let radioSlot = ref<IRadioSlot[]>([
      {
        property: "--",
        explain: "默认插槽内容",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      radioData,
      radioOneData,
      radioTwoData,
      radioDisabledData,
      radioBorderData,
      radioBorderOneData,
      radioAttributesForm,
      radioEvent,
      radioSlot,
    };
  },
};
</script>

<style scoped>
.cd-radio-row-margin {
  margin: 10px 0px;
}
</style>