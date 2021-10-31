import "../styles/style.scss";
import mymodule from "./mymodule";

import Vue from 'vue';
import VueApp from './VueApp.vue';

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
})

mymodule();
console.log("hoge");