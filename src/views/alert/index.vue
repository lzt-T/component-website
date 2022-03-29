<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Alert 提示</h1>
      <p class="cd-public-p">用于页面中展示重要的提示信息</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">Alert 组件不属于浮层元素，不会自动消失或关闭</p>
      <p class="cd-public-p">
        Alert 组件提供四种类型，由 <code>type</code> 属性指定，默认值为
        <code>info</code>
      </p>
      <div class="cd-public-div-frame">
        <cd-alert title="success alert" type="success"></cd-alert>
        <br />
        <cd-alert title="info alert" type="info"></cd-alert>
        <br />
        <cd-alert title="warning alert" type="warning"></cd-alert>
        <br />
        <cd-alert title="error alert" type="error"></cd-alert>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-alert title="success alert" type="success">&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="info alert" type="info">&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="warning alert" type="warning">&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="error alert" type="error">&lt;/cd-alert>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">显示图标</h2>
      <p class="cd-public-p">你可以通过为 Alert 组件添加图标来提高可读性</p>
      <p class="cd-public-p">
        通过设置 <code>showIcon</code> 属性来显示 Alert 的
        icon，这能更有效地向用户展示你的显示意图
      </p>
      <div class="cd-public-div-frame">
        <cd-alert title="success alert" type="success" showIcon></cd-alert>
        <br />
        <cd-alert title="info alert" type="info" showIcon></cd-alert>
        <br />
        <cd-alert title="warning alert" type="warning" showIcon></cd-alert>
        <br />
        <cd-alert title="error alert" type="error" showIcon></cd-alert>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-alert title="success alert" type="success" showIcon>&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="info alert" type="info" showIcon>&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="warning alert" type="warning" showIcon>&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="error alert" type="error" showIcon>&lt;/cd-alert>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">文字居中</h2>
      <p class="cd-public-p">使用 <code>center</code> 属性来让文字水平居中</p>
      <div class="cd-public-div-frame">
        <cd-alert
          title="success alert"
          type="success"
          showIcon
          center
        ></cd-alert>
        <br />
        <cd-alert title="info alert" type="info" showIcon center></cd-alert>
        <br />
        <cd-alert
          title="warning alert"
          type="warning"
          showIcon
          center
        ></cd-alert>
        <br />
        <cd-alert title="error alert" type="error" showIcon center></cd-alert>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-alert
          title="success alert"
          type="success"
          showIcon
          center
        >&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="info alert" type="info" showIcon center>&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert
          title="warning alert"
          type="warning"
          showIcon
          center
        >&lt;/cd-alert>
        &lt;br />
        &lt;cd-alert title="error alert" type="error" showIcon center>&lt;/cd-alert>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">详细信息</h2>
      <p class="cd-public-p">
        为 Alert 组件添加一个更加详细的描述来使用户了解更多信息
      </p>
      <p class="cd-public-p">
        除了必填的 <code>title</code> 属性外，你可以设置
        <code>description</code>
        属性来帮助你更好地介绍，我们称之为辅助性文字。
        辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。
      </p>
      <div class="cd-public-div-frame">
        <cd-alert
          title="with description"
          type="success"
          description="This is a description."
        />
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-alert
          title="with description"
          type="success"
          description="This is a description."
        />
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        带有图标的详细信息
      </h2>
      <p class="cd-public-p">这是一个带有图标和描述的例子</p>
      <div class="cd-public-div-frame">
        <cd-alert
          title="success alert"
          type="success"
          description="more text description"
          showIcon
        />
        <br />
        <cd-alert
          title="info alert"
          type="info"
          description="more text description"
          showIcon
        />
        <br />
        <cd-alert
          title="warning alert"
          type="warning"
          description="more text description"
          showIcon
        />
        <br />
        <cd-alert
          title="error alert"
          type="error"
          description="more text description"
          showIcon
        />
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-alert
      title="success alert"
      type="success"
      description="more text description"
      showIcon
    />
    &lt;br />
  &lt;cd-alert
      title="info alert"
      type="info"
      description="more text description"
      showIcon
    />
    &lt;br />
    &lt;cd-alert
      title="warning alert"
      type="warning"
      description="more text description"
      showIcon
    />
    &lt;br />
    &lt;cd-alert
      title="error alert"
      type="error"
      description="more text description"
      showIcon
    >
  &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Alert 属性</h2>
      <cd-table
        :data="alertAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">Alert 事件</h2>
      <cd-table
        :data="alertEvent"
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
        title: "显示图标",
      },
      {
        anchorName: "three",
        title: "文字居中",
      },
      {
        anchorName: "four",
        title: "详细信息",
      },
      {
        anchorName: "five",
        title: "带有图标的详细信息",
      },
      {
        anchorName: "six",
        title: "Alert 属性",
      },
      {
        anchorName: "seven",
        title: "Alert 事件",
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
    let alertAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "title",
        explain: "标题,必传",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "type",
        explain: "类型",
        type: "success | warning | info | error",
        optional: "--",
        default: "info",
      },
      {
        property: "description",
        explain: "描述文本",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "closable",
        explain: "是否可以关闭",
        type: "boolean",
        optional: "true/false",
        default: "true",
      },
      {
        property: "center",
        explain: "文本是否居中",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "showIcon",
        explain: "是否显示图标",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);

    interface IAlertEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let alertEvent = ref<IAlertEvent[]>([
      {
        property: "close",
        explain: "当点击关闭按钮时触发",
        parameter: "--",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      alertAttributesForm,
      alertEvent,
    };
  },
};
</script>

<style>
</style>