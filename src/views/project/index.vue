<template>
  <div class="about flex overflow-hidden mobile:flex-col">
    <div
      class="h-full mobile:h-auto flex flex-col mobile:flex-row justify-evenly mobile:mt-4"
    >
      <button
        class="group flex flex-col items-center"
        @click="screen = 'front'"
      >
        <icon
          class="group-hover:fill-path-secondary mb-2"
          name="front"
          :class="{ 'fill-path-primary': screen === 'front' }"
        />
        <p
          class="font-medium text-lg group-hover:text-secondary"
          :class="{ 'text-primary': screen === 'front' }"
        >
          Front-end
        </p>
      </button>
      <button class="group flex flex-col items-center" @click="screen = 'back'">
        <icon
          class="group-hover:fill-path-secondary mb-2"
          :class="{ 'fill-path-primary': screen === 'back' }"
          name="back"
        />
        <p
          class="font-medium text-lg group-hover:text-secondary"
          :class="{ 'text-primary': screen === 'back' }"
        >
          Back-end
        </p>
      </button>
      <button
        class="group flex flex-col items-center"
        @click="screen = 'mobile'"
      >
        <icon
          class="group-hover:fill-path-secondary mb-2"
          :class="{ 'fill-path-primary': screen === 'mobile' }"
          name="mobile"
        />
        <p
          class="font-medium text-lg group-hover:text-secondary"
          :class="{ 'text-primary': screen === 'mobile' }"
        >
          Mobile
        </p>
      </button>
    </div>
    <div
      class="w-full mobile:h-full overflow-auto ml-14 mt-12 mobile:ml-0 mt-4"
    >
      <div class="flex flex-wrap pl-2 pt-2 mobile:p-2" v-if="projects.length">
        <card
          class="mr-10 mb-10 mobile:mr-2 mobile:mb-4"
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
      <div class="flex flex-col justify-center items-center h-full" v-else>
        <p class="text-xl mobile:text-lg font-medium">NADA AQUI,</p>
        <p class="text-xl mobile:text-lg font-medium mb-5">
          ESTOU TRABALHANDO PARA ISSO!!
        </p>
        <icon name="work" class="fill-path-secondary" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import card from "./card.vue";
import { projects } from "@/mixins/constraints";
export default Vue.extend({
  components: {
    card,
  },
  data: () => ({
    screen: "front",
  }),
  computed: {
    projects() {
      return projects.filter((el) => el.type === this.screen);
    },
  },
});
</script>
