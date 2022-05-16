<template>
  <div
    class="transition duration-[0ms] delay-75 absolute z-40 bottom-0 left-0 bg-black/50 dark:bg-white/50 h-full w-full"
    :class="value ? 'translate-x-0' : '-translate-x-full'"
    @click="closeModal"
  >
    <div
      :class="value ? 'translate-x-0' : '-translate-x-full'"
      @click.prevent.stop
      class="transition py-5 absolute z-50 top-0 left-0 bg-white dark:bg-backgound-dark h-full w-2/3 flex flex-col justify-between"
    >
      <div>
        <div class="px-3 mb-5 flex items-center">
          <button @click="closeModal">
            <icon name="close" />
          </button>
        </div>
        <ul @click="closeModal">
          <router-link
            v-for="tab in tabs"
            :key="tab.name"
            tag="li"
            class="w-full p-3 hover:font-bold hover:text-secondary text-xl mb-2"
            :class="{
              'bg-primary text-white font-bold': pathAtual === tab.path,
            }"
            :to="tab.path"
          >
            {{ tab.name }}
          </router-link>
        </ul>
      </div>
      <div class="flex justify-center">
        <icon name="LN" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
interface ITab {
  name: string;
  path: string;
}
export default Vue.extend({
  props: ["value"],
  data: () => ({
    tabs: [
      { name: "INICIO", path: "/" },
      { name: "HABILIDADES", path: "/skill" },
      { name: "PROJETOS", path: "/project" },
      { name: "SOBRE MIM", path: "/about" },
    ] as ITab[],
  }),
  computed: {
    pathAtual(): string {
      return this.$route.path;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
});
</script>
<style scoped>
ul li a {
  width: 100%;
  text-decoration: none;
}
</style>
