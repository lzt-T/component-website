<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Tabs 标签页</h1>
      <p class="cd-public-p">分隔内容上有关联但属于不同类别的数据集合</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">基础的、简洁的标签页</p>
      <p class="cd-public-p">
        Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 value
        属性来指定当前选中的标签页
      </p>
      <div class="cd-public-div-frame">
        <cd-tabs v-model="tabsIndex">
          <cd-tab-pane label="User">
            <div class="cd-website-tabs-frame">User</div>
          </cd-tab-pane>
          <cd-tab-pane label="Config">
            <div class="cd-website-tabs-frame">Config</div>
          </cd-tab-pane>
          <cd-tab-pane label="Role">
            <div class="cd-website-tabs-frame">Role</div>
          </cd-tab-pane>
          <cd-tab-pane label="Task">
            <div class="cd-website-tabs-frame">Task</div>
          </cd-tab-pane>
        </cd-tabs>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-tabs v-model="tabsIndex">
          &lt;cd-tab-pane label="User">
            &lt;div class="cd-website-tabs-frame">User&lt;/div>
          &lt;/cd-tab-pane>
          &lt;cd-tab-pane label="Config">
            &lt;div class="cd-website-tabs-frame">Config&lt;/div>
          &lt;/cd-tab-pane>
          &lt;cd-tab-pane label="Role">
            &lt;div class="cd-website-tabs-frame">Role&lt;/div>
          &lt;/cd-tab-pane>
          &lt;cd-tab-pane label="Task">
            &lt;div class="cd-website-tabs-frame">Task&lt;/div>
          &lt;/cd-tab-pane>
        &lt;/cd-tabs>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">
        带有边框的卡片风格
      </h2>
      <p class="cd-public-p">你还可以设置标签页为带有边框的卡片</p>
      <p class="cd-public-p">
        设置 <code>cd-tab</code> 组件的 <code>border</code> 属性为
        <code>true</code>
      </p>
      <div class="cd-public-div-frame">
        <cd-tabs v-model="tabsIndex" border>
          <cd-tab-pane label="User">
            <div class="cd-website-tabs-frame">User</div>
          </cd-tab-pane>
          <cd-tab-pane label="Config">
            <div class="cd-website-tabs-frame">Config</div>
          </cd-tab-pane>
          <cd-tab-pane label="Role">
            <div class="cd-website-tabs-frame">Role</div>
          </cd-tab-pane>
          <cd-tab-pane label="Task">
            <div class="cd-website-tabs-frame">Task</div>
          </cd-tab-pane>
        </cd-tabs>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-tabs v-model="tabsIndex" border>
          &lt;cd-tab-pane label="User">
            &lt;div class="cd-website-tabs-frame">User&lt;/div>
          &lt;/cd-tab-pane>
          &lt;cd-tab-pane label="Config">
            &lt;div class="cd-website-tabs-frame">Config&lt;/div>
          &lt;/cd-tab-pane>
          &lt;cd-tab-pane label="Role">
            &lt;div class="cd-website-tabs-frame">Role&lt;/div>
          &lt;/cd-tab-pane>
          &lt;cd-tab-pane label="Task">
            &lt;div class="cd-website-tabs-frame">Task&lt;/div>
          &lt;/cd-tab-pane>
        &lt;/cd-tabs>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        带有图标的标签页
      </h2>
      <p class="cd-public-p">
        设置 <code>cd-tab-pane</code> 的 <code>icon</code> 属性即可
      </p>
      <div class="cd-public-div-frame">
        <cd-tabs v-model="tabsIndex" border>
          <cd-tab-pane label="User" icon="usersThree">
            <div class="cd-website-tabs-frame">User</div>
          </cd-tab-pane>
          <cd-tab-pane label="Setting" icon="setting">
            <div class="cd-website-tabs-frame">Setting</div>
          </cd-tab-pane>
          <cd-tab-pane label="Calendar" icon="calendar">
            <div class="cd-website-tabs-frame">Calendar</div>
          </cd-tab-pane>
          <cd-tab-pane label="Send" icon="send">
            <div class="cd-website-tabs-frame">Send</div>
          </cd-tab-pane>
        </cd-tabs>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
      &lt;cd-tabs v-model="tabsIndex" border>
        &lt;cd-tab-pane label="User" icon="usersThree">
          &lt;div class="cd-website-tabs-frame">User&lt;/div>
        &lt;/cd-tab-pane>
        &lt;cd-tab-pane label="Setting" icon="setting">
          &lt;div class="cd-website-tabs-frame">Setting&lt;/div>
        &lt;/cd-tab-pane>
        &lt;cd-tab-pane label="Calendar" icon="calendar">
          &lt;div class="cd-website-tabs-frame">Calendar&lt;/div>
        &lt;/cd-tab-pane>
        &lt;cd-tab-pane label="Send" icon="send">
          &lt;div class="cd-website-tabs-frame">Send&lt;/div>
        &lt;/cd-tab-pane>
      &lt;/cd-tabs>
    &lt;/template&gt;
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Tabs 属性</h2>
      <cd-table
        :data="tabsAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Tabs 插槽</h2>
      <cd-table
        :data="tabsSlot"
        :listName="['插槽名', '说明', '子标签']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">
        Tab-pane 属性
      </h2>
      <cd-table
        :data="tabspaneAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">
        Tab-pane 插槽
      </h2>
      <cd-table :data="tabspaneSlot" :listName="['插槽名', '说明']"></cd-table>
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
    let tabsIndex = ref<number>(1);
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
        title: "带有边框的卡片风格",
      },
      {
        anchorName: "three",
        title: "带有图标的标签页",
      },
      {
        anchorName: "four",
        title: "Tabs 属性",
      },
      {
        anchorName: "five",
        title: "Tabs 插槽",
      },
      {
        anchorName: "six",
        title: "Tab-pane 属性",
      },
      {
        anchorName: "seven",
        title: "Tab-pane 插槽",
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
    let tabsAttributesForm = ref<Iattributesfrom[]>([
      {
        property: " v-model",
        explain: "打开第几个标签页",
        type: "number",
        optional: "--",
        default: "0",
      },
      {
        property: "border",
        explain: "是否带边框",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);
    let tabspaneAttributesForm = ref<Iattributesfrom[]>([
      {
        property: " label",
        explain: "选项卡标题",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "icon",
        explain: "图标名称",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);

    interface ItabsSlot {
      property: string;
      explain: string;
      childTags: string;
    }
    let tabsSlot = ref<ItabsSlot[]>([
      {
        property: "--",
        explain: "自定义默认内容",
        childTags: "Tab-pane",
      },
    ]);
    interface ItabspaneSlot {
      property: string;
      explain: string;
    }
    let tabspaneSlot = ref<ItabspaneSlot[]>([
      {
        property: "--",
        explain: "Tab-pane 的内容",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      tabsIndex,
      tabsAttributesForm,
      tabsSlot,
      tabspaneAttributesForm,
      tabspaneSlot,
    };
  },
};
</script>

<style scoped>
.cd-website-tabs-frame {
  padding: 20px;
  font-size: 50px;
}
</style>