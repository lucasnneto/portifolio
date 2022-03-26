import Vue, { PluginObject } from "vue";
const mobileBreakPoint = 669;
const sm = (val: number) => val <= mobileBreakPoint;

// const debounce = function (func: any, wait: number) {
//   let timeout: any;
//   return () => {
//     const later = function () {
//       timeout = null;
//     };
//     const callNow = !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func();
//   };
// };
export const isMobile = Vue.observable({ value: sm(window.innerWidth) });

window.addEventListener(
  "resize",
  () => {
    isMobile.value = sm(window.innerWidth);
  },
  // debounce(() => {
  //   console.log(window.innerWidth, mobileBreakPoint);
  //   statusMobile.isMobile = sm(window.innerWidth);
  // }, 200),
  false
);
const mobilePlugin: PluginObject<undefined> = {
  install(Vue) {
    Vue.prototype.$isMobile = isMobile;
  },
};
export default mobilePlugin;
