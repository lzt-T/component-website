<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Cascader 级联选择器</h1>
      <cd-alert
        type="warning"
        title="Cascader 组件最高可以支持4级的数据选择"
        showIcon
        :closable="false"
      ></cd-alert>
      <p class="cd-public-p">
        当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择
      </p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        只需为 Cascader 的
        <code>option</code> 属性指定选项数组即可渲染出一个级联选择器
      </p>
      <p class="cd-public-p">
        通过 <code>height</code>、<code>width</code> 属性可以设定组件的大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap" textAlign="left">
          <cd-cascader
            :height="40"
            :width="280"
            v-model="selectingData"
            :option="optionData"
          ></cd-cascader>
          <cd-cascader
            v-model="selectingData"
            :option="optionData"
          ></cd-cascader>
          <cd-cascader
            :height="24"
            :width="200"
            v-model="selectingData"
            :option="optionData"
          ></cd-cascader>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-cascader
            :height="40"
            :width="280"
            v-model="selectingData"
            :option="optionData"
        >&lt;/cd-cascader>
        &lt;cd-cascader
            v-model="selectingData"
            :option="optionData"
        >&lt;/cd-cascader>
        &lt;cd-cascader
            :height="24"
            :width="200"
            v-model="selectingData"
            :option="optionData"
        >&lt;/cd-cascader>
    &lt;/template&gt;
    
    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup() {
            let selectingData = ref("");
            let optionData = ref([
                {
                    value: "guide",
                    children: [
                        {
                            value: "disciplines",
                            children: [
                                {
                                    value: "consistency",
                                },
                                {
                                    value: "feedback",
                                },
                                {
                                    value: "efficiency",
                                },
                                {
                                    value: "controllability",
                                },
                            ],
                        },
                        {
                            value: "navigation",
                            children: [
                                {
                                    value: "side nav",
                                },
                                {
                                    value: "top nav",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "component",
                    children: [
                        {
                            value: "basic",
                            children: [
                                {
                                    value: "layout",
                                },
                                {
                                    value: "color",
                                },
                                {
                                    value: "typography",
                                },
                                {
                                    value: "icon",
                                },
                                {
                                    value: "button",
                                },
                            ],
                        },
                        {
                            value: "form",
                            children: [
                                {
                                    value: "radio",
                                },
                                {
                                    value: "checkbox",
                                },
                                {
                                    value: "input",
                                },
                                {
                                    value: "input-number",
                                },
                                {
                                    value: "select",
                                },
                                {
                                    value: "cascader",
                                },
                                {
                                    value: "switch",
                                },
                                {
                                    value: "slider",
                                },
                                {
                                    value: "time-picker",
                                },
                                {
                                    value: "date-picker",
                                },
                                {
                                    value: "datetime-picker",
                                },
                                {
                                    value: "upload",
                                },
                                {
                                    value: "rate",
                                },
                                {
                                    value: "form",
                                },
                            ],
                        },
                        {
                            value: "data",
                            children: [
                                {
                                    value: "table",
                                },
                                {
                                    value: "tag",
                                },
                                {
                                    value: "progress",
                                },
                                {
                                    value: "tree",
                                },
                                {
                                    value: "pagination",
                                },
                                {
                                    value: "badge",
                                },
                            ],
                        },
                        {
                            value: "notice",
                            children: [
                                {
                                    value: "alert",
                                },
                                {
                                    value: "loading",
                                },
                                {
                                    value: "message",
                                },
                                {
                                    value: "message-box",
                                },
                                {
                                    value: "notification",
                                },
                            ],
                        },
                        {
                            value: "navigation",
                            children: [
                                {
                                    value: "menu",
                                },
                                {
                                    value: "tabs",
                                },
                                {
                                    value: "breadcrumb",
                                },
                                {
                                    value: "dropdown",
                                },
                                {
                                    value: "steps",
                                },
                            ],
                        },
                        {
                            value: "others",
                            children: [
                                {
                                    value: "dialog",
                                },
                                {
                                    value: "tooltip",
                                },
                                {
                                    value: "popover",
                                },
                                {
                                    value: "card",
                                },
                                {
                                    value: "carousel",
                                },
                                {
                                    value: "collapse",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "resource",
                    children: [
                        {
                            value: "axure",
                        },
                        {
                            value: "sketch",
                        },
                        {
                            value: "docs",
                        },
                    ],
                },
            ]);
            return {
                optionData,
                selectingData,
            };
        }
    }
    &lt;/script>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">
        仅显示最后一级
      </h2>
      <div class="cd-public-div-frame">
        <cd-cascader
          v-model="selectingData"
          :option="optionData"
          :showAllLevels="false"
        ></cd-cascader>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
      &lt;cd-cascader
        v-model="selectingData"
        :option="optionData"
        :showAllLevels="false"
      >&lt;/cd-cascader>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup() {
            let selectingData = ref("");
            let optionData = ref([
                {
                    value: "guide",
                    children: [
                        {
                            value: "disciplines",
                            children: [
                                {
                                    value: "consistency",
                                },
                                {
                                    value: "feedback",
                                },
                                {
                                    value: "efficiency",
                                },
                                {
                                    value: "controllability",
                                },
                            ],
                        },
                        {
                            value: "navigation",
                            children: [
                                {
                                    value: "side nav",
                                },
                                {
                                    value: "top nav",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "component",
                    children: [
                        {
                            value: "basic",
                            children: [
                                {
                                    value: "layout",
                                },
                                {
                                    value: "color",
                                },
                                {
                                    value: "typography",
                                },
                                {
                                    value: "icon",
                                },
                                {
                                    value: "button",
                                },
                            ],
                        },
                        {
                            value: "form",
                            children: [
                                {
                                    value: "radio",
                                },
                                {
                                    value: "checkbox",
                                },
                                {
                                    value: "input",
                                },
                                {
                                    value: "input-number",
                                },
                                {
                                    value: "select",
                                },
                                {
                                    value: "cascader",
                                },
                                {
                                    value: "switch",
                                },
                                {
                                    value: "slider",
                                },
                                {
                                    value: "time-picker",
                                },
                                {
                                    value: "date-picker",
                                },
                                {
                                    value: "datetime-picker",
                                },
                                {
                                    value: "upload",
                                },
                                {
                                    value: "rate",
                                },
                                {
                                    value: "form",
                                },
                            ],
                        },
                        {
                            value: "data",
                            children: [
                                {
                                    value: "table",
                                },
                                {
                                    value: "tag",
                                },
                                {
                                    value: "progress",
                                },
                                {
                                    value: "tree",
                                },
                                {
                                    value: "pagination",
                                },
                                {
                                    value: "badge",
                                },
                            ],
                        },
                        {
                            value: "notice",
                            children: [
                                {
                                    value: "alert",
                                },
                                {
                                    value: "loading",
                                },
                                {
                                    value: "message",
                                },
                                {
                                    value: "message-box",
                                },
                                {
                                    value: "notification",
                                },
                            ],
                        },
                        {
                            value: "navigation",
                            children: [
                                {
                                    value: "menu",
                                },
                                {
                                    value: "tabs",
                                },
                                {
                                    value: "breadcrumb",
                                },
                                {
                                    value: "dropdown",
                                },
                                {
                                    value: "steps",
                                },
                            ],
                        },
                        {
                            value: "others",
                            children: [
                                {
                                    value: "dialog",
                                },
                                {
                                    value: "tooltip",
                                },
                                {
                                    value: "popover",
                                },
                                {
                                    value: "card",
                                },
                                {
                                    value: "carousel",
                                },
                                {
                                    value: "collapse",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "resource",
                    children: [
                        {
                            value: "axure",
                        },
                        {
                            value: "sketch",
                        },
                        {
                            value: "docs",
                        },
                    ],
                },
            ]);
            return {
                optionData,
                selectingData,
            };
        }
    }
    &lt;/script>
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Cascader 属性
      </h2>
      <cd-table
        :data="cascaderAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        Cascader 事件
      </h2>
      <cd-table
        :data="cascaderEvent"
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
    //   测试的数据
    let selectingData = ref("");
    let optionData = ref([
      {
        value: "guide",
        children: [
          {
            value: "disciplines",
            children: [
              {
                value: "consistency",
              },
              {
                value: "feedback",
              },
              {
                value: "efficiency",
              },
              {
                value: "controllability",
              },
            ],
          },
          {
            value: "navigation",
            children: [
              {
                value: "side nav",
              },
              {
                value: "top nav",
              },
            ],
          },
        ],
      },
      {
        value: "component",
        children: [
          {
            value: "basic",

            children: [
              {
                value: "layout",
              },
              {
                value: "color",
              },
              {
                value: "typography",
              },
              {
                value: "icon",
              },
              {
                value: "button",
              },
            ],
          },
          {
            value: "form",
            children: [
              {
                value: "radio",
              },
              {
                value: "checkbox",
              },
              {
                value: "input",
              },
              {
                value: "input-number",
              },
              {
                value: "select",
              },
              {
                value: "cascader",
              },
              {
                value: "switch",
              },
              {
                value: "slider",
              },
              {
                value: "time-picker",
              },
              {
                value: "date-picker",
              },
              {
                value: "datetime-picker",
              },
              {
                value: "upload",
              },
              {
                value: "rate",
              },
              {
                value: "form",
              },
            ],
          },
          {
            value: "data",
            children: [
              {
                value: "table",
              },
              {
                value: "tag",
              },
              {
                value: "progress",
              },
              {
                value: "tree",
              },
              {
                value: "pagination",
              },
              {
                value: "badge",
              },
            ],
          },
          {
            value: "notice",
            children: [
              {
                value: "alert",
              },
              {
                value: "loading",
              },
              {
                value: "message",
              },
              {
                value: "message-box",
              },
              {
                value: "notification",
              },
            ],
          },
          {
            value: "navigation",
            children: [
              {
                value: "menu",
              },
              {
                value: "tabs",
              },
              {
                value: "breadcrumb",
              },
              {
                value: "dropdown",
              },
              {
                value: "steps",
              },
            ],
          },
          {
            value: "others",
            children: [
              {
                value: "dialog",
              },
              {
                value: "tooltip",
              },
              {
                value: "popover",
              },
              {
                value: "card",
              },
              {
                value: "carousel",
              },
              {
                value: "collapse",
              },
            ],
          },
        ],
      },
      {
        value: "resource",
        children: [
          {
            value: "axure",
          },
          {
            value: "sketch",
          },
          {
            value: "docs",
          },
        ],
      },
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
        title: "仅显示最后一级",
      },
      {
        anchorName: "three",
        title: "Cascader 属性",
      },
      {
        anchorName: "four",
        title: "Cascader 事件",
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
    let cascaderAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "返回选择的值",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "placeholder",
        explain: "输入框占位文本",
        type: "string",
        optional: "--",
        default: "Select",
      },
      {
        property: "height",
        explain: "组件高度,最下值为24",
        type: "number",
        optional: "--",
        default: "32",
      },
      {
        property: "width",
        explain: "组件宽度,最小值为200",
        type: "number",
        optional: "--",
        default: "240",
      },
      {
        property: "option",
        explain: "可选项数据源,为必传选项",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "name",
        explain: "表单组件原生的name属性",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);
    interface ICascaderEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let cascaderEvent = ref<ICascaderEvent[]>([
      {
        property: "change",
        explain: "当选中节点变化时触发",
        parameter: "返回一个字符串,为选择的值",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      optionData,
      selectingData,
      cascaderAttributesForm,
      cascaderEvent,
    };
  },
};
</script>

<style>
</style>