<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Select 选择器</h1>
      <p class="cd-public-p">当选项过多时，使用下拉菜单展示并选择内容</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">适用广泛的基础单选 v-model 的值为当前选中值</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap" textAlign="left">
          <cd-select
            v-model="select"
            :options="selectData"
            :height="38"
            :width="260"
          ></cd-select>
          <cd-select v-model="select1" :options="selectData"></cd-select>
          <cd-select
            v-model="select2"
            :options="selectData"
            :height="26"
            :width="190"
          ></cd-select>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="20" flexWrap="wrap" textAlign="left">
      &lt;cd-select
        v-model="select"
        :options="selectData"
        :height="38"
        :width="260"
      >&lt;/cd-select>
      &lt;cd-select v-model="select1" :options="selectData">&lt;/cd-select>
      &lt;cd-select
        v-model="select2"
        :options="selectData"
        :height="26"
        :width="190"
      >&lt;/cd-select>
    &lt;/cd-row>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let select = ref&lt;string>("");
      let select1 = ref&lt;string>("");
      let select2 = ref&lt;string>("");
      let selectData = ref([
        { label: "Option1" },
        { label: "Option2" },
        { label: "Option3" },
        { label: "Option4" },
        { label: "Option5" },
        { label: "Option6" },
        { label: "Option7" },
      ]);
      return{
        select,
        select1,
        select2,
        selectData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">有禁用选项</h2>
      <p class="cd-public-p">
        在 <code>option</code> 中，设定 <code>disabled</code> 值为
        <code>true</code>,即可禁用该选项
      </p>
      <div class="cd-public-div-frame">
        <cd-select
          v-model="selectDisabled"
          :options="selectDisabledData"
        ></cd-select>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-select
      v-model="selectDisabled"
      :options="selectDisabledData"
    >&lt;/cd-select>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let selectDisabled = ref("");
      let selectDisabledData = ref([
        { label: "Option1" },
        { label: "Option2" },
        { label: "Option3", disabled: true },
        { label: "Option4" },
        { label: "Option5", disabled: true },
        { label: "Option6" },
        { label: "Option7" },
      ]);
      return{
        selectDisabled,
        selectDisabledData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">禁用整个选择器组件</p>
      <div class="cd-public-div-frame">
        <cd-select
          v-model="selectDisabled1"
          :options="selectDisabledData1"
          disabled
        ></cd-select>
      </div>

      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-select
      v-model="selectDisabled1"
      :options="selectDisabledData1"
      disabled
    >&lt;/cd-select>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let selectDisabled1 = ref("");
      let selectDisabledData1 = ref([{ label: "Option1" }, { label: "Option2" }]);
      return{
        selectDisabled1,
        selectDisabledData1
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">可清空单选</h2>
      <p class="cd-public-p">包含清空按钮，可将选择器清空为初始状态</p>
      <p class="cd-public-p">
        设置 <code>clearable</code> 属性为 <code>true</code>
      </p>
      <div class="cd-public-div-frame">
        <cd-select
          v-model="selectclearable"
          :options="selectclearableData"
          clearable
        ></cd-select>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-select
      v-model="selectclearable"
      :options="selectclearableData"
      clearable
    >&lt;/cd-select>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let selectclearable = ref("");
      let selectclearableData = ref([
        { label: "Option1" },
        { label: "Option2" },
        { label: "Option3" },
        { label: "Option4" },
        { label: "Option5" },
      ]);
      return{
        selectclearable,
        selectclearableData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">筛选选项</h2>
      <p class="cd-public-p">可以利用筛选功能快速查找选项</p>
      <p class="cd-public-p">
        设置 <code>filterable</code> 属性为 <code>true</code>
      </p>
      <div class="cd-public-div-frame">
        <cd-select
          v-model="selectfilterable"
          :options="selectfilterableData"
          filterable
        ></cd-select>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-select
      v-model="selectfilterable"
      :options="selectfilterableData"
      filterable
    >&lt;/cd-select>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
  export default {
    setup(){
      let selectfilterable = ref("");
      let selectfilterableData = ref([
        { label: "Option1" },
        { label: "Option2" },
        { label: "Option3" },
        { label: "Option4" },
        { label: "Option5" },
      ]);
      return{
        selectfilterable,
        selectfilterableData
      }
    }
  }
  &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Select 属性</h2>
      <cd-table
        :data="selectAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">
        Select 事件
      </h2>
      <cd-table
        :data="selectEvent"
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
    // 测试
    let select = ref<string>("");
    let select1 = ref<string>("");
    let select2 = ref<string>("");
    let selectData = ref([
      { label: "Option1" },
      { label: "Option2" },
      { label: "Option3" },
      { label: "Option4" },
      { label: "Option5" },
      { label: "Option6" },
      { label: "Option7" },
    ]);
    let selectDisabled = ref("");
    let selectDisabledData = ref([
      { label: "Option1" },
      { label: "Option2" },
      { label: "Option3", disabled: true },
      { label: "Option4" },
      { label: "Option5", disabled: true },
      { label: "Option6" },
      { label: "Option7" },
    ]);
    let selectDisabled1 = ref("");
    let selectDisabledData1 = ref([{ label: "Option1" }, { label: "Option2" }]);
    let selectclearable = ref("");
    let selectclearableData = ref([
      { label: "Option1" },
      { label: "Option2" },
      { label: "Option3" },
      { label: "Option4" },
      { label: "Option5" },
    ]);
    let selectfilterable = ref("");
    let selectfilterableData = ref([
      { label: "Option1" },
      { label: "Option2" },
      { label: "Option3" },
      { label: "Option4" },
      { label: "Option5" },
    ]);
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
        title: "有禁用选项",
      },
      {
        anchorName: "three",
        title: "禁用状态",
      },
      {
        anchorName: "four",
        title: "可清空单选",
      },
      {
        anchorName: "five",
        title: "筛选选项",
      },
      {
        anchorName: "six",
        title: "Select 属性",
      },
      {
        anchorName: "seven",
        title: "Select 事件",
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
    let selectAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "选中项绑定值",
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
        explain: "宽度,最小为120",
        type: "number",
        optional: "--",
        default: "240",
      },
      {
        property: "placeholder",
        explain: "输入框占位文本",
        type: "string",
        optional: "--",
        default: "Select",
      },
      {
        property: "options",
        explain: "对象数组,如  [{ label: 'Option5', disabled: true }],必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "disabled",
        explain: "是否禁用",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "filterable",
        explain: "是否开启搜索功能",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "clearable",
        explain: "是否可以情况选择器",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "name",
        explain: "原生name属性",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);

    interface ISelectEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let selectEvent = ref<ISelectEvent[]>([
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
      {
        property: "clear",
        explain: "可清空的单选模式下用户点击清空按钮时触发",
        parameter: "--",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      select,
      selectData,
      select1,
      select2,
      selectDisabled,
      selectDisabledData,
      selectDisabled1,
      selectDisabledData1,
      selectclearable,
      selectclearableData,
      selectfilterable,
      selectfilterableData,
      selectAttributesForm,
      selectEvent,
    };
  },
};
</script>

<style>
</style>