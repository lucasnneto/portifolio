<template>
  <div
    class="relative flex flex-col justify-center mobile:justify-start mobile:items-center"
  >
    <h2
      class="transition ease-in-out text-5xl mobile:text-4xl mobile:mt-7 font-medium mb-5"
    >
      <span class="text-primary">L</span>UCAS
      <span class="text-primary">N</span>ETO
    </h2>
    <p class="text-2xl mobile:text-xl font-medium subline-destaque mb-2">
      DESENVOLVEDOR FULL-STACK
    </p>
    <p
      class="text-2xl mobile:text-xs mobile:text-gray-500 dark:mobile:text-gray-300 mb-2"
    >
      Com ênfase em Front-end
    </p>
    <p class="text-sm fhd:text-lg mb-14">
      Estou sempre buscando aprender coisas novas para resolução de desafios em
      design e performance.
    </p>
    <tag />
    <div class="w-full absolute bottom-0 z-10 flex justify-center">
      <router-link to="/skill">
        <icon class="animate-bounce" name="arrow" />
      </router-link>
    </div>
    <icon name="dev" class="absolute bottom-0 right-0 mobile:-right-1/2" />
  </div>
</template>
<script lang="ts">
import tag from "./tag.vue";
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  components: {
    tag,
  },
});
</script>
