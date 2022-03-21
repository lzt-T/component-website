<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Checkbox 多选框</h1>
      <p class="cd-public-p">在一组备选选项中进行多选</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        单独使用可以表示两种状态之间的切换,使用
        <code>v-model</code> 属性绑定多选框初始状态
      </p>
      <p class="cd-public-p">
        用户可以通过 <code>size</code> 属性控制多选框的大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" :size="60">Option1</cd-checkbox>
          <cd-checkbox v-model="option2" :size="60">Option2</cd-checkbox>
        </cd-row>
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1">Option1</cd-checkbox>
          <cd-checkbox v-model="option2">Option2</cd-checkbox>
        </cd-row>
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" :size="40">Option1</cd-checkbox>
          <cd-checkbox v-model="option2" :size="40">Option2</cd-checkbox>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" :size="60">Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2" :size="60">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1">Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" :size="40">Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2" :size="40">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
        export default {
            setup(){
                let option1 = ref&lt;boolean>(true);
                let option2 = ref&lt;boolean>(false);
                return {
                    option1,
                    option2,
                };
            }
        }
    &lt;/script&gt;

    &lt;style scoped>
    .cd-checkbox-row-margin {
        margin: 10px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">多选框的不可用状态</p>
      <p class="cd-public-p">用户可以通过 <code>disabled</code> 属性控制</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" disabled>Option1</cd-checkbox>
          <cd-checkbox v-model="option2">Option2</cd-checkbox>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" disabled>Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
        export default {
            setup(){
                let option1 = ref&lt;boolean>(true);
                let option2 = ref&lt;boolean>(false);
                return {
                    option1,
                    option2,
                };
            }
        }
    &lt;/script&gt;

    &lt;style scoped>
    .cd-checkbox-row-margin {
        margin: 10px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">多选框组</h2>
      <cd-alter
        type="warning"
        title="使用多选框组时，一定要传入 v-model、option、value 属性"
        showIcon
        :closable="false"
      ></cd-alter>
      <p class="cd-public-p">
        以字符串数组的形式绑定 <code>v-model</code> 属性来确定哪些
        <code>option</code> 初始是选中的
      </p>
      <p class="cd-public-p">
        以数组的形式绑定 <code>option</code> 属性来确实组件显示的文字
      </p>
      <p class="cd-public-p">
        以数组的形式绑定 <code>value</code> 属性来确定表单元素原生的
        <code>value</code> 属性
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox-group
            v-model="checkboxGroup"
            :option="['Option1', 'Option2', 'Option3', 'Option4', 'Option5']"
            :value="['option1', 'option2', 'option3', 'option4', 'option5']"
            :disabled="[false, false, false, true, true]"
          ></cd-checkbox-group>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
      &lt;cd-checkbox-group
        v-model="checkboxGroup"
        :option="['Option1', 'Option2', 'Option3', 'Option4', 'Option5']"
        :value="['option1', 'option2', 'option3', 'option4', 'option5']"
        :disabled="[false, false, false, true, true]"
      >&lt;/cd-checkbox-group>
    &lt;/cd-row>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
    export default {
      setup(){
        let checkboxGroup = ref&lt;string[]>(["Option1", "Option5"]);
        return{
           checkboxGroup,
        }
      }
    }
  &lt;/script&gt; 
  
  &lt;style scoped>
  .cd-checkbox-row-margin {
    margin: 10px 0px;
  }
  &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        可选项目数量的限制
      </h2>
      <p>
        使用 <code>min</code> 和
        <code>max</code> 属性能够限制可以被勾选的项目的数量
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox-group
            v-model="checkboxGroup"
            :option="['Option1', 'Option2', 'Option3', 'Option4', 'Option5']"
            :value="['option1', 'option2', 'option3', 'option4', 'option5']"
            :min="2"
            :max="4"
          ></cd-checkbox-group>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
      &lt;cd-checkbox-group
        v-model="checkboxGroup"
        :option="['Option1', 'Option2', 'Option3', 'Option4', 'Option5']"
        :value="['option1', 'option2', 'option3', 'option4', 'option5']"
        :min="2"
        :max="4"
      >&lt;/cd-checkbox-group>
    &lt;/cd-row>
  &lt;/template&gt;

  &lt;script lang="ts">
  import { ref } from "vue";
    export default {
      setup(){
        let checkboxGroup = ref&lt;string[]>(["Option1", "Option5"]);
        return{
           checkboxGroup,
        }
      }
    }
  &lt;/script&gt; 
  
  &lt;style scoped>
  .cd-checkbox-row-margin {
    margin: 10px 0px;
  }
  &lt;/style>   
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">带有边框</h2>
      <p class="cd-public-p">
        设置 <code>border</code> 属性可以渲染为带有边框的多选框。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" :size="60" border>Option1</cd-checkbox>
          <cd-checkbox v-model="option2" :size="60" border>Option2</cd-checkbox>
        </cd-row>
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" border>Option1</cd-checkbox>
          <cd-checkbox v-model="option2" border>Option2</cd-checkbox>
        </cd-row>
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" :size="40" border disabled
            >Option1</cd-checkbox
          >
          <cd-checkbox v-model="option2" :size="40" border disabled
            >Option2</cd-checkbox
          >
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" :size="60" border>Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2" :size="60" border>Option2&lt;/cd-checkbox>
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" border>Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2" border>Option2&lt;/cd-checkbox>
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" :size="40" border disabled>Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2" :size="40" border disabled>Option2&lt;/cd-checkbox>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
        export default {
            setup(){
                let option1 = ref&lt;boolean>(true);
                let option2 = ref&lt;boolean>(false);
                return {
                    option1,
                    option2,
                };
            }
        }
    &lt;/script&gt;

    &lt;style scoped>
    .cd-checkbox-row-margin {
        margin: 10px 0px;
    }
    &lt;/style>
         </pre
        >
      </cd-collapse>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">
        Checkbox 属性
      </h2>
      <cd-table
        :data="checkboxAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">
        Checkbox 事件
      </h2>
      <cd-table
        :data="CheckboxEvent"
        :listName="['事件名', '说明', '参数']"
      ></cd-table>
      <h2 id="eight" :ref="anchor" class="cd-public-headline-h2">
        Checkbox 插槽
      </h2>
      <cd-table :data="checkboxSlot" :listName="['插槽名', '说明']"></cd-table>
      <h2 id="nine" :ref="anchor" class="cd-public-headline-h2">
        Checkbox-Group 属性
      </h2>
      <cd-table
        :data="checkboxGroupAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="ten" :ref="anchor" class="cd-public-headline-h2">
        Checkbox-Group 事件
      </h2>
      <cd-table
        :data="CheckboxGroupEvent"
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
    //   测试数据
    let option1 = ref<boolean>(true);
    let option2 = ref<boolean>(false);

    let checkboxGroup = ref<string[]>(["Option1", "Option5"]);
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
        title: "多选框组",
      },
      {
        anchorName: "four",
        title: "可选项目数量的限制",
      },
      {
        anchorName: "five",
        title: "带有边框",
      },
      {
        anchorName: "six",
        title: "Checkbox 属性",
      },
      {
        anchorName: "seven",
        title: "Checkbox 事件",
      },
      {
        anchorName: "eight",
        title: "Checkbox 插槽",
      },
      {
        anchorName: "nine",
        title: "Checkbox-Group 属性",
      },
      {
        anchorName: "ten",
        title: "Checkbox-Group 插槽",
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
    interface Iattributesfrom {
      property: string;
      explain: string;
      type: string;
      optional: string;
      default: string;
    }
    let checkboxAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "选中项绑定值",
        type: "boolean",
        optional: "--",
        default: "--",
      },
      {
        property: "size",
        explain: "Checkbox的尺寸,最小为40",
        type: "number",
        optional: "--",
        default: "50",
      },
      {
        property: "disabled",
        explain: "是否禁用",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "border",
        explain: "是否带边框",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "name",
        explain: "表单元素的原生name属性",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "value",
        explain: "表单元素的原生value属性",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);

    let checkboxGroupAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "字符串数组,选择框中选中的值,必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "option",
        explain: "字符串数组,多选择框组的选项值,必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "value",
        explain: "字符串数组,表单元素原生的value属性,必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "size",
        explain: "组件尺寸,最小40",
        type: "number",
        optional: "--",
        default: "50",
      },
      {
        property: "border",
        explain: "boolean数组,是否带边框",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "disabled",
        explain: "boolean数组,是否禁用",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "marginLeft",
        explain: "每个Checkbox组件的间隔",
        type: "number",
        optional: "--",
        default: "15",
      },
      {
        property: "name",
        explain: "表单元素原生的name属性",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "min",
        explain: "可被勾选的 checkbox 的最小数量",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "max",
        explain: "可被勾选的 checkbox 的最大数量",
        type: "number",
        optional: "--",
        default: "--",
      },
    ]);

    interface ICheckboxEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let CheckboxEvent = ref<ICheckboxEvent[]>([
      {
        property: "onChange",
        explain: "当绑定值变化时触发的事件",
        parameter: "返回一个boolean值",
      },
    ]);
    let CheckboxGroupEvent = ref<ICheckboxEvent[]>([
      {
        property: "onChange",
        explain: "当多选框组选择发生改变时触发的事件",
        parameter: "返回一个string数组",
      },
    ]);

    interface ICheckboxSlot {
      property: string;
      explain: string;
    }
    let checkboxSlot = ref<ICheckboxSlot[]>([
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
      option1,
      option2,
      checkboxGroup,
      checkboxAttributesForm,
      checkboxSlot,
      checkboxGroupAttributesForm,
      CheckboxEvent,
      CheckboxGroupEvent,
    };
  },
};
</script>

<style scoped>
.cd-checkbox-row-margin {
  margin: 10px 0px;
}
</style>