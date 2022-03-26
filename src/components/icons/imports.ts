import Vue from "vue";
import icons from "./index.vue";
Vue.component(`icon`, icons);

const ComponentContext = require.context("./", true, /\.vue$/i, "lazy");

ComponentContext.keys()
  .filter((file) => file !== "./index.vue")
  .forEach((componentFilePath) => {
    const name = (componentFilePath.match(/(\w*)\.vue$/) as Array<string>)[1];
    Vue.component(name, () => ComponentContext(componentFilePath));
  });
