<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <cd-message
        v-model="isShow"
        :zIndex="4"
        message="复制成功"
        type="success"
      ></cd-message>
      <h1 class="cd-public-headline-h1">Icon 图标</h1>
      <p class="cd-public-p">为用户提供一些常用的图标集合</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">图标集合</h2>
      <p class="cd-public-p">您可以点击图标复制代码</p>
      <div class="cd-public-div-frame cd-website-icon-frame">
        <div
          :class="{
            'cd-website-everyiocn-frame': true,
            'cd-website-everyiocn-frame-hover': hoverInd == ind,
          }"
          v-for="(data, ind) in iocnData"
          :key="ind"
          @mouseenter="onMouseenter(ind)"
          @mouseleave="onMouseleave"
          @click="onCopy(data.copydata), copy()"
        >
          <cd-icon
            :name="data.name"
            :color="hoverInd == ind ? '#579cfb' : ''"
          ></cd-icon>
          <div>{{ data.name }}</div>
        </div>
      </div>
      <h2 id="two" :ref="anchor" class="cd-public-headline-h2">Icon 属性</h2>
      <cd-table
        :data="attributesFormData"
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
import useClipboard from "vue-clipboard3";
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
    // 点击复制
    let copyData = ref<string>("");
    function onCopy(data: string): void {
      copyData.value = data;
    }
    let isShow = ref<boolean>(false);
    const { toClipboard } = useClipboard();
    const copy = async () => {
      try {
        await toClipboard(copyData.value);
        isShow.value = true;
      } catch (e) {
        console.error(e);
      }
    };

    // 锚点
    interface rightNav {
      anchorName: string;
      title: string;
    }
    let rightNavData = ref<rightNav[]>([
      {
        anchorName: "one",
        title: "图标集合",
      },
      {
        anchorName: "two",
        title: "Icon 属性",
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
    interface attributesfrom {
      property: string;
      explain: string;
      type: string;
      optional: string;
      default: string;
    }
    let attributesFormData = ref<attributesfrom[]>([
      {
        property: "color",
        explain: "颜色",
        type: "string",
        optional: "--",
        default: "black",
      },
      {
        property: "size",
        explain: "大小",
        type: "number",
        optional: "--",
        default: "40",
      },
      {
        property: "name",
        explain: "图标名,不可缺少",
        type: "string",
        optional: "--",
        default: "--",
      },
    ]);
    // icon数据
    let hoverInd = ref<number>(-1);
    function onMouseenter(ind: number) {
      hoverInd.value = ind;
    }
    function onMouseleave() {
      hoverInd.value = -1;
    }
    interface Iiconname {
      name: string;
      copydata: string;
    }
    let iocnData = ref<Iiconname[]>([
      {
        name: "fit",
        copydata: ' <cd-icon name="fit"></cd-icon>',
      },
      {
        name: "downArrow",
        copydata: ' <cd-icon name="downArrow"></cd-icon>',
      },
      {
        name: "rightArrow",
        copydata: ' <cd-icon name="rightArrow"></cd-icon>',
      },
      {
        name: "upArrow",
        copydata: ' <cd-icon name="upArrow"></cd-icon>',
      },
      {
        name: "leftArrow",
        copydata: ' <cd-icon name="leftArrow"></cd-icon>',
      },
      {
        name: "leftArrowTwo",
        copydata: ' <cd-icon name="leftArrowTwo"></cd-icon>',
      },
      {
        name: "downArrowTwo",
        copydata: ' <cd-icon name="downArrowTwo"></cd-icon>',
      },
      {
        name: "rightArrowTwo",
        copydata: ' <cd-icon name="rightArrowTwo"></cd-icon>',
      },
      {
        name: "upArrowTwo",
        copydata: ' <cd-icon name="upArrowTwo"></cd-icon>',
      },
      {
        name: "caretDown",
        copydata: ' <cd-icon name="caretDown"></cd-icon>',
      },
      {
        name: "caretleft",
        copydata: ' <cd-icon name="caretleft"></cd-icon>',
      },
      {
        name: "caretRight",
        copydata: ' <cd-icon name="caretRight"></cd-icon>',
      },
      {
        name: "caretUp",
        copydata: ' <cd-icon name="caretUp"></cd-icon>',
      },
      {
        name: "upLoad",
        copydata: ' <cd-icon name="upLoad"></cd-icon>',
      },
      {
        name: "leftRightArrow",
        copydata: ' <cd-icon name="leftRightArrow"></cd-icon>',
      },
      {
        name: "upDownArrow",
        copydata: ' <cd-icon name="upDownArrow"></cd-icon>',
      },
      {
        name: "download",
        copydata: ' <cd-icon name="download"></cd-icon>',
      },
      {
        name: "fullScreen",
        copydata: ' <cd-icon name="fullScreen"></cd-icon>',
      },
      {
        name: "refresh",
        copydata: ' <cd-icon name="refresh"></cd-icon>',
      },
      {
        name: "edit",
        copydata: ' <cd-icon name="edit"></cd-icon>',
      },
      {
        name: "redact",
        copydata: ' <cd-icon name="redact"></cd-icon>',
      },
      {
        name: "wifi",
        copydata: ' <cd-icon name="wifi"></cd-icon>',
      },
      {
        name: "wifiTwo",
        copydata: ' <cd-icon name="wifiTwo"></cd-icon>',
      },
      {
        name: "battery",
        copydata: ' <cd-icon name="battery"></cd-icon>',
      },
      {
        name: "unlock",
        copydata: ' <cd-icon name="unlock"></cd-icon>',
      },
      {
        name: "back",
        copydata: ' <cd-icon name="back"></cd-icon>',
      },
      {
        name: "mute",
        copydata: ' <cd-icon name="mute"></cd-icon>',
      },
      {
        name: "bell",
        copydata: ' <cd-icon name="bell"></cd-icon>',
      },
      {
        name: "bluetooth",
        copydata: ' <cd-icon name="bluetooth"></cd-icon>',
      },
      {
        name: "delete",
        copydata: ' <cd-icon name="delete"></cd-icon>',
      },
      {
        name: "tick",
        copydata: ' <cd-icon name="tick"></cd-icon>',
      },
      {
        name: "trash",
        copydata: ' <cd-icon name="trash"></cd-icon>',
      },
      {
        name: "search",
        copydata: ' <cd-icon name="search"></cd-icon>',
      },
      {
        name: "searchTwo",
        copydata: ' <cd-icon name="searchTwo"></cd-icon>',
      },
      {
        name: "menu",
        copydata: ' <cd-icon name="menu"></cd-icon>',
      },
      {
        name: "phone",
        copydata: ' <cd-icon name="phone"></cd-icon>',
      },
      {
        name: "music",
        copydata: ' <cd-icon name="music"></cd-icon>',
      },
      {
        name: "setting",
        copydata: ' <cd-icon name="setting"></cd-icon>',
      },
      {
        name: "message",
        copydata: ' <cd-icon name="message"></cd-icon>',
      },
      {
        name: "messageTwo",
        copydata: ' <cd-icon name="messageTwo"></cd-icon>',
      },
      {
        name: "add",
        copydata: ' <cd-icon name="add"></cd-icon>',
      },
      {
        name: "messageThree",
        copydata: ' <cd-icon name="messageThree"></cd-icon>',
      },
      {
        name: "lock",
        copydata: ' <cd-icon name="lock"></cd-icon>',
      },
      {
        name: "more",
        copydata: ' <cd-icon name="more"></cd-icon>',
      },
      {
        name: "messageFour",
        copydata: ' <cd-icon name="messageFour"></cd-icon>',
      },
      {
        name: "cloudDownload",
        copydata: ' <cd-icon name="cloudDownload"></cd-icon>',
      },
      {
        name: "volume",
        copydata: ' <cd-icon name="volume"></cd-icon>',
      },
      {
        name: "clock",
        copydata: ' <cd-icon name="clock"></cd-icon>',
      },
      {
        name: "camera",
        copydata: ' <cd-icon name="camera"></cd-icon>',
      },
      {
        name: "projector",
        copydata: ' <cd-icon name="projector"></cd-icon>',
      },
      {
        name: "microphone",
        copydata: ' <cd-icon name="microphone"></cd-icon>',
      },
      {
        name: "cloudUpload",
        copydata: ' <cd-icon name="cloudUpload"></cd-icon>',
      },
      {
        name: "picture",
        copydata: ' <cd-icon name="picture"></cd-icon>',
      },
      {
        name: "Router",
        copydata: ' <cd-icon name="Router"></cd-icon>',
      },
      {
        name: "computer",
        copydata: ' <cd-icon name="computer"></cd-icon>',
      },
      {
        name: "laptop",
        copydata: ' <cd-icon name="laptop"></cd-icon>',
      },
      {
        name: "messageFive",
        copydata: ' <cd-icon name="messageFive"></cd-icon>',
      },
      {
        name: "bicycle",
        copydata: ' <cd-icon name="bicycle"></cd-icon>',
      },
      {
        name: "messageSix",
        copydata: ' <cd-icon name="messageSix"></cd-icon>',
      },
      {
        name: "server",
        copydata: ' <cd-icon name="server"></cd-icon>',
      },
      {
        name: "file",
        copydata: ' <cd-icon name="file"></cd-icon>',
      },
      {
        name: "homepage",
        copydata: ' <cd-icon name="homepage"></cd-icon>',
      },
      {
        name: "messageSeven",
        copydata: ' <cd-icon name="messageSeven"></cd-icon>',
      },
      {
        name: "save",
        copydata: ' <cd-icon name="save"></cd-icon>',
      },
      {
        name: "send",
        copydata: ' <cd-icon name="send"></cd-icon>',
      },
      {
        name: "shopping",
        copydata: ' <cd-icon name="shopping"></cd-icon>',
      },
      {
        name: "headset",
        copydata: ' <cd-icon name="headset"></cd-icon>',
      },
      {
        name: "users",
        copydata: ' <cd-icon name="users"></cd-icon>',
      },
      {
        name: "configured",
        copydata: ' <cd-icon name="configured"></cd-icon>',
      },
      {
        name: "editTwo",
        copydata: ' <cd-icon name="editTwo"></cd-icon>',
      },
      {
        name: "settingTwo",
        copydata: ' <cd-icon name="settingTwo"></cd-icon>',
      },
      {
        name: "Administrator",
        copydata: ' <cd-icon name="Administrator"></cd-icon>',
      },
      {
        name: "speed",
        copydata: ' <cd-icon name="speed"></cd-icon>',
      },
      {
        name: "backward",
        copydata: ' <cd-icon name="backward"></cd-icon>',
      },
      {
        name: "pause",
        copydata: ' <cd-icon name="pause"></cd-icon>',
      },
      {
        name: "next",
        copydata: ' <cd-icon name="next"></cd-icon>',
      },
      {
        name: "previous",
        copydata: ' <cd-icon name="previous"></cd-icon>',
      },
      {
        name: "headsetTwo",
        copydata: ' <cd-icon name="headsetTwo"></cd-icon>',
      },
      {
        name: "headsetThree",
        copydata: ' <cd-icon name="headsetThree"></cd-icon>',
      },
      {
        name: "click",
        copydata: ' <cd-icon name="click"></cd-icon>',
      },
      {
        name: "like",
        copydata: ' <cd-icon name="like"></cd-icon>',
      },
      {
        name: "usersTwo",
        copydata: ' <cd-icon name="usersTwo"></cd-icon>',
      },
      {
        name: "move",
        copydata: ' <cd-icon name="move"></cd-icon>',
      },
      {
        name: "team",
        copydata: ' <cd-icon name="team"></cd-icon>',
      },
      {
        name: "mail",
        copydata: ' <cd-icon name="mail"></cd-icon>',
      },
      {
        name: "visible",
        copydata: ' <cd-icon name="visible"></cd-icon>',
      },
      {
        name: "conceal",
        copydata: ' <cd-icon name="conceal"></cd-icon>',
      },
      {
        name: "usersThree",
        copydata: ' <cd-icon name="usersThree"></cd-icon>',
      },
      {
        name: "shoppingTwo",
        copydata: ' <cd-icon name="shoppingTwo"></cd-icon>',
      },
      {
        name: "guideboard",
        copydata: ' <cd-icon name="guideboard"></cd-icon>',
      },
      {
        name: "guideboardTwo",
        copydata: ' <cd-icon name="guideboardTwo"></cd-icon>',
      },
      {
        name: "pictureTwo",
        copydata: ' <cd-icon name="pictureTwo"></cd-icon>',
      },
      {
        name: "fileSearch",
        copydata: ' <cd-icon name="fileSearch"></cd-icon>',
      },
      {
        name: "document",
        copydata: ' <cd-icon name="document"></cd-icon>',
      },
      {
        name: "parcel",
        copydata: ' <cd-icon name="parcel"></cd-icon>',
      },
      {
        name: "blockDiagram",
        copydata: ' <cd-icon name="blockDiagram"></cd-icon>',
      },
      {
        name: "blockDiagramTwo",
        copydata: ' <cd-icon name="blockDiagramTwo"></cd-icon>',
      },
      {
        name: "sendTwo",
        copydata: ' <cd-icon name="sendTwo"></cd-icon>',
      },
      {
        name: "label",
        copydata: ' <cd-icon name="label"></cd-icon>',
      },
      {
        name: "control",
        copydata: ' <cd-icon name="control"></cd-icon>',
      },
      {
        name: "folder",
        copydata: ' <cd-icon name="folder"></cd-icon>',
      },
      {
        name: "notebook",
        copydata: ' <cd-icon name="notebook"></cd-icon>',
      },
      {
        name: "window",
        copydata: ' <cd-icon name="window"></cd-icon>',
      },
      {
        name: "trashTwo",
        copydata: ' <cd-icon name="trashTwo"></cd-icon>',
      },
      {
        name: "volumeTwo",
        copydata: ' <cd-icon name="volumeTwo"></cd-icon>',
      },
      {
        name: "projectorTwo",
        copydata: ' <cd-icon name="projectorTwo"></cd-icon>',
      },
      {
        name: "chronometer",
        copydata: ' <cd-icon name="chronometer"></cd-icon>',
      },
      {
        name: "man",
        copydata: ' <cd-icon name="man"></cd-icon>',
      },
      {
        name: "woman",
        copydata: ' <cd-icon name="woman"></cd-icon>',
      },
      {
        name: "volumeControl",
        copydata: ' <cd-icon name="volumeControl"></cd-icon>',
      },
      {
        name: "usb",
        copydata: ' <cd-icon name="usb"></cd-icon>',
      },
      {
        name: "saveTwo",
        copydata: ' <cd-icon name="saveTwo"></cd-icon>',
      },
      {
        name: "play",
        copydata: ' <cd-icon name="play"></cd-icon>',
      },
      {
        name: "documentTwo",
        copydata: ' <cd-icon name="documentTwo"></cd-icon>',
      },
      {
        name: "network",
        copydata: ' <cd-icon name="network"></cd-icon>',
      },
      {
        name: "data",
        copydata: ' <cd-icon name="data"></cd-icon>',
      },
      {
        name: "configurationTwo",
        copydata: ' <cd-icon name="configurationTwo"></cd-icon>',
      },
      {
        name: "mouse",
        copydata: ' <cd-icon name="mouse"></cd-icon>',
      },
      {
        name: "messageEight",
        copydata: ' <cd-icon name="messageEight"></cd-icon>',
      },
      {
        name: "cloudComputing",
        copydata: ' <cd-icon name="cloudComputing"></cd-icon>',
      },
      {
        name: "screen",
        copydata: ' <cd-icon name="screen"></cd-icon>',
      },
      {
        name: "location",
        copydata: ' <cd-icon name="location"></cd-icon>',
      },
      {
        name: "love",
        copydata: ' <cd-icon name="love"></cd-icon>',
      },
      {
        name: "star",
        copydata: ' <cd-icon name="star"></cd-icon>',
      },
      {
        name: "locationTwo",
        copydata: ' <cd-icon name="locationTwo"></cd-icon>',
      },
      {
        name: "map",
        copydata: ' <cd-icon name="map"></cd-icon>',
      },
      {
        name: "calendar",
        copydata: ' <cd-icon name="calendar"></cd-icon>',
      },
      {
        name: "minus",
        copydata: ' <cd-icon name="minus"></cd-icon>',
      },
      {
        name: "empty",
        copydata: ' <cd-icon name="empty"></cd-icon>',
      },
      {
        name: "lessen",
        copydata: ' <cd-icon name="lessen"></cd-icon>',
      },
      {
        name: "magnify",
        copydata: ' <cd-icon name="magnify"></cd-icon>',
      },
      {
        name: "leftRotate",
        copydata: ' <cd-icon name="leftRotate"></cd-icon>',
      },
      {
        name: "rightRotate",
        copydata: ' <cd-icon name="rightRotate"></cd-icon>',
      },
      {
        name: "ellipsis",
        copydata: ' <cd-icon name="ellipsis"></cd-icon>',
      },
      {
        name: "info",
        copydata: ' <cd-icon name="info"></cd-icon>',
      },
      {
        name: "error",
        copydata: ' <cd-icon name="error"></cd-icon>',
      },
      {
        name: "success",
        copydata: ' <cd-icon name="success"></cd-icon>',
      },
      {
        name: "warning",
        copydata: ' <cd-icon name="warning"></cd-icon>',
      },
    ]);
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      copy,
      isShow,
      iocnData,
      onMouseenter,
      onMouseleave,
      hoverInd,
      onCopy,
      attributesFormData,
    };
  },
};
</script>

<style scoped>
.cd-website-icon-frame {
  display: flex;
  flex-wrap: wrap;
}
.cd-website-everyiocn-frame {
  display: flex;
  flex: 14%;
  padding: 20px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #dcdfe6;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.cd-website-everyiocn-frame-hover {
  background-color: #f3f6fd;
  color: #579cfb;
}
</style>