<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Pagination 分页</h1>
      <p class="cd-public-p">当数据量过多时，使用分页分解数据</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        <code>total</code> 表示总条目数,<code>pageSize</code>
        用于设置每页显示的页码数量
      </p>
      <div class="cd-public-div-frame">
        <div>When you have few pages</div>
        <br />
        <cd-pagination :total="50"></cd-pagination>
        <br />
        <div>When you have more than 7 pages</div>
        <br />
        <cd-pagination :total="100"></cd-pagination>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;div>When you have few pages&lt;/div>
        &lt;br />
        &lt;cd-pagination :total="50">&lt;/cd-pagination>
        &lt;br />
        &lt;div>When you have more than 7 pages&lt;/div>
        &lt;br />
        &lt;cd-pagination :total="100">&lt;/cd-pagination>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">
        设置最大页码按钮数
      </h2>
      <p class="cd-public-p">
        默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过
        <code>pagerCount</code> 属性可以设置最大页码按钮数。
      </p>
      <div class="cd-public-div-frame">
        <cd-pagination
          :pageSize="20"
          :pagerCount="11"
          :total="1000"
        ></cd-pagination>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-pagination
          :pageSize="20"
          :pagerCount="11"
          :total="1000"
        >&lt;/cd-pagination>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">尺寸</h2>
      <p class="cd-public-p">通过 <code>height</code> 来设置大小</p>
      <div class="cd-public-div-frame">
        <cd-pagination :total="100" :height="38"></cd-pagination>
        <br />
        <cd-pagination :total="100"></cd-pagination>
        <br />
        <cd-pagination :total="100" :height="24"></cd-pagination>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-pagination :total="100" :height="38">&lt;/cd-pagination>
        &lt;br />
        &lt;cd-pagination :total="100">&lt;/cd-pagination>
        &lt;br />
        &lt;cd-pagination :total="100" :height="24">&lt;/cd-pagination>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">附加功能</h2>
      <p class="cd-public-p">根据场景需要，可以添加其他功能模块</p>
      <p class="cd-public-p">
        <code>pageSizes</code>
        接受一个整数类型的数组，数组元素为展示的选择每页显示个数的选项，[100,
        200, 300, 400] 表示四个选项，每页显示 100 个，200 个，300 个或者 400
        个。
      </p>
      <p class="cd-public-p">设置 <code>goTo</code> 属性可实现跳转</p>
      <div class="cd-public-div-frame">
        <cd-pagination
          :total="2000"
          :pageSizes="[100, 200, 300, 400]"
        ></cd-pagination>
        <br />
        <cd-pagination :total="100" goTo></cd-pagination>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-pagination
          :total="2000"
          :pageSizes="[100, 200, 300, 400]"
        >&lt;/cd-pagination>
        &lt;br />
        &lt;cd-pagination :total="100" goTo>&lt;/cd-pagination>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        Pagination 分页
      </h2>
      <cd-table
        :data="paginationAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">
        Pagination 事件
      </h2>
      <cd-table
        :data="paginationEvent"
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
        title: "设置最大页码按钮数",
      },
      {
        anchorName: "three",
        title: "尺寸",
      },
      {
        anchorName: "four",
        title: "附加功能",
      },
      {
        anchorName: "five",
        title: "Pagination 分页",
      },
      {
        anchorName: "six",
        title: "Pagination 事件",
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
    let paginationAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "total",
        explain: "总条目数,必传",
        type: "number",
        optional: "--",
        default: "--",
      },
      {
        property: "height",
        explain: "尺寸",
        type: "number",
        optional: "--",
        default: "32",
      },
      {
        property: "pageSize",
        explain: "每页显示条目个数",
        type: "number",
        optional: "--",
        default: "10",
      },
      {
        property: "pagerCount",
        explain: "最大页码按钮数",
        type: "numbner",
        optional: "--",
        default: "7",
      },
      {
        property: "pageSizes",
        explain: "每页显示个数选择器的选项设置",
        type: "array",
        optional: "--",
        default: "--",
      },
      {
        property: "goTo",
        explain: "是否开启跳转",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);

    interface IPaginationEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let paginationEvent = ref<IPaginationEvent[]>([
      {
        property: "sizeChange",
        explain: "pageSize 改变时触发",
        parameter: "新每页条数",
      },
      {
        property: "currentChange",
        explain: "当页码发生改变时触发",
        parameter: "新当前页",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      paginationAttributesForm,
      paginationEvent,
    };
  },
};
</script>

<style>
</style>