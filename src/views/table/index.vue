<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Table 表格</h1>
      <p class="cd-public-p">用于展示多条结构类似的数据</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础表格</h2>
      <p class="cd-public-p">
        向组件 <code>data</code> 属性传入对象数组,使用
        <code>listName</code> 向组件传入列名
      </p>
      <div class="cd-public-div-frame">
        <cd-table
          :data="tableData"
          :listName="['date', 'name', 'address']"
        ></cd-table>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-table
          :data="tableData"
          :listName="['date', 'name', 'address']"
        >&lt;/cd-table>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
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
                tableData
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">带斑马纹表格</h2>
      <p class="cd-public-p">
        使用带斑马纹的表格，可以更容易区分出不同行的数据
      </p>
      <p class="cd-public-p">
        stripe 属性可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹
      </p>
      <div class="cd-public-div-frame">
        <cd-table
          :data="tableData"
          :listName="['date', 'name', 'address']"
          stripe
        ></cd-table>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-table
          :data="tableData"
          :listName="['date', 'name', 'address']"
          stripe
        >&lt;/cd-table>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
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
                tableData
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">带边框表格</h2>
      <p class="cd-public-p">
        默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用
        <code>border</code> 属性，把该属性设置为 <code>true</code> 即可启用
      </p>
      <div class="cd-public-div-frame">
        <cd-table
          :data="tableData"
          :listName="['date', 'name', 'address']"
          border
        ></cd-table>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-table
          :data="tableData"
          :listName="['date', 'name', 'address']"
          border
        >&lt;/cd-table>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
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
                tableData
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">固定表头</h2>
      <p class="cd-public-p">纵向内容过多时，可选择固定表头</p>
      <p class="cd-public-p">
        使用时设置 <code>maxHeight</code> 属性,同时设置
        <code>fixedHeader</code> 属性为 <code>true</code>
      </p>
      <div class="cd-public-div-frame">
        <cd-table
          :data="tableData1"
          :listName="['date', 'name', 'address']"
          :maxHeight="250"
          fixedHeader
        ></cd-table>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-table
          :data="tableData1"
          :listName="['date', 'name', 'address']"
          :maxHeight="250"
          fixedHeader
        >&lt;/cd-table>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            const tableData1 = [
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
                {
                    date: "2016-05-08",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles",
                },
                {
                    date: "2016-05-06",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles",
                },
                {
                    date: "2016-05-07",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles",
                },
            ];
            return{
                tableData1
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Table 属性</h2>
      <cd-table
        :data="tableAttributesForm"
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
    const tableData1 = [
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
      {
        date: "2016-05-08",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-06",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-07",
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
        title: "禁用状态",
      },
      {
        anchorName: "three",
        title: "图标链接",
      },
      {
        anchorName: "four",
        title: "Link 属性",
      },
      {
        anchorName: "five",
        title: "Link 插槽",
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
    let tableAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "data",
        explain: "传入一个对象数组,作为表格数据,必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "listName",
        explain: "传入一个字符串数组,作为表格列名,必传",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "stripe",
        explain: "是否为斑马纹 table",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "border",
        explain: "是否带有纵向边框",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "fixedHeader",
        explain: "是否固定表头",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "maxHeight",
        explain: "表单的最大高度",
        type: "number",
        optional: "--",
        default: "--",
      },
    ]);

    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      tableData,
      tableData1,
      tableAttributesForm,
    };
  },
};
</script>

<style>
</style>