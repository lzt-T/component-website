<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Button 按钮</h1>
      <p class="cd-public-p">常用的操作按钮</p>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="one">基础用法</h2>
      <p class="cd-public-p">
        使用 <code>size</code>、<code> width</code
        >、<code>round</code>、<code>circle</code>、<code>backgroundCcolor</code>、<code
          >color</code
        >
        来定义按钮的样式
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-button-row-margin">
          <cd-button :size="45" :width="120" backgroundCcolor="#409eFF" color="white"
            >button</cd-button
          >
          <cd-button backgroundCcolor="#409eFF" color="white">button</cd-button>
          <cd-button backgroundCcolor="#409eFF" color="white" :size="30" :width="60"
            >button</cd-button
          >
        </cd-row>
        <cd-row :gap="20" class="cd-button-row-margin">
          <cd-button
            round
            :size="45"
            :width="120"
            backgroundCcolor="#409eFF"
            color="white"
            >button</cd-button
          >
          <cd-button round backgroundCcolor="#409eFF" color="white">button</cd-button>
          <cd-button round backgroundCcolor="#409eFF" color="white" :size="30" :width="60"
            >button</cd-button
          >
        </cd-row>
        <cd-row :gap="20" class="cd-button-row-margin">
          <cd-button circle round :size="45" :width="120" backgroundCcolor="#409eFF">
            <cd-icon name="fit" :size="20" color="white"></cd-icon>
          </cd-button>
          <cd-button backgroundCcolor="#409eFF" circle round
            ><cd-icon name="trash" :size="18" color="white"></cd-icon
          ></cd-button>
          <cd-button backgroundCcolor="#409eFF" circle round :size="33" :width="60"
            ><cd-icon name="searchTwo" :size="12" color="white"></cd-icon
          ></cd-button>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-button
      :size="45"
      :width="120"
      backgroundCcolor="#409eFF"
      color="white"
      &gt;button 
    &lt;/cd-button&gt;
    &lt;cd-button backgroundCcolor="#409eFF" color="white" &gt;button &lt;/cd-button &gt;
    &lt;cd-button
      backgroundCcolor="#409eFF"
      color="white"
      :size="30"
      :width="60"
      &gt;button         
    &lt;/cd-button&gt;
 
    &lt;cd-button
      round
      :size="45"
      :width="120"
      backgroundCcolor="#409eFF"
      color="white"
      >button
    &lt;/cd-button>
    &lt;cd-button round backgroundCcolor="#409eFF" color="white">button&lt;/cd-button>
    &lt;cd-button
      round
      backgroundCcolor="#409eFF"
      color="white"
      :size="30"
      :width="60"
      >button
    &lt;/cd-button >   

    &lt;cd-button
      circle
      round
      :size="45"
      :width="120"
      backgroundCcolor="#409eFF"
    >
      &lt;cd-icon name="fit" :size="20" color="white">&lt;/cd-icon>
    &lt;/cd-button>
    &lt;cd-button backgroundCcolor="#409eFF" circle round>
      &lt;cd-icon name="trash" :size="18" color="white">&lt;/cd-icon>
    &lt;/cd-button>
    &lt;cd-button
      backgroundCcolor="#409eFF"
      circle
      round
      :size="33"
      :width="60"
    >
      &lt;cd-icon name="searchTwo" :size="12" color="white">&lt;/cd-icon>
    &lt;/cd-button>
  &lt;/template&gt;        
</pre
        >
      </cd-collapse>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="two">禁用状态</h2>
      <p class="cd-public-p">你可以使用 <code>disabled</code> 属性来定义按钮是否被禁用</p>
      <p class="cd-public-p">
        使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个
        <code>Boolean</code> 类型的值
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-button-row-margin">
          <cd-button
            :size="45"
            :width="120"
            disabled
            backgroundCcolor="#409eFF"
            color="white"
            >button</cd-button
          >
          <cd-button disabled backgroundCcolor="#409eFF" color="white">button</cd-button>
          <cd-button
            disabled
            backgroundCcolor="#409eFF"
            color="white"
            :size="30"
            :width="60"
            >button</cd-button
          >
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt; 
    &lt;cd-button
      :size="45"
      :width="120"
      disabled
      backgroundCcolor="#409eFF"
      color="white"
      >button
    &lt;/cd-button>
    &lt;cd-button disabled backgroundCcolor="#409eFF" color="white">button&lt;/cd-button>
    &lt;cd-button
      disabled
      backgroundCcolor="#409eFF"
      color="white"
      :size="30"
      :width="60"
      >button
    &lt;/cd-button>
  &lt;/template&gt; 
        </pre>
      </cd-collapse>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="three">文字按钮</h2>
      <p class="cd-public-p">没有边框和背景色的按钮</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-button-row-margin">
          <cd-button text color="#409eFF" :width="120">Text Button</cd-button>
          <cd-button text disabled :width="120">Text Button</cd-button>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-button text color="#409eFF" :width="120">Text Button&lt;/cd-button>
    &lt;cd-button text disabled :width="120">Text Button&lt;/cd-button>
  &lt;/template&gt;  
        </pre>
      </cd-collapse>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="four">图标按钮</h2>
      <p class="cd-public-p">
        使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用
      </p>
      <p class="cd-public-p">
        使用 <code>icon</code> 属性来为按钮添加图标。 你可以在 <code>icon</code>
        组件里找到有组件库提供的内置图标
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-button-row-margin">
          <cd-button> <cd-icon name="searchTwo" :size="17"></cd-icon>搜索 </cd-button>
          <cd-button> <cd-icon name="setting" :size="17"></cd-icon>设置 </cd-button>
          <cd-button :width="120">
            <cd-icon name="cloudDownload" :size="17"></cd-icon>云下载
          </cd-button>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;  
    &lt;cd-button>
      &lt;cd-icon name="searchTwo" :size="17">&lt;/cd-icon>搜索
    &lt;/cd-button>
    &lt;cd-button>
      &lt;cd-icon name="setting" :size="17">&lt;/cd-icon>设置
    &lt;/cd-button>
    &lt;cd-button :width="120">
      &lt;cd-icon name="cloudDownload" :size="17">&lt;/cd-icon>云下载
    &lt;/cd-button>
  &lt;/template&gt;  
        </pre>
      </cd-collapse>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="five">加载中</h2>
      <p class="cd-public-p">点击按钮来加载数据，并向用户反馈加载状态</p>
      <p class="cd-public-p">
        通过设置 <code>loading</code> 属性为 <code>true</code> 来显示加载中状态,并通过设置
        <code>lAnimation</code> 来设定加载动画
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-button-row-margin">
          <cd-button loading :width="120">Loading</cd-button>
          <cd-button loading :width="120" lAnimation="loading-one">Loading</cd-button>
          <cd-button loading :width="120" lAnimation="loading-two">Loading</cd-button>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;/template&gt; 
    &lt;cd-button loading :width="120">Loading&lt;/cd-button>
    &lt;cd-button loading :width="120" lAnimation="loading-one">Loading&lt;/cd-button>
    &lt;cd-button loading :width="120" lAnimation="loading-two">Loading&lt;/cd-button>
  &lt;/template&gt; 
        </pre>
      </cd-collapse>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="six">Button 属性</h2>
      <cd-table
        :data="attributesFormData"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 class="cd-public-headline-h2" :ref="anchor" id="seven">Button 插槽</h2>
      <cd-table :data="buttonSlot" :listName="['插槽名', '说明']"></cd-table>
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
import useRightNavShow from "@/hooks/useRightNavShow";
import useCurrentAbchor from "@/hooks/useCurrentAnchor";
import rightNav from "@/components/rightNav/inidex.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    rightNav,
  },
  setup() {
    let currentAnchor = ref<number>(-1);
    let anchorArray = ref<object[]>([]);
    const anchor = (el: object) => {
      anchorArray.value.push(el);
    };
    useCurrentAbchor(anchorArray, anchor, currentAnchor);
    // 锚点
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
        title: "文字按钮",
      },
      {
        anchorName: "four",
        title: "图标按钮",
      },
      {
        anchorName: "five",
        title: "加载中",
      },
      {
        anchorName: "six",
        title: "Button 属性",
      },
      {
        anchorName: "seven",
        title: "Button 插槽",
      },
    ]);
    // attributesForm数据
    interface attributesfrom {
      property: string;
      explain: string;
      type: string;
      optional: string;
      default: string;
    }
    let attributesFormData = ref<attributesfrom[]>([
      {
        property: "size",
        explain: "高度",
        type: "number",
        optional: "--",
        default: "38",
      },
      {
        property: "width",
        explain: "宽度",
        type: "number",
        optional: "--",
        default: "83",
      },
      {
        property: "backgroundCcolor",
        explain: "背景色",
        type: "string",
        optional: "--",
        default: "white",
      },
      {
        property: "color",
        explain: "字体颜色",
        type: "string",
        optional: "--",
        default: "black",
      },
      {
        property: "round",
        explain: "是否是椭圆",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "circle",
        explain: "是否是圆行",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "loading",
        explain: "是否处于加载状态",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "lAnimation",
        explain: "加载状态的动画",
        type: "string",
        optional: "loading/loading-one/loading-two",
        default: "loading",
      },
      {
        property: "disabled",
        explain: "是否禁用",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "text",
        explain: "是否处于文字状态",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);
    interface IborderSlot {
      property: string;
      explain: string;
    }
    let buttonSlot = ref<IborderSlot[]>([
      {
        property: "--",
        explain: "自定义默认内容",
      },
    ]);
    // 右边导航
    let isRightNavShow = ref<boolean>(true);
    useRightNavShow(isRightNavShow);
    return {
      isRightNavShow,
      attributesFormData,
      rightNavData,
      anchor,
      currentAnchor,
      buttonSlot,
    };
  },
};
</script>

<style scoped>
.cd-button-row-margin {
  margin: 10px 0px;
  flex-wrap: wrap;
}
</style>
