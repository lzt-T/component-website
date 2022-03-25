<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Collapse 折叠面板</h1>
      <p class="cd-public-p">通过折叠面板收纳内容区域</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">通过 <code>title</code> 属性给组件设定标题</p>
      <div class="cd-public-div-frame">
        <cd-collapse title="按钮展示">
          <div class="cd-collpasel-show-frame">
            <cd-row :gap="20" textAlign="left">
              <cd-button>
                <cd-icon name="searchTow" :size="17"></cd-icon>搜索
              </cd-button>
              <cd-button>
                <cd-icon name="setting" :size="17"></cd-icon>设置
              </cd-button>
              <cd-button :width="120">
                <cd-icon name="cloudDownload" :size="17"></cd-icon>云下载
              </cd-button>
            </cd-row>
          </div>
        </cd-collapse>
        <cd-collapse title="链接展示">
          <div class="cd-collpasel-show-frame">
            <cd-row :gap="20" flexWrap="wrap">
              <cd-link>default</cd-link>
              <cd-link color="#409EFF">primary</cd-link>
              <cd-link color="#67C23A">success</cd-link>
              <cd-link color="#E6A23C">warning</cd-link>
              <cd-link color="#F56C6C">danger</cd-link>
              <cd-link color="#909399">info</cd-link>
            </cd-row>
          </div>
        </cd-collapse>
      </div>
      <cd-collapse title="查看代码">
        <pre>
  &lt;template&gt;
    &lt;cd-collapse title="按钮展示">
      &lt;div class="cd-collpasel-show-frame">
        &lt;cd-row :gap="20" textAlign="left">
          &lt;cd-button>
            &lt;cd-icon name="searchTow" :size="17">&lt;/cd-icon>搜索
          &lt;/cd-button>
          &lt;cd-button>
            &lt;cd-icon name="setting" :size="17">&lt;/cd-icon>设置
          &lt;/cd-button>
          &lt;cd-button :width="120">
            &lt;cd-icon name="cloudDownload" :size="17">&lt;/cd-icon>云下载
          &lt;/cd-button>
        &lt;/cd-row>
      &lt;/div>
    &lt;/cd-collapse>
    &lt;cd-collapse title="链接展示">
      &lt;div class="cd-collpasel-show-frame">
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-link>default&lt;/cd-link>
          &lt;cd-link color="#409EFF">primary&lt;/cd-link>
          &lt;cd-link color="#67C23A">success&lt;/cd-link>
          &lt;cd-link color="#E6A23C">warning&lt;/cd-link>
          &lt;cd-link color="#F56C6C">danger&lt;/cd-link>
          &lt;cd-link color="#909399">info&lt;/cd-link>
        &lt;/cd-row>
      &lt;/div>
    &lt;/cd-collapse>
  &lt;/template&gt;

  &lt;style scoped>
  .cd-collpasel-show-frame {
    padding: 30px 0px;
  }
  &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">初始状态</h2>
      <p class="cd-public-p">
        设置 <code>state</code> 属性控制组件的初始状态是开/关
      </p>
      <div class="cd-public-div-frame">
        <cd-collapse title="链接展示" state>
          <div class="cd-collpasel-show-frame">
            <cd-row :gap="20" flexWrap="wrap">
              <cd-link>default</cd-link>
              <cd-link color="#409EFF">primary</cd-link>
              <cd-link color="#67C23A">success</cd-link>
              <cd-link color="#E6A23C">warning</cd-link>
              <cd-link color="#F56C6C">danger</cd-link>
              <cd-link color="#909399">info</cd-link>
            </cd-row>
          </div>
        </cd-collapse>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
      &lt;cd-collapse title="链接展示" state>
        &lt;div class="cd-collpasel-show-frame">
          &lt;cd-row :gap="20" flexWrap="wrap">
            &lt;cd-link>default&lt;/cd-link>
            &lt;cd-link color="#409EFF">primary&lt;/cd-link>
            &lt;cd-link color="#67C23A">success&lt;/cd-link>
            &lt;cd-link color="#E6A23C">warning&lt;/cd-link>
            &lt;cd-link color="#F56C6C">danger&lt;/cd-link>
            &lt;cd-link color="#909399">info&lt;/cd-link>
          &lt;/cd-row>
        &lt;/div>
      &lt;/cd-collapse>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Collapse 属性
      </h2>
      <cd-table
        :data="collapseAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        Collapse 插槽
      </h2>
      <cd-table :data="collapseSlot" :listName="['插槽名', '说明']"></cd-table>
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
        title: "初始状态",
      },
      {
        anchorName: "three",
        title: "Collapse 属性",
      },
      {
        anchorName: "four",
        title: "Collapse 插槽",
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
    let collapseAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "title",
        explain: "组件标题",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "height",
        explain: "组件标题高度",
        type: "number",
        optional: "--",
        default: "48",
      },
      {
        property: "state",
        explain: "组件初始状态,开/关",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);
    interface ICollapseSlot {
      property: string;
      explain: string;
    }
    let collapseSlot = ref<ICollapseSlot[]>([
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
      collapseAttributesForm,
      collapseSlot,
    };
  },
};
</script>

<style scoped>
.cd-collpasel-show-frame {
  padding: 30px 0px;
}
</style>