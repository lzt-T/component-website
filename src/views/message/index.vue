<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Message 消息提示</h1>
      <p class="cd-public-p">常用于主动操作后的反馈提示</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">从顶部出现，3 秒后自动消失</p>
      <div class="cd-public-div-frame">
        <cd-button :width="200" color="#409eFF" @click="changeIsMessage(true)"
          >Show message</cd-button
        >
        <cd-message
          v-model="isMessage"
          message="This is a message"
          :zIndex="2"
        ></cd-message>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-button :width="200" color="#409eFF" @click="changeIsMessage(true)"
          >Show message&lt;/cd-button
        >
        &lt;cd-message
          v-model="isMessage"
          message="This is a message"
          :zIndex="2"
        >&lt;/cd-message>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let isMessage = ref&lt;boolean>(false);
            const changeIsMessage = (data: boolean) => {
                isMessage.value = data;
            };
            return{
                isMessage,
                changeIsMessage
            }
        }
    }
    &lt;/script>   
        </pre>
      </cd-collapse>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">不同状态</h2>
      <p class="cd-public-p">
        用来显示「成功、警告、消息、错误」类的操作反馈。
      </p>
      <p class="cd-public-p">通过 <code>type</code> 属性来控制不同的状态</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" flexWrap="wrap">
          <cd-button color="#409eFF" @click="changeIsMessage1(true)"
            >success</cd-button
          >
          <cd-button color="#409eFF" @click="changeIsMessage2(true)"
            >warning</cd-button
          >
          <cd-button color="#409eFF" @click="changeIsMessage3(true)"
            >info</cd-button
          >
          <cd-button color="#409eFF" @click="changeIsMessage4(true)"
            >error</cd-button
          >
        </cd-row>

        <cd-message
          v-model="isMessage1"
          type="success"
          message="This is a success message"
          :zIndex="2"
        ></cd-message>
        <cd-message
          v-model="isMessage2"
          type="warning"
          message="This is a warning message"
          :zIndex="2"
        ></cd-message>
        <cd-message
          v-model="isMessage3"
          type="info"
          message="This is a info message"
          :zIndex="2"
        ></cd-message>
        <cd-message
          v-model="isMessage4"
          type="error"
          message="This is a error message"
          :zIndex="2"
        ></cd-message>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" flexWrap="wrap">
          &lt;cd-button color="#409eFF" @click="changeIsMessage1(true)"
            >success&lt;/cd-button
          >
          &lt;cd-button color="#409eFF" @click="changeIsMessage2(true)"
            >warning&lt;/cd-button
          >
          &lt;cd-button color="#409eFF" @click="changeIsMessage3(true)"
            >info&lt;/cd-button
          >
          &lt;cd-button color="#409eFF" @click="changeIsMessage4(true)"
            >error&lt;/cd-button
          >
        &lt;/cd-row>

        &lt;cd-message
          v-model="isMessage1"
          type="success"
          message="This is a success message"
          :zIndex="2"
        >&lt;/cd-message>
        &lt;cd-message
          v-model="isMessage2"
          type="warning"
          message="This is a warning message"
          :zIndex="2"
        >&lt;/cd-message>
        &lt;cd-message
          v-model="isMessage3"
          type="info"
          message="This is a info message"
          :zIndex="2"
        >&lt;/cd-message>
        &lt;cd-message
          v-model="isMessage4"
          type="error"
          message="This is a error message"
          :zIndex="2"
        >&lt;/cd-message>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let isMessage1 = ref&lt;boolean>(false);
            const changeIsMessage1 = (data: boolean) => {
                isMessage1.value = data;
            };
            let isMessage2 = ref&lt;boolean>(false);
            const changeIsMessage2 = (data: boolean) => {
                isMessage2.value = data;
            };
            let isMessage3 = ref&lt;boolean>(false);
            const changeIsMessage3 = (data: boolean) => {
                isMessage3.value = data;
            };
            let isMessage4 = ref&lt;boolean>(false);
            const changeIsMessage4 = (data: boolean) => {
                isMessage4.value = data;
            };
            return{
                isMessage1,
                isMessage2,
                isMessage3,
                isMessage4,
                changeIsMessage1,
                changeIsMessage2,
                changeIsMessage3,
                changeIsMessage4,
            }
        }
    }
    &lt;/script>  
        </pre>
      </cd-collapse>
      <h2 id="three" :ref="anchor" class="cd-public-headline-h2">
        可关闭的消息提示
      </h2>
      <p class="cd-public-p">可以添加关闭按钮</p>
      <p class="cd-public-p">
        默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把
        <code>closabled</code> 设置为 <code>true</code> ，Message 拥有可控的
        <code>duration</code>， 默认的关闭时间为 3000 毫秒，
      </p>
      <div class="cd-public-div-frame">
        <cd-button :width="200" color="#409eFF" @click="changeIsMessage5(true)"
          >closabled message</cd-button
        >
        <cd-message
          v-model="isMessage5"
          message="This is a closabled message"
          :zIndex="2"
          closabled
        ></cd-message>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-button :width="200" color="#409eFF" @click="changeIsMessage5(true)"
          >closabled message&lt;/cd-button
        >
        &lt;cd-message
          v-model="isMessage5"
          message="This is a message"
          :zIndex="2"
          closabled
        >&lt;/cd-message>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let isMessage5 = ref&lt;boolean>(false);
            const changeIsMessage5 = (data: boolean) => {
                isMessage5.value = data;
            };
            return{
                isMessage5,
                changeIsMessage5
            }
        }
    }
    &lt;/script> 
        </pre>
      </cd-collapse>
      <h2 id="four" :ref="anchor" class="cd-public-headline-h2">文字居中</h2>
      <p class="cd-public-p">使用 <code>center</code> 属性让文字水平居中</p>
      <div class="cd-public-div-frame">
        <cd-button :width="200" color="#409eFF" @click="changeIsMessage6(true)">
          Centerd text</cd-button
        >
        <cd-message
          v-model="isMessage6"
          message="Centerd text"
          :zIndex="2"
          closabled
          center
        ></cd-message>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-button :width="200" color="#409eFF" @click="changeIsMessage6(true)">
          Centerd text&lt;/cd-button
        >
        &lt;cd-message
          v-model="isMessage6"
          message="Centerd text"
          :zIndex="2"
          closabled
          center
        >&lt;/cd-message>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
    export default {
        setup(){
            let isMessage6 = ref&lt;boolean>(false);
            const changeIsMessage6 = (data: boolean) => {
                isMessage6.value = data;
            };
            return{
                isMessage6,
                changeIsMessage6
            }
        }
    }
    &lt;/script>  
        </pre>
      </cd-collapse>
      <h2 id="five" :ref="anchor" class="cd-public-headline-h2">
        Message 属性
      </h2>
      <cd-table
        :data="messageAttributesForm"
        :listName="['属性', '说明', '类型', '可选值', '默认值']"
      ></cd-table>
      <h2 id="six" :ref="anchor" class="cd-public-headline-h2">Message 事件</h2>
      <cd-table
        :data="messageEvent"
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
    let isMessage = ref<boolean>(false);
    const changeIsMessage = (data: boolean) => {
      isMessage.value = data;
    };

    let isMessage1 = ref<boolean>(false);
    const changeIsMessage1 = (data: boolean) => {
      isMessage1.value = data;
    };
    let isMessage2 = ref<boolean>(false);
    const changeIsMessage2 = (data: boolean) => {
      isMessage2.value = data;
    };
    let isMessage3 = ref<boolean>(false);
    const changeIsMessage3 = (data: boolean) => {
      isMessage3.value = data;
    };
    let isMessage4 = ref<boolean>(false);
    const changeIsMessage4 = (data: boolean) => {
      isMessage4.value = data;
    };

    let isMessage5 = ref<boolean>(false);
    const changeIsMessage5 = (data: boolean) => {
      isMessage5.value = data;
    };
    let isMessage6 = ref<boolean>(false);
    const changeIsMessage6 = (data: boolean) => {
      isMessage6.value = data;
    };
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
        title: "不同状态",
      },
      {
        anchorName: "three",
        title: "可关闭的消息提示",
      },
      {
        anchorName: "four",
        title: "文字居中",
      },
      {
        anchorName: "five",
        title: "Message 属性",
      },
      {
        anchorName: "six",
        title: "Message 事件",
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
    let messageAttributesForm = ref<Iattributesfrom[]>([
      {
        property: "v-model",
        explain: "是否显示 Message",
        type: "boolean",
        optional: "--",
        default: "--",
      },
      {
        property: "message",
        explain: "消息文字,必传",
        type: "string",
        optional: "--",
        default: "--",
      },
      {
        property: "type",
        explain: "消息类型",
        type: "string",
        optional: "success | warning | info | error",
        default: "info",
      },
      {
        property: "offset",
        explain: "Message 距离窗口顶部的偏移量",
        type: "number",
        optional: "--",
        default: "20",
      },
      {
        property: "duration",
        explain: "显示时间，单位为毫秒",
        type: "number",
        optional: "--",
        default: "3000",
      },
      {
        property: "closabled",
        explain: "消息是否可关闭",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "center",
        explain: "文字是否居中",
        type: "boolean",
        optional: "true/false",
        default: "false",
      },
      {
        property: "zIndex",
        explain: "设置 z-index",
        type: "number",
        optional: "--",
        default: "1",
      },
    ]);

    interface IMessageEvent {
      property: string;
      explain: string;
      parameter: string;
    }
    let messageEvent = ref<IMessageEvent[]>([
      {
        property: "close",
        explain: "消息消失时触发",
        parameter: "--",
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      isMessage,
      isMessage1,
      isMessage2,
      isMessage3,
      isMessage4,
      isMessage5,
      isMessage6,
      changeIsMessage,
      changeIsMessage1,
      changeIsMessage2,
      changeIsMessage3,
      changeIsMessage4,
      changeIsMessage5,
      changeIsMessage6,
      messageAttributesForm,
      messageEvent,
    };
  },
};
</script>

<style>
</style>