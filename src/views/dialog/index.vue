<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Dialog 对话框</h1>
      <p class="cd-public-p">
        在保留当前页面状态的情况下，告知用户并承载相关操作
      </p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">Dialog 弹出一个对话框，适合需要定制性更大的场景</p>
      <p class="cd-public-p">
        需要设置 <code>v-model</code> 属性，它接收 <code>Boolean</code>，当为
        <code>true</code> 时显示 Dialog。 Dialog 分为两个部分：body 和
        footer，footer 需要具名为 footer 的 slot。 title
        属性用于定义标题，它是可选的，默认值为空。 。
      </p>
      <div class="cd-public-div-frame">
        <cd-button text color="#409eFF" @click="changeDialog(true)" :width="200"
          >click to open the Dialog</cd-button
        >
        <cd-dialog v-model="dialog" title="Tips">
          <template #text>
            <div class="cd-website-dialog-div">This is a message</div>
          </template>
          <template #footer>
            <cd-row :gap="20" justify="center">
              <cd-button
                @click="changeDialog(false)"
                backgroundCcolor="#409eFF"
                color="white"
                >Cancel</cd-button
              >
              <cd-button
                @click="changeDialog(false)"
                backgroundCcolor="#409eFF"
                color="white"
                >Confirm</cd-button
              >
            </cd-row>
          </template>
        </cd-dialog>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-button text color="#409eFF" @click="changeDialog(true)" :width="200"
          >click to open the Dialog&lt;/cd-button
        >
        &lt;cd-dialog v-model="dialog" title="Tips">
            &lt;template #text>
                &lt;div class="cd-website-dialog-div">This is a message&lt;/div>
            &lt;/template>
            &lt;template #footer>
                &lt;cd-row :gap="20" justify="center">
                &lt;cd-button
                    @click="changeDialog(false)"
                    backgroundCcolor="#409eFF"
                    color="white"
                    >Cancel&lt;/cd-button
                >
                &lt;cd-button
                    @click="changeDialog(false)"
                    backgroundCcolor="#409eFF"
                    color="white"
                    >Confirm&lt;/cd-button
                >
                &lt;/cd-row>
            &lt;/template>
        &lt;/cd-dialog>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let dialog = ref&lt;boolean>(false);
            function changeDialog(isTrue: boolean) {
                dialog.value = isTrue;
            }
            return{
                dialog,
                changeDialog
            }
        }
    }
    &lt;/script>        

    &lt;style scoped>
    .cd-website-dialog-div {
    margin: 30px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">居中布局</h2>
      <p class="cd-public-p">对话框的内容可以居中</p>
      <p class="cd-public-p">
        将 <code>center</code> 设置为 <code>true</code> 即可使标题和底部居中。
      </p>
      <div class="cd-public-div-frame">
        <cd-button
          text
          color="#409eFF"
          @click="changeDialog1(true)"
          :width="200"
          >click to open the Dialog</cd-button
        >
        <cd-dialog v-model="dialog1" title="Tips" center>
          <template #text>
            <div class="cd-website-dialog-div">This is a message</div>
          </template>
          <template #footer>
            <cd-row :gap="20" justify="center">
              <cd-button
                @click="changeDialog1(false)"
                backgroundCcolor="#409eFF"
                color="white"
                >Cancel</cd-button
              >
              <cd-button
                @click="changeDialog1(false)"
                backgroundCcolor="#409eFF"
                color="white"
                >Confirm</cd-button
              >
            </cd-row>
          </template>
        </cd-dialog>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-button
          text
          color="#409eFF"
          @click="changeDialog1(true)"
          :width="200"
          >click to open the Dialog&lt;/cd-button
        >
        &lt;cd-dialog v-model="dialog1" title="Tips" center>
            &lt;template #text>
                &lt;div class="cd-website-dialog-div">This is a message&lt;/div>
            &lt;/template>
            &lt;template #footer>
                &lt;cd-row :gap="20" justify="center">
                &lt;cd-button
                    @click="changeDialog1(false)"
                    backgroundCcolor="#409eFF"
                    color="white"
                    >Cancel&lt;/cd-button
                >
                &lt;cd-button
                    @click="changeDialog1(false)"
                    backgroundCcolor="#409eFF"
                    color="white"
                    >Confirm&lt;/cd-button
                >
                &lt;/cd-row>
            &lt;/template>
        &lt;/cd-dialog>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let dialog1 = ref&lt;boolean>(false);
            function changeDialog1(isTrue: boolean) {
                dialog1.value = isTrue;
            }
            return{
                dialog1,
                changeDialog1
            }
        }
    }
    &lt;/script>       

    &lt;style scoped>
    .cd-website-dialog-div {
    margin: 30px 0px;
    }
    &lt;/style> 
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        Dialog 属性
      </h2>
      <cd-table
        :data="dialogAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">Dialog 事件</h2>
      <cd-table
        :data="dialogEvent"
        :listName="['事件名', '说明', '参数']"
      ></cd-table>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">Dialog 插槽</h2>
      <cd-table :data="dialogSlot" :listName="['插槽名', '说明']"></cd-table>
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
    let dialog = ref<boolean>(false);
    let dialog1 = ref<boolean>(false);
    function changeDialog(isTrue: boolean) {
      dialog.value = isTrue;
    }
    function changeDialog1(isTrue: boolean) {
      dialog1.value = isTrue;
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
        title: "居中布局",
      },
      {
        anchorName: "three",
        title: "Dialog 属性",
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
    let dialogAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "是否显示 Dialog,必传",
        type: "boolean",
        optional: "--",
        default: "--",
      },
      {
        property: "width",
        explain: "Dialog 的宽度,单位为vw",
        type: "number",
        optional: "--",
        default: "50",
      },
      {
        property: "title",
        explain: "Dialog 对话框 Dialog 的标题",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "top",
        explain: "距离顶部距离,单位为vh",
        type: "number",
        optional: "--",
        default: "15",
      },
      {
        property: "text",
        explain: "Dialog的内容,传入为文字，想要更加丰富可以通过具名slot传入",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "center",
        explain: "是否居中排列",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
    ]);

    interface IDialogEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let dialogEvent = ref<IDialogEvent[]>([
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

    interface IDialogSlot {
      property: string;
      explain: string;
    }
    let dialogSlot = ref<IDialogSlot[]>([
      {
        property: "text",
        explain: "Dialog Body的内容",
      },
      {
        property: "footer",
        explain: "Dialog 底部的内容",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      dialog,
      changeDialog,
      dialog1,
      changeDialog1,
      dialogAttributesForm,
      dialogEvent,
      dialogSlot,
    };
  },
};
</script>

<style scoped>
.cd-website-dialog-div {
  margin: 30px 0px;
}
</style>