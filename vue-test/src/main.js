// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  // eslint-disable-line no-new no-undef
  el: '#app',
  components: { App },
  template: '<App/>'
})
