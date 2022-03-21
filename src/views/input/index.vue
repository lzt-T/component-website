<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Input 输入框</h1>
      <p class="cd-public-p">通过鼠标或键盘输入字符</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input v-model="inputData"></cd-input>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-input v-model="inputData">&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputData = ref&lt;string>("");
        return{
          inputData
        }
      }
    }
    &lt;/script>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">
        通过 <code>disabled</code> 属性指定是否禁用 <code>input</code> 组件
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input v-model="inputDisabledData" disabled></cd-input>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-input v-model="inputDisabledData" disabled>&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputDisabledData = ref&lt;string>("");
        return{
          inputDisabledData
        }
      }
    }
    &lt;/script>           
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">一键清空</h2>
      <p class="cd-public-p">
        使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input v-model="inputClearableData" clearable></cd-input>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-input v-model="inputClearableData" clearable>&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputClearableData = ref&lt;string>("");
        return{
          inputClearableData
        }
      }
    }
    &lt;/script>           
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        密码类型的输入框
      </h2>
      <p class="cd-public-p">
        设置
        <code>type</code>
        属性为<code>password</code>即可得到一个可一键清空的输入框
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input v-model="inputPasswordData" type="password"></cd-input>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-input v-model="inputPasswordData" type="password">&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputPasswordData = ref&lt;string>("");
        return{
          inputPasswordData
        }
      }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        带 icon 的输入框
      </h2>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input v-model="inputPrefixIcon" prefixIcon="searchTow"></cd-input>
          <cd-input v-model="inputSuffixIcon" suffixIcon="edit"></cd-input>
        </cd-row>
      </div>
      <p class="cd-public-p">添加图标以显示输入框类型。</p>
      <p class="cd-public-p">
        要在输入框中添加图标，你可以简单地使用 <code>prefixIcon</code> 和
        <code>suffixIcon</code> 属性
      </p>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
            &lt;cd-input v-model="inputPrefixIcon" prefixIcon="searchTow">&lt;/cd-input>
            &lt;cd-input v-model="inputSuffixIcon" suffixIcon="edit">&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputPrefixIcon = ref&lt;string>("");
        let inputSuffixIcon = ref&lt;string>("");
        return{
          inputPrefixIcon,
          inputSuffixIcon
        }
      }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">多行文本</h2>
      <p class="cd-public-p">
        用于输入多行文本信息可缩放的输入框。 添加
        <code>type="textarea"</code> 更改 <code>input</code> 到原生
        <code>textarea</code>
      </p>
      <p class="cd-public-p">文本域高度可通过 <code>rows</code> 属性控制</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input
            v-model="textareaData"
            type="textarea"
            rows="3"
            :width="300"
          ></cd-input>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-input
            v-model="textareaData"
            type="textarea"
            rows="3"
            :width="300"
          >&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let textareaData = ref&lt;string>("");
        return{
          textareaData,
        }
      }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">
        可自适应文本高度的文本域
      </h2>
      <p class="cd-public-p">
        设置文字输入类型的
        <code>autosize</code> 属性使得根据内容自动调整的高度。 你可以给
        <code>autosize</code>
        提供一个包含有最大和最小高度的对象，让输入框自动调整。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input
            v-model="textareaAutosize"
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 5 }"
            :width="300"
          ></cd-input>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-input
            v-model="textareaAutosize"
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 5 }"
            :width="300"
          >&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let textareaAutosize = ref&lt;string>("");
        return{
          textareaAutosize,
        }
      }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="eight" :ref="anchor" class="cd-public-headline-h2">
        不同尺寸的输入框
      </h2>
      <p class="cd-public-p">
        设置 <code>height</code>、<code>width</code> 属性可以控制输入框的大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-input :height="38" :width="260"></cd-input>
          <cd-input></cd-input>
          <cd-input :height="24" :width="190"></cd-input>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-input v-model="inputSize" :height="38" :width="260">&lt;/cd-input>
          &lt;cd-input v-model="inputSizeOne" >&lt;/cd-input>
          &lt;cd-input v-model="inputSizeTwo" :height="24" :width="190">&lt;/cd-input>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputSize = ref&lt;string>("");
        let inputSizeOne = ref&lt;string>("");
        let inputSizeTwo = ref&lt;string>("");
        return{
          inputSize,
          inputSizeOne,
          inputSizeTwo
        }
      }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="nine" :ref="anchor" class="cd-public-headline-h2">搜索</h2>
      <p class="cd-public-p">
        设置 <code>selectData</code> 属性可以开启 <code>input</code> 的搜索功能
      </p>
      <div class="cd-public-div-frame">
        <cd-input
          v-model="inputSearch"
          :selectData="searchData"
          prefixIcon="searchTow"
        >
        </cd-input>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
      &lt;cd-input v-model="inputSearch" :selectData="searchData" prefixIcon="searchTow"> &lt;/cd-input>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputSearch = ref&lt;string>("");
        let searchData = ref&lt;string[]>(["Vue", "React", "Js", "Axios", "WebSocket"]);
        return{
          inputSearch,
          searchData,
        }
      }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="ten" :ref="anchor" class="cd-public-headline-h2">输入长度限制</h2>
      <p class="cd-public-p">
        使用 <code>maxLength</code> 和 <code>minLength</code> 属性,
        来控制输入内容的最大字数和最小字数。允许你通过设置
        <code>showWordLinit</code> 到 true 来显示剩余字数。
      </p>
      <div class="cd-public-div-frame">
        <cd-input
          v-model="inputMaxLength"
          :maxLength="10"
          showWordLinit
        ></cd-input>
        <br />
        <cd-input
          v-model="textareaMaxLength"
          type="textarea"
          :rows="4"
          :maxLength="200"
          showWordLinit
        ></cd-input>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
       &lt;cd-input
          v-model="inputMaxLength"
          :maxLength="10"
          showWordLinit
        >&lt;/cd-input>
        &lt;br />
        &lt;cd-input
          v-model="textareaMaxLength"
          type="textarea"
          :rows="4"
          :maxLength="200"
          showWordLinit
        >&lt;/cd-input>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
      setup(){
        let inputMaxLength = ref&lt;string>("");
        let textareaMaxLength = ref&lt;string>("");
        return{
          inputMaxLength,
          textareaMaxLength,
        }
      }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="eleven" :ref="anchor" class="cd-public-headline-h2">
        Input 属性
      </h2>
      <cd-table
        :data="inputAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="twelve" :ref="anchor" class="cd-public-headline-h2">
        Input 事件
      </h2>
      <cd-table
        :data="inputEvent"
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
    let inputData = ref<string>("");
    let inputDisabledData = ref<string>("");
    let inputClearableData = ref<string>("");
    let inputPasswordData = ref<string>("");
    let inputPrefixIcon = ref<string>("");
    let inputSuffixIcon = ref<string>("");
    let textareaData = ref<string>("");
    let textareaAutosize = ref<string>("");
    let inputSearch = ref<string>("");
    let searchData = ref<string[]>([
      "Vue",
      "React",
      "Js",
      "Axios",
      "WebSocket",
    ]);
    let inputMaxLength = ref<string>("");
    let textareaMaxLength = ref<string>("");
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
        title: "一键清空",
      },
      {
        anchorName: "four",
        title: "密码类型的输入框",
      },
      {
        anchorName: "five",
        title: "带 icon 的输入框",
      },
      {
        anchorName: "six",
        title: "多行文本",
      },
      {
        anchorName: "seven",
        title: "可自适应文本高度的文本域",
      },
      {
        anchorName: "eight",
        title: "不同尺寸的输入框",
      },
      {
        anchorName: "nine",
        title: "搜索",
      },
      {
        anchorName: "ten",
        title: "输入长度限制",
      },
      {
        anchorName: "eleven",
        title: "Input 属性",
      },
      {
        anchorName: "twelve",
        title: "Input 事件",
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
    let inputAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "绑定值,不传会导致意料外的bug",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "type",
        explain: "类型",
        type: "string",
        optional: "text/password/textarea",
        default: "text",
      },
      {
        property: "placeholder",
        explain: "输入框占位文本",
        type: "string",
        optional: "--",
        default: "Please input",
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
        explain: "宽度,对type='textarea'无效,最小为200",
        type: "number",
        optional: "--",
        default: "240",
      },
      {
        property: "rows",
        explain: "输入框行数，只对 type='textarea' 有效",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "name",
        explain: "表单元素原生的name属性",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "prefixIcon",
        explain: "自定义前缀图标,icon的名称",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "suffixIcon",
        explain: "自定义后缀图标,icon的名称",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "maxLength",
        explain: "最大输入长度",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "minLength",
        explain: "原生属性，最小输入长度",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "clearable",
        explain: "是否可清空",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "showWordLinit",
        explain: "是否显示输入字数统计",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "disabled",
        explain: "是否禁用",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "autosize",
        explain:
          "textarea高度是否自适应，只在 type='textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }",
        type: "object",
        optional: "--",
        default: "--",
      },
      {
        property: "resize",
        explain: "控制是否能被用户缩放",
        type: "string",
        optional: "none/both/horizontal/vertical",
        default: "both",
      },
      {
        property: "fontSize",
        explain: "只在 type='textarea' 时生效,字体大小",
        type: "number",
        optional: "--",
        default: "17",
      },
      {
        property: "selectData",
        explain: "type!='textarea' 时生效,传入一个字符串数组",
        type: "array",
        optional: "--",
        default: "--",
      },
    ]);
    interface IInputEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let inputEvent = ref<IInputEvent[]>([
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
        explain: "仅在用户按下回车时触发",
        parameter: "(value: string)",
      },
      {
        property: "change",
        explain: "仅在用户按下回车时触发",
        parameter: "(value: string)",
      },
      {
        property: "input",
        explain: "在 Input 值改变时触发",
        parameter: "(event: Event)",
      },
      {
        property: "clear",
        explain: "在点击由 clearable 属性生成的清空按钮时触发",
        parameter: "--",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      inputData,
      inputDisabledData,
      inputClearableData,
      inputPasswordData,
      inputPrefixIcon,
      inputSuffixIcon,
      textareaData,
      textareaAutosize,
      inputSearch,
      searchData,
      inputMaxLength,
      textareaMaxLength,
      inputAttributesForm,
      inputEvent,
    };
  },
};
</script>

<style scoped>
</style>