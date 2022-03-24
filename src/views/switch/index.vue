<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Switch 开关</h1>
      <p class="cd-public-p">
        表示两种相互对立的状态间的切换，多用于触发「开/关」
      </p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        绑定 <code>v-model</code> 到一个 <code>Boolean</code> 类型的变量。
        可以使用 <code>activeColor</code> 属性与
        <code>inactiveColor</code> 属性来设置开关的背景色。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-switch v-model="switch1"></cd-switch>
          <cd-switch
            v-model="switch2"
            activeColor="#13ce66"
            inactiveColor="#ff4949"
          ></cd-switch>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
            &lt;cd-switch v-model="switch1">&lt;/cd-switch>
            &lt;cd-switch
                v-model="switch2"
                activeColor="#13ce66"
                inactiveColor="#ff4949"
            >&lt;/cd-switch>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let switch1 = ref&lt;boolean>(true);
            let switch2 = ref&lt;boolean>(true);
            return{
                switch1,
                switch2
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">尺寸</h2>
      <p class="cd-public-p">
        通过 <code>height</code>、<code>width</code> 属性来设定元素的大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          <cd-switch
            v-model="switch3"
            :height="29"
            :width="65"
            activeText="Open"
            inactiText="Colse"
          ></cd-switch>
        </cd-row>
        <cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          <cd-switch
            v-model="switch3"
            :height="25"
            :width="50"
            activeText="Open"
            inactiText="Colse"
          ></cd-switch>
        </cd-row>
        <cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          <cd-switch
            v-model="switch3"
            activeText="Open"
            inactiText="Colse"
          ></cd-switch>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          &lt;cd-switch
            v-model="switch3"
            :height="29"
            :width="65"
            activeText="Open"
            inactiText="Colse"
          >&lt;/cd-switch>
        &lt;/cd-row>
        &lt;cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          &lt;cd-switch
            v-model="switch3"
            :height="25"
            :width="50"
            activeText="Open"
            inactiText="Colse"
          >&lt;/cd-switch>
        &lt;/cd-row>
        &lt;cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          &lt;cd-switch
            v-model="switch3"
            activeText="Open"
            inactiText="Colse"
          >&lt;/cd-switch>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
        let switch3 = ref&lt;boolean>(true);
            return{
                switch3
            }
        }
    }
    &lt;/script>  

    &lt;style scoped>
    .cd-swith-row-margin {
    margin: 15px 0px;
    }
    &lt;/style>      
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">文字描述</h2>
      <p class="cd-public-p">
        使用 <code>activeText</code> 属性与
        <code>inactiText</code> 属性来设置开关的文字描述。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          <cd-switch
            v-model="switch4"
            activeText="Pay by month"
            inactiText="Pay by year"
          ></cd-switch>
        </cd-row>
        <cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          <cd-switch
            v-model="switch5"
            activeColor="#13ce66"
            inactiveColor="#ff4949"
            activeText="Pay by month"
            inactiText="Pay by year"
          ></cd-switch>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          &lt;cd-switch
            v-model="switch4"
            activeText="Pay by month"
            inactiText="Pay by year"
          >&lt;/cd-switch>
        &lt;/cd-row>
        &lt;cd-row :gap="10" class="cd-swith-row-margin" flexWrap="wrap">
          &lt;cd-switch
            v-model="switch5"
            activeColor="#13ce66"
            inactiveColor="#ff4949"
            activeText="Pay by month"
            inactiText="Pay by year"
          >&lt;/cd-switch>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let switch4 = ref&lt;boolean>(true);
            let switch5 = ref&lt;boolean>(true);
            return{
                switch4,
                switch5,
            }
        }
    }
    &lt;/script>      

    &lt;style scoped>
    .cd-swith-row-margin {
    margin: 15px 0px;
    }
    &lt;/style>   
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">
        显示自定义图标
      </h2>
      <p class="cd-public-p">
        使用 <code>activeIcon</code> 和 <code>inactiIcon</code> 属性来添加图标
      </p>
      <div class="cd-public-div-frame">
        <cd-switch
          v-model="switch6"
          activeIcon="tick"
          inactiIcon="delete"
        ></cd-switch>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-switch
            v-model="switch6"
            activeIcon="tick"
            inactiIcon="delete"
        >&lt;/cd-switch>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
        let switch6 = ref&lt;boolean>(true);
            return{
                switch6
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">
        设置 <code>disabled</code> 属性,接受一个<code>disabled</code>,设置
        <code>true</code> 即可禁用。
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="10" flexWrap="wrap">
          <cd-switch v-model="switch7"></cd-switch>
          <cd-switch v-model="switch8" disabled></cd-switch>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="10" flexWrap="wrap">
          &lt;cd-switch v-model="switch7">&lt;/cd-switch>
          &lt;cd-switch v-model="switch8" disabled>&lt;/cd-switch>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let switch7 = ref&lt;boolean>(true);
            let switch8 = ref&lt;boolean>(true);
            return{
                switch7,
                switch8,
            }
        }
    }
    &lt;/script>        
        </pre>
      </cd-collapse>

      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Switch 属性</h2>
      <cd-table
        :data="switchAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="seven" :ref="anchor" class="cd-public-headline-h2">
        Switch 事件
      </h2>
      <cd-table
        :data="switchEvent"
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
    //   测试
    let switch1 = ref<boolean>(true);
    let switch2 = ref<boolean>(true);
    let switch3 = ref<boolean>(true);
    let switch4 = ref<boolean>(true);
    let switch5 = ref<boolean>(true);
    let switch6 = ref<boolean>(true);
    let switch7 = ref<boolean>(true);
    let switch8 = ref<boolean>(true);
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
        title: "尺寸",
      },
      {
        anchorName: "three",
        title: "文字描述",
      },
      {
        anchorName: "four",
        title: "显示自定义图标",
      },
      {
        anchorName: "five",
        title: "禁用状态",
      },
      {
        anchorName: "six",
        title: "Switch 属性",
      },
      {
        anchorName: "seven",
        title: "Switch 事件",
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
    let switchAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "绑定值",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "height",
        explain: "高度, 最小值为20",
        type: "number",
        optional: "--",
        default: "20",
      },
      {
        property: "width",
        explain: "宽度,最小值为40",
        type: "number",
        optional: "--",
        default: "40",
      },
      {
        property: "activeColor",
        explain: "switch的值为 on 时的颜色",
        type: "string",
        optional: "--",
        default: "#409EFF",
      },
      {
        property: "inactiveColor",
        explain: "switch的值为 off 的颜色",
        type: "string",
        optional: "--",
        default: "#C0CCDA",
      },
      {
        property: "activeText",
        explain: "switch 打开时的文字描述",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "inactiText",
        explain: "switch 关闭时的文字描述",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "activeIcon",
        explain: "switch 状态为 on 时所显示图标",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "inactiIcon",
        explain: "switch 状态为 off 时所显示图标",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "disabled",
        explain: "是否禁用",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);

    interface ISwitchEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let switchEvent = ref<ISwitchEvent[]>([
      {
        property: "change",
        explain: "switch 状态发生变化时的回调函数",
        parameter: "(value: boolean)",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      switch1,
      switch2,
      switch3,
      switch4,
      switch5,
      switch6,
      switch7,
      switch8,
      switchAttributesForm,
      switchEvent,
    };
  },
};
</script>

<style scoped>
.cd-swith-row-margin {
  margin: 15px 0px;
}
</style>