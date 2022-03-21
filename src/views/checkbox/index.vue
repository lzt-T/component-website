<template>
  <div class="cd-public-frame">
    <section class="cd-public-left-frame">
      <h1 class="cd-public-headline-h1">Checkbox 多选框</h1>
      <p class="cd-public-p">在一组备选选项中进行多选</p>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">基础用法</h2>
      <p class="cd-public-p">
        单独使用可以表示两种状态之间的切换,使用
        <code>v-model</code> 属性绑定多选框的状态
      </p>
      <p class="cd-public-p">
        用户可以通过 <code>size</code> 属性控制多选框的大小
      </p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" :size="60">Option1</cd-checkbox>
          <cd-checkbox v-model="option2" :size="60">Option2</cd-checkbox>
        </cd-row>
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1">Option1</cd-checkbox>
          <cd-checkbox v-model="option2">Option2</cd-checkbox>
        </cd-row>
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" :size="40">Option1</cd-checkbox>
          <cd-checkbox v-model="option2" :size="40">Option2</cd-checkbox>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" :size="60">Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2" :size="60">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1">Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" :size="40">Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2" :size="40">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
        export default {
            setup(){
                let option1 = ref&lt;boolean>(true);
                let option2 = ref&lt;boolean>(false);
                return {
                    option1,
                    option2,
                };
            }
        }
    &lt;/script&gt;

    &lt;style scoped>
    .cd-checkbox-row-margin {
        margin: 10px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
      <h2 id="one" :ref="anchor" class="cd-public-headline-h2">禁用状态</h2>
      <p class="cd-public-p">多选框的不可用状态</p>
      <p class="cd-public-p">用户可以通过 <code>disabled</code> 属性控制</p>
      <div class="cd-public-div-frame">
        <cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          <cd-checkbox v-model="option1" disabled>Option1</cd-checkbox>
          <cd-checkbox v-model="option2">Option2</cd-checkbox>
        </cd-row>
      </div>
      <cd-collapse title="查看代码">
        <pre>
    &lt;template&gt;
        &lt;cd-row :gap="20" class="cd-checkbox-row-margin" flexWrap="wrap">
          &lt;cd-checkbox v-model="option1" disabled>Option1&lt;/cd-checkbox>
          &lt;cd-checkbox v-model="option2">Option2&lt;/cd-checkbox>
        &lt;/cd-row>
    &lt;/template&gt;

    &lt;script lang="ts">
    import { ref } from "vue";
        export default {
            setup(){
                let option1 = ref&lt;boolean>(true);
                let option2 = ref&lt;boolean>(false);
                return {
                    option1,
                    option2,
                };
            }
        }
    &lt;/script&gt;

    &lt;style scoped>
    .cd-checkbox-row-margin {
        margin: 10px 0px;
    }
    &lt;/style>
        </pre>
      </cd-collapse>
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
    //   测试数据
    let option1 = ref<boolean>(true);
    let option2 = ref<boolean>(false);
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
        title: "禁用状态",
      },
      {
        anchorName: "three",
        title: "图标链接",
      },
      {
        anchorName: "four",
        title: "Link 属性",
      },
      {
        anchorName: "five",
        title: "Link 插槽",
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
    return {
      rightNavData,
      isRightNavShow,
      currentAnchor,
      anchor,
      option1,
      option2,
    };
  },
};
</script>

<style scoped>
.cd-checkbox-row-margin {
  margin: 10px 0px;
}
</style>