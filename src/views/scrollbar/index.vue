<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Scrollbar 滚动条</h1>
      <p class="cd-public-p">用于替换浏览器原生滚动条</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        通过
        <code>height</code> 属性设置滚动条高度，若不设置则根据父容器高度自适应
      </p>
      <div class="cd-public-div-frame">
        <cd-scrollbar height="300px">
          <div
            v-for="(data, ind) in 10"
            :key="ind"
            class="cd-website-scroll-everydiv"
          >
            {{ ind }}
          </div>
        </cd-scrollbar>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-scrollbar height="300px">
      &lt;div
        v-for="(data, ind) in 10"
        :key="ind"
        class="cd-website-scroll-everydiv"
      >
        {{ ind }}
      &lt;/div>
    &lt;/cd-scrollbar>
  &lt;/template&gt;
  &lt;style scoped>
  .cd-website-scroll-everydiv {
  height: 38px;
  line-height: 38px;
  margin: 8px 0px;
  text-align: center;
  color: #409eff;
  background-color: #ecf5ff;
  }
  &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">横向滚动</h2>
      <cd-alter
        type="warning"
        title="如果是使用flex布局,请注意设定子元素的 width:0 "
        showIcon
        :closable="false"
      ></cd-alter>
      <p class="cd-public-p">
        通过 <code>crosswise</code> 属性来设置元素横向显示
      </p>
      <div class="cd-public-div-frame">
        <cd-scrollbar height="60px" crosswise>
          <div
            v-for="(data, ind) in 10"
            :key="ind"
            class="cd-website-scroll-everyspan"
          >
            {{ ind }}
          </div>
        </cd-scrollbar>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;div class="cd-public-div-frame">
      &lt;cd-scrollbar height="60px" crosswise>
        &lt;div
          v-for="(data, ind) in 10"
          :key="ind"
          class="cd-website-scroll-everyspan"
        >
          {{ ind }}
        &lt;/div>
      &lt;/cd-scrollbar>
    &lt;/div>
  &lt;/template&gt;
  &lt;style scoped>
  .cd-public-div-frame{
    padding: 24px;
    margin: 5px 0px;
    border: 1px solid  #dcdfe6;
    border-radius: 5px;
  }
  .cd-website-scroll-everyspan {
    display: inline-block;
    width: 90px;
    height: 38px;
    margin: 8px 8px;
    line-height: 38px;
    text-align: center;
    color: #409eff;
    background-color: #ecf5ff;
  }
  &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">最大高度</h2>
      <p class="cd-public-p">
        通过<code>maxHeight</code>属性设定最大高度,当元素高度超过最大高度,才会显示滚动条
      </p>
      <div class="cd-public-div-frame">
        <cd-button :width="120" @click="onAdd">Add Item</cd-button>
        <cd-button :width="120" @click="onDelete">Delete Item</cd-button>
        <cd-scrollbar maxHeight="260px">
          <div
            v-for="(data, ind) in num"
            :key="ind"
            class="cd-website-scroll-everydiv"
          >
            {{ ind }}
          </div>
        </cd-scrollbar>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-button :width="120" @click="onAdd">Add Item&lt;/cd-button>
    &lt;cd-button :width="120" @click="onDelete">Delete Item&lt;/cd-button>
    &lt;cd-scrollbar maxHeight="260px">
      &lt;div
        v-for="(data, ind) in num"
        :key="ind"
        class="cd-website-scroll-everydiv"
      >
        {{ ind }}
      &lt;/div>
    &lt;/cd-scrollbar>
  &lt;/template&gt;
  &lt;script lang="ts">
    export default {
      setup() {
        let num = ref&lt;number>(4);
        function onAdd() {
          num.value++;
        }
        function onDelete() {
          if (num.value > 0) {
            num.value--;
          }
        }
        return {
          onAdd,
          onDelete,
          num,
        };
      }
    }
  &lt;/script>
  &lt;style scoped>
  .cd-website-scroll-everydiv {
  height: 38px;
  line-height: 38px;
  margin: 8px 0px;
  text-align: center;
  color: #409eff;
  background-color: #ecf5ff;
  }
  &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        Scrollbar 属性
      </h2>
      <cd-table
        :data="scrollbarAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        Scrollbar 插槽
      </h2>
      <cd-table :data="scrollbarSlot" :listName="['插槽名', '说明']"></cd-table>
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
    // 数据
    let num = ref<number>(4);
    function onAdd() {
      num.value++;
    }
    function onDelete() {
      if (num.value > 0) {
        num.value--;
      }
    }
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
        title: "横向滚动",
      },
      {
        anchorName: "three",
        title: "最大高度",
      },
      {
        anchorName: "four",
        title: "Scrollbar 属性",
      },
      {
        anchorName: "five",
        title: "Scrollbar 插槽",
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
    let scrollbarAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "height",
        explain: "滚动条的高度,带单位",
        type: "string",
        optional: "--",
        default: "100%",
      },
      {
        property: "native",
        explain: "是否使用原生的滚动条",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "always",
        explain: "滚动条总是显示",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "maxHeight",
        explain: "滚动条最大高度",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "crosswise",
        explain: "元素是否一行显示",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);
    interface IScrollbarSlot {
      property: string;
      explain: string;
    }
    let scrollbarSlot = ref<IScrollbarSlot[]>([
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
      onAdd,
      onDelete,
      num,
      scrollbarAttributesForm,
      scrollbarSlot,
    };
  },
};
</script>

<style scoped>
.cd-website-scroll-everydiv {
  height: 38px;
  line-height: 38px;
  margin: 8px 0px;
  text-align: center;
  color: #409eff;
  background-color: #ecf5ff;
}
.cd-website-scroll-everyspan {
  display: inline-block;
  width: 90px;
  height: 38px;
  margin: 8px 8px;
  line-height: 38px;
  text-align: center;
  color: #409eff;
  background-color: #ecf5ff;
}
</style>