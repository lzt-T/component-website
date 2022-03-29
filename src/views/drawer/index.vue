<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Drawer 抽屉</h1>
      <p class="cd-public-p">
        有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长,
        亦或是你需要临时展示一些文档, <code>Drawer</code> 能带来不一样的体验.
      </p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        呼出一个临时的侧边栏，可以通过
        <code>direction</code> 属性来控制方向，支持上下左右四个方向
      </p>
      <p class="cd-public-p">
        需要设置 <code>v-model</code> 属性，它接收 <code>Boolean</code>，当为
        <code>true</code> 时显示 Drawer
      </p>
      <div class="cd-public-div-frame">
        <cd-button
          text
          color="#409eFF"
          @click="changeIsDrawer(true)"
          :width="200"
          >click to open the Drawer</cd-button
        >
        <cd-drawer v-model="isDrawer" title="I am the title" :zIndex="2">
          <div>Hello,Word</div>
        </cd-drawer>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-button
          text
          color="#409eFF"
          @click="changeIsDrawer(true)"
          :width="200"
          >click to open the Drawer&lt;/cd-button
        >
        &lt;cd-drawer v-model="isDrawer" title="I am the title" :zIndex="2">
          &lt;div>Hello,Word&lt;/div>
        &lt;/cd-drawer>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let isDrawer = ref&lt;boolean>(false);
            const changeIsDrawer = (data: boolean) => {
            isDrawer.value = data;
            };
            return{
                isDrawer,
                changeIsDrawer
            }
        }
    }
    &lt;/script>    
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">自定义内容</h2>
      <p class="cd-public-p">可以丰富内容</p>
      <div class="cd-public-div-frame">
        <cd-button
          text
          color="#409eFF"
          @click="changeIsDrawer1(true)"
          :width="200"
          >click to open the Drawer</cd-button
        >
        <cd-drawer v-model="isDrawer1" title="" :zIndex="2">
          <cd-table
            :data="tableData"
            :listName="['date', 'name', 'address']"
          ></cd-table>
        </cd-drawer>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-button
          text
          color="#409eFF"
          @click="changeIsDrawer1(true)"
          :width="200"
          >click to open the Drawer&lt;/cd-button
        >
        &lt;cd-drawer v-model="isDrawer1" title="" :zIndex="2">
          &lt;cd-table
            :data="tableData"
            :listName="['date', 'name', 'address']"
          >&lt;/cd-table>
        &lt;/cd-drawer>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let isDrawer1 = ref&lt;boolean>(false);
            const changeIsDrawer1 = (data: boolean) => {
            isDrawer1.value = data;
            };
            const tableData = [
            {
                date: "2016-05-03",
                name: "Tom",
                address: "No. 189, Grove St, Los Angeles",
            },
            {
                date: "2016-05-02",
                name: "Tom",
                address: "No. 189, Grove St, Los Angeles",
            },
            {
                date: "2016-05-04",
                name: "Tom",
                address: "No. 189, Grove St, Los Angeles",
            },
            {
                date: "2016-05-01",
                name: "Tom",
                address: "No. 189, Grove St, Los Angeles",
            },
            ];
            return{
                isDrawer1,
                changeIsDrawer1,
                tableData
            }
        }
    }
    &lt;/script>     
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Drawer 属性
      </h2>
      <cd-table
        :data="drawerAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Dialog 事件</h2>
      <cd-table
        :data="drawerEvent"
        :listName="['事件名', '说明', '参数']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Dialog 插槽</h2>
      <cd-table :data="drawerSlot" :listName="['插槽名', '说明']"></cd-table>
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
    let isDrawer = ref<boolean>(false);
    const changeIsDrawer = (data: boolean) => {
      isDrawer.value = data;
    };
    let isDrawer1 = ref<boolean>(false);
    const changeIsDrawer1 = (data: boolean) => {
      isDrawer1.value = data;
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
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
        title: "自定义内容",
      },
      {
        anchorName: "three",
        title: "Drawer 属性",
      },
      {
        anchorName: "four",
        title: "Dialog 事件",
      },
      {
        anchorName: "five",
        title: "Dialog 插槽",
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
    let drawerAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "是否显示 Drawer,必传",
        type: "boolean",
        optional: "--",
        default: "--",
      },
      {
        property: "direction",
        explain: "Drawer 打开的方向",
        type: "string",
        optional: "top/bottom/right/left",
        default: "right",
      },
      {
        property: "size",
        explain: "Drawer 窗体的大小,单位为vw",
        type: "number",
        optional: "--",
        default: "50",
      },
      {
        property: "title",
        explain: "Drawer 的标题",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "zIndex",
        explain: "设置 z-index",
        type: "number",
        optional: "--",
        default: "1",
      },
    ]);

    interface IDrawerEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let drawerEvent = ref<IDrawerEvent[]>([
      {
        property: "open",
        explain: "Dialog 打开的回调",
        parameter: "--",
      },
      {
        property: "close",
        explain: "Dialog 关闭的回调",
        parameter: "--",
      },
    ]);

    interface IDrawerSlot {
      property: string;
      explain: string;
    }
    let drawerSlot = ref<IDrawerSlot[]>([
      {
        property: "--",
        explain: "Drawer 的内容",
      },
    ]);

    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      changeIsDrawer,
      isDrawer,
      changeIsDrawer1,
      isDrawer1,
      tableData,
      drawerAttributesForm,
      drawerEvent,
      drawerSlot,
    };
  },
};
</script>

<style>
</style>