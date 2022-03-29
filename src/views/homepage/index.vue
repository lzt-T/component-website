<template>
  <div class="cd-public-frame">
    <!-- 标题 -->
    <section class="cd-public-left-frame">
      <section class="cd-website-homepage-title">
        <h1>Carpediem</h1>
        <p>基于Vue3+TS,面向设计师和开发者等组件库</p>
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
        <h2 id="one" :ref="anchor" class="cd-public-headline-h2">使用指南</h2>
        <div>
          <h4>安装</h4>
          <div class="cd-website-manual-whole-situation-content">
            <div>npm install carpediem-ui</div>
          </div>
        </div>
        <div>
          <h4>全局使用</h4>
          <div class="cd-website-manual-whole-situation-content">
            <div>import Carpediem from 'carpediem-ui'</div>
            <div>import 'carpediem-ui/lib/index.css'</div>
            <div>app.use(Carpediem)</div>
          </div>
        </div>
        <div>
          <h4>按需引入</h4>
          <div class="cd-website-manual-need-content">
            <div>import { CdButton } from 'carpediem-ui'</div>
            <div>import 'carpediem-ui/lib/index.css'</div>
            <div>app.use(CdButton)</div>
          </div>
        </div>
      </section>
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
import rightNav from "@/components/rightNav/inidex.vue";
import useCurrentAbchor from "@/hooks/useCurrentAnchor";
import useRightNavShow from "@/hooks/useRightNavShow";
import carpediem from "@/assets/carpediem.png";
import { onMounted, reactive, ref, watch } from "vue";
export default {
  components: {
    rightNav,
  },
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
    let isRightNavShow = ref<boolean>(true);
    useRightNavShow(isRightNavShow);
    // 对于锚点的处理
    let currentAnchor = ref<number>(-1);
    let anchorArray = ref<object[]>([]);
    const anchor = (el: object) => {
      anchorArray.value.push(el);
    };
    useCurrentAbchor(anchorArray, anchor, currentAnchor);
    return {
      carpediemImg,
      rightNavData,
      isRightNavShow,
      anchor,
      currentAnchor,
    };
  },
};
</script>

<style scoped>
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