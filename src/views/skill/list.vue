<template>
  <div class="w-1/3 mobile:w-full flex flex-col">
    <div class="flex flex-col mobile:flex-row items-center mb-8">
      <icon class="group-hover:fill-path-secondary mobile:mr-6" :name="type" />
      <p class="font-medium text-2xl mt-1">{{ title }}</p>
    </div>
    <div
      class="overflow-auto flex flex-wrap justify-center mobile:justify-start"
    >
      <card
        v-for="skill in skills[type]"
        :key="skill.name"
        :skill="skill"
        class="mr-3 mb-3"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import card from "./card.vue";
import { skills } from "@/mixins/constraints";
export default Vue.extend({
  props: {
    type: {
      type: String as PropType<"front" | "back" | "mobile">,
      required: true,
    },
  },
  data() {
    return { skills };
  },

  components: { card },
  computed: {
    title(): string {
      const title = {
        front: "Front-end",
        back: "Back-end",
        mobile: "Mobile",
      };
      return title[this.type] || "";
    },
  },
});
</script>
