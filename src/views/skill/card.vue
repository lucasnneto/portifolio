<template>
  <div class="w-24 h-28 flex flex-col justify-between items-center">
    <div class="h-full flex items-center">
      <img
        :src="require(`@/assets/icons/skills/${skill.icon}.svg`)"
        alt=""
        height="60"
        width="60"
      />
    </div>
    <div class="flex mt-4">
      <p class="text-base font-bold whitespace-nowrap">
        {{ skill.name }}
      </p>
      <div v-if="skill.warn" class="has-tooltip mobile:relative">
        <span
          class="tooltip rounded shadow-lg p-1 dark:bg-white bg-backgound-dark dark:text-black text-white -mt-8 text-xs mobile:left-[-45px] mobile:top-[-5px]"
          >Conhecimentos Intermediário</span
        >
        <icon name="warn" class="ml-1" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import type { PropType } from "vue";

interface ISkill {
  name: string;
  icon: string;
  warn?: boolean;
}
export default Vue.extend({
  props: {
    skill: {
      required: true,
      type: Object as PropType<ISkill>,
    },
  },
});
</script>
<style scoped>
.disabled-link {
  pointer-events: none;
}
</style>
