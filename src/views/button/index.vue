<template>
  <div class="cd-website-button-farme">
    <section class="cd-website-button-left-farme"></section>
    <section class="cd-website-button-righy-farme" v-show="isRightNavShow">
      <h3 class="cd-website-button-right-title">CONTENTS</h3>
      <div
        v-for="(data, ind) in rightNavData"
        :key="ind"
        :class="{
          'cd-website-button-right-content': true,
          'cd-website-button-right-content-currentAnchor': currentAnchor == ind,
        }"
        @click="setCurrentAnchor(ind)"
      >
        <a :href="'#' + data.anchorName">{{ data.title }}</a>
      </div>
    </section>
  </div>
</template>

<script lang='ts'>
import useRightNavShow from "@/hooks/useRightNavShow";
import { ref } from "vue";
export default {
  setup() {
    let isRightNavShow = ref<boolean>(true);
    return {
      isRightNavShow,
    };
  },
};
</script>

<style scoped>
.cd-website-button-farme {
  position: relative;
  display: flex;
  padding: 35px;
}
.cd-website-button-left-farme {
  flex: 4;
}
.cd-website-button-righy-farme {
  position: sticky;
  height: 30px;
  top: 100px;
  flex: 1;
  margin-left: 64px;
}
.cd-website-button-right-title {
  font-size: 12px;
  color: #606266;
  line-height: 30px;
}
.cd-website-button-right-content {
  line-height: 23px;
  padding-left: 5px;
}
.cd-website-button-right-content-currentAnchor {
  border-left: 2.5px solid #409eff;
  border-radius: 5px;
}
.cd-website-button-right-content a {
  font-size: 12px;
  color: #909399;
}
</style>