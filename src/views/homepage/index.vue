<template>
  <div class="cd-website-homepage-farme">
    <!-- 标题 -->
    <section class="cd-website-homepage-left">
      <section class="cd-website-homepage-title">
        <h1>Carpediem</h1>
        <p>基于Vue3,面向设计师和开发者等组件库</p>
      </section>
      <div class="cd-website-homepage-carpediemImg">
        <cd-image
          :src="carpediemImg"
          :previewSrcList="[carpediemImg]"
          fit="cover"
        ></cd-image>
        <p>
          劝君莫惜金缕衣，劝君惜取少年时。
          花开堪折直须折，莫待无花空折枝。--《金缕衣》
        </p>
      </div>

      <!-- 使用指南 -->
      <section class="cd-website-manual">
        <h2 id="one">使用指南</h2>
        <div>
          <h4>全局使用</h4>
          <div class="cd-website-manual-whole-situation-content">
            <div>import Carpediem from 'carpediem-ui'</div>
            <div>import 'carpediem-ui/lib/index.css'</div>
          </div>
        </div>
        <div>
          <h4>按需引入</h4>
          <div class="cd-website-manual-need-content">
            <div>import {CdButton} from 'carpediem-ui'</div>
            <div>import 'carpediem-ui/lib/index.css'</div>
          </div>
        </div>
      </section>
    </section>
    <section class="cd-website-homepage-right">
      <h3 class="cd-website-homepage-right-title">CONTENTS</h3>
      <div
        v-for="(data, ind) in rightNavData"
        :key="ind"
        class="cd-website-homepage-right-content"
      >
        <a :href="'#' + data.anchorName">{{ data.title }}</a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import carpediem from "@/assets/carpediem.png";
import { ref } from "vue";
export default {
  setup() {
    // carpediem图片
    let carpediemImg = ref<string>();
    carpediemImg.value = carpediem;
    interface rightNav {
      anchorName: string;
      title: string;
    }
    let rightNavData = ref<rightNav[]>([
      {
        anchorName: "one",
        title: "使用指南",
      },
    ]);
    return {
      carpediemImg,
      rightNavData,
    };
  },
};
</script>

<style scoped>
.cd-website-homepage-farme {
  position: relative;
  display: flex;
  padding: 35px;
}
.cd-website-homepage-left {
  flex: 4;
}
.cd-website-homepage-right {
  position: sticky;
  height: 30px;
  top: 70px;
  flex: 1;
  margin-left: 64px;
}
.cd-website-homepage-right-title {
  font-size: 12px;
  color: #606266;
  line-height: 30px;
}
.cd-website-homepage-right-content {
  line-height: 23px;
}
.cd-website-homepage-right-content a {
  font-size: 12px;
  color: #909399;
}
.cd-website-homepage-title {
  text-align: center;
}
.cd-website-homepage-title h1 {
  font-size: 34px;
  line-height: 48px;
}
.cd-website-homepage-title p {
  font-size: 18px;
  margin-top: 8px;
}
.cd-website-homepage-carpediemImg {
  margin-top: 10px;
  cursor: pointer;
}
.cd-website-homepage-carpediemImg p {
  text-align: center;
  line-height: 35px;
}
.cd-website-manual h2 {
  font-size: 26px;
  margin: 36px 0px 20px;
}
.cd-website-manual h4 {
  font-size: 17px;
  margin: 10px 10px 10px 10px;
}

.cd-website-manual-whole-situation-content,
.cd-website-manual-need-content {
  margin-left: 40px;
  line-height: 30px;
}
</style>