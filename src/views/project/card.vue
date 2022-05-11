<template>
  <div
    class="h-64 w-72 mobile:w-full py-5 pl-4 bg-white rounded card-border dark:bg-card-dark overflow-hidden flex flex-col justify-between"
  >
    <p class="text-lg text-secondary font-bold uppercase mb-2">
      {{ project.name }}
    </p>
    <div class="flex overflow-hidden mb-2">
      <p
        class="min-w-[75%]"
        style="
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        "
      >
        {{ project.describe }}
      </p>
      <img
        style="max-height: 200px; max-width: 200px; min-height: 150px"
        :src="project.img"
        @error="imgUrlAlt"
      />
    </div>
    <div class="flex ml-6">
      <a
        class="mr-6"
        target="_blank"
        :class="{ 'disabled-link': !project.git }"
        :href="project.git"
      >
        <icon
          name="github"
          :class="{
            'fill-path-gray': !project.git,
            'hover:fill-path-secondary': project.git,
          }"
        />
      </a>
      <a
        target="_blank"
        :class="{
          'disabled-link': !project.link,
          'hover:fill-path-secondary': project.link,
        }"
        :href="project.link"
      >
        <icon name="world" :class="{ 'fill-path-gray': !project.link }" />
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import type { PropType } from "vue";

interface IProject {
  name: string;
  describe: string;
  img: string;
  link: string;
  git: string;
  type: string;
}
export default Vue.extend({
  props: {
    project: {
      required: true,
      type: Object as PropType<IProject>,
    },
  },
  methods: {
    imgUrlAlt(event: any) {
      event.target.src = require("@/assets/icons/LN.svg");
    },
  },
});
</script>
<style scoped>
.card-border {
  box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2);
}
.disabled-link {
  pointer-events: none;
}
</style>
