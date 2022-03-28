<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Breadcrumb 面包屑</h1>
      <p class="cd-public-p">显示当前页面的路径，快速返回之前的任意页面</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">传入 <code>options</code> 对象数组</p>
      <p class="cd-public-p">
        该组件接受一个 <code>string</code> 类型的参数
        <code>separator</code>来作为分隔符。 默认值为 '/'
      </p>
      <div class="cd-public-div-frame">
        <cd-breadcrumb :options="options"></cd-breadcrumb>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-breadcrumb :options="options">&lt;/cd-breadcrumb>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let options = ref([
                {
                    value: "homepage",
                    to: "/",
                },
                {
                    value: "button",
                    to: "/button",
                },
                {
                    value: "button list",
                },
                {
                    value: "button detail",
                },
            ]);
            return{
                options
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">图标分隔符</h2>
      <p class="cd-public-p">
        通过设置 <code>separatorIcon</code> 可使用相应的
        <code>icon</code> 作为分隔符，注意这将使 <code>separator</code> 失效
      </p>
      <div class="cd-public-div-frame">
        <cd-breadcrumb
          :options="options"
          separatorIcon="rightArrowTow"
        ></cd-breadcrumb>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-breadcrumb :options="options" separatorIcon="rightArrowTow">&lt;/cd-breadcrumb>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let options = ref([
                {
                    value: "homepage",
                    to: "/",
                },
                {
                    value: "button",
                    to: "/button",
                },
                {
                    value: "button list",
                },
                {
                    value: "button detail",
                },
            ]);
            return{
                options
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Breadcrumb 属性
      </h2>
      <cd-table
        :data="breadcrumbAttributesForm"
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
    //   测试
    let options = ref([
      {
        value: "homepage",
        to: "/",
      },
      {
        value: "button",
        to: "/button",
      },
      {
        value: "button list",
      },
      {
        value: "button detail",
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
        title: "图标分隔符",
      },
      {
        anchorName: "three",
        title: "Breadcrumb 属性",
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
    let breadcrumbAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "options",
        explain: "组件数据，对象数组，必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "separator",
        explain: "分隔符",
        type: "string",
        optional: "--",
        default: "/",
      },
      {
        property: "separatorIcon",
        explain: "图标名",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "height",
        explain: "高度,最小为20",
        type: "number",
        optional: "--",
        default: "24",
      },
      {
        property: "replace",
        explain: "如果设置该属性为 true, 导航将不会留下历史记录",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      options,
      breadcrumbAttributesForm,
    };
  },
};
</script>

<style>
</style>