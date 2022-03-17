<template>
  <section class="cd-public-right-frame" v-show="isRightNavShow">
    <h3 class="cd-public-rightnav-title">CONTENTS</h3>
    <div
      v-for="(data, ind) in rightNavData"
      :key="ind"
      :class="{
        'cd-public-rightnav-content': true,
        'cd-public-rightnav-currentAnchor': currentAnchor == ind,
      }"
      @click="setCurrentAnchor(ind)"
    >
      <a :href="'#' + data.anchorName">{{ data.title }}</a>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, watch, defineComponent } from "vue";
import useAbchorClick from "@/hooks/useAbchorClick";
export default defineComponent({
  props: {
    isRightNavShow: {
      type: Boolean,
      default: true,
    },
    rightNavData: {
      type: Array,
    },
    currentAnchor: {
      type: Number,
      default: -1,
    },
  },
  setup(props, context) {
    let currentAnchorData = ref<number>(-1);
    watch(
      () => {
        return props.currentAnchor;
      },
      (newval, old) => {
        currentAnchorData.value = newval;
      }
    );
    function setCurrentAnchor(ind: number): void {
      useAbchorClick(ind, currentAnchorData);
    }
    return {
      setCurrentAnchor,
    };
  },
});
</script>

<style scoped>
</style>