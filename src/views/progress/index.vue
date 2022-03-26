<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Progress 进度条</h1>
      <p class="cd-public-p">用于展示操作进度，告知用户当前状态和预期</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">直线进度条</h2>
      <p class="cd-public-p">
        Progress 组件设置
        <code>percentage</code> 属性即可，表示进度条对应的百分比
        该属性必填，并且必须在 0-100范围内,可以通过
        <code>color</code> 属性来设置进度条的颜色
      </p>
      <p class="cd-public-p">
        你可以通过设置 <code>format</code> 来自定义文本内容
      </p>
      <div class="cd-public-div-frame">
        <div class="cd-website-propgress-frame">
          <cd-progress :percentage="50"></cd-progress>
        </div>
        <div class="cd-website-propgress-frame">
          <cd-progress :percentage="100" :format="format"></cd-progress>
        </div>
        <div class="cd-website-propgress-frame">
          <cd-progress :percentage="50" color="#67C23A"></cd-progress>
        </div>
        <div class="cd-website-propgress-frame">
          <cd-progress :percentage="50" color="#F56C6C"></cd-progress>
        </div>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;div class="cd-website-propgress-frame">
            &lt;cd-progress :percentage="50">&lt;/cd-progress>
        &lt;/div>
        &lt;div class="cd-website-propgress-frame">
            &lt;cd-progress :percentage="100" :format="format">&lt;/cd-progress>
        &lt;/div>
        &lt;div class="cd-website-propgress-frame">
            &lt;cd-progress :percentage="50" color="#67C23A">&lt;/cd-progress>
        &lt;/div>
        &lt;div class="cd-website-propgress-frame">
            &lt;cd-progress :percentage="50" color="#F56C6C">&lt;/cd-progress>
        &lt;/div>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
        const format = (percentage: number) =>
        percentage === 100 ? "Full" : `${percentage}%`;
        return{
            format
        }
        }
    }
    &lt;/script>     

    &lt;style scoped>
    .cd-website-propgress-frame {
    margin: 25px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">
        进度条内显示百分比标识
      </h2>
      <p class="cd-public-p">百分比不占用额外控件，适用于文件上传等场景</p>
      <p class="cd-public-p">
        Progress 组件可通过 <code>height</code>、<code>width</code>
        属性更改进度条的大小，并可通过
        <code>textInside</code> 属性来改变进度条内部的文字
      </p>
      <div class="cd-public-div-frame">
        <div class="cd-website-propgress-frame">
          <cd-progress
            :percentage="70"
            :height="26"
            :width="400"
            textInside
          ></cd-progress>
        </div>
        <div class="cd-website-propgress-frame">
          <cd-progress
            :percentage="100"
            color="#67C23A"
            :height="26"
            :width="400"
            textInside
          ></cd-progress>
        </div>
        <div class="cd-website-propgress-frame">
          <cd-progress
            :percentage="80"
            color="#F56C6C"
            :height="26"
            :width="400"
            textInside
          ></cd-progress>
        </div>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
       &lt;div class="cd-website-propgress-frame">
          &lt;cd-progress
            :percentage="70"
            :height="26"
            :width="400"
            textInside
          >&lt;/cd-progress>
        &lt;/div>
        &lt;div class="cd-website-propgress-frame">
          &lt;cd-progress
            :percentage="100"
            color="#67C23A"
            :height="26"
            :width="400"
            textInside
          >&lt;/cd-progress>
        &lt;/div>
        &lt;div class="cd-website-propgress-frame">
          &lt;cd-progress
            :percentage="80"
            color="#F56C6C"
            :height="26"
            :width="400"
            textInside
          >&lt;/cd-progress>
        &lt;/div>
    &lt;/template&gt;

    &lt;style scoped>
    .cd-website-propgress-frame {
    margin: 25px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">环形进度条</h2>
      <p class="cd-public-p">
        Progress 组件可通过 <code>type</code>
        属性来指定使用环形进度条，在环形进度条中，还可以通过
        <code>width</code>、<code>height</code>
        属性来设置其大小。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="30" flexWrap="wrap">
          <cd-progress type="circle" :percentage="0" :width="100"></cd-progress>
          <cd-progress
            type="circle"
            :percentage="25"
            :width="100"
          ></cd-progress>
          <cd-progress
            type="circle"
            :percentage="50"
            :width="100"
            color="#67C23A"
          ></cd-progress>
          <cd-progress
            type="circle"
            color="#F56C6C"
            :percentage="100"
            :width="100"
          ></cd-progress>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="30" flexWrap="wrap">
          &lt;cd-progress type="circle" :percentage="0" :width="100">&lt;/cd-progress>
          &lt;cd-progress
            type="circle"
            :percentage="25"
            :width="100"
          >&lt;/cd-progress>
          &lt;cd-progress
            type="circle"
            :percentage="50"
            :width="100"
            color="#67C23A"
          >&lt;/cd-progress>
          &lt;cd-progress
            type="circle"
            color="#F56C6C"
            :percentage="100"
            :width="100"
          >&lt;/cd-progress>
        &lt;/cd-row>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">动画进度条</h2>
      <p class="cd-public-p">
        使用 animation 属性设置开启动画,只在 <code>type</code>属性为
        <code>line</code>时有效
      </p>
      <div class="cd-public-div-frame">
        <div class="cd-website-propgress-frame">
          <cd-progress :percentage="50" animation></cd-progress>
        </div>
        <div class="cd-website-propgress-frame">
          <cd-progress :percentage="25" color="#67C23A" animation></cd-progress>
        </div>
        <div class="cd-website-propgress-frame">
          <cd-progress :percentage="80" color="#F56C6C" animation></cd-progress>
        </div>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;div class="cd-website-propgress-frame">
          &lt;cd-progress :percentage="50" animation>&lt;/cd-progress>
        &lt;/div>
        &lt;div class="cd-website-propgress-frame">
          &lt;cd-progress :percentage="25" color="#67C23A" animation>&lt;/cd-progress>
        &lt;/div>
        &lt;div class="cd-website-propgress-frame">
          &lt;cd-progress :percentage="80" color="#F56C6C" animation>&lt;/cd-progress>
        &lt;/div>
    &lt;/template&gt;

    &lt;style scoped>
    .cd-website-propgress-frame {
    margin: 25px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        Progress 属性
      </h2>
      <cd-table
        :data="progressAttributesForm"
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
    const format = (percentage: number) =>
      percentage === 100 ? "Full" : `${percentage}%`;
    //   对于锚点的处理
    interface rightNav {
      anchorName: string;
      title: string;
    }
    let rightNavData = ref<rightNav[]>([
      {
        anchorName: "one",
        title: "直线进度条",
      },
      {
        anchorName: "two",
        title: "进度条内显示百分比标识",
      },
      {
        anchorName: "three",
        title: "环形进度条",
      },
      {
        anchorName: "four",
        title: "动画进度条",
      },
      {
        anchorName: "five",
        title: "Progress 属性",
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
    let progressAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "percentage",
        explain: "百分比，必填",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "type",
        explain: "进度条类型",
        type: "string",
        optional: "line/circle",
        default: "line",
      },
      {
        property: "width",
        explain: "宽度,最小为120",
        type: "number",
        optional: "--",
        default: "200",
      },
      {
        property: "height",
        explain: "进度条的厚度,最小为6",
        type: "number",
        optional: "--",
        default: "6",
      },
      {
        property: "textInside",
        explain: "进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "showText",
        explain: "是否显示进度条文字内容",
        type: "boolean",
        optional: "true/false",
        default: "true",
      },
      {
        property: "format",
        explain: "指定进度条文字内容",
        type: "function(percentage)",
        optional: "--",
        default: "--",
      },
      {
        property: "color",
        explain: "进度条背景色",
        type: "string",
        optional: "--",
        default: "#409eff",
      },
      {
        property: "animation",
        explain: "是否开启动画效果,（仅 type 为 'line' 时可用）",
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
      format,
      progressAttributesForm,
    };
  },
};
</script>

<style scoped>
.cd-website-propgress-frame {
  margin: 25px 0px;
}
</style>