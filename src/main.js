// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import registerEvents from 'serviceworker-webpack-plugin/lib/browser/registerEvents'

Vue.config.productionTip = false

import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import 'bulma/css/bulma.css'

if ('serviceWorker' in navigator) {
  const registration = runtime.register()
  registerEvents(registration, {
    onInstalled: () => {
      this.pushLog('onInstalled')
    },
    onUpdateReady: () => {
      this.pushLog('onUpdateReady')
    },

    onUpdating: () => {
      this.pushLog('onUpdating')
    },
    onUpdateFailed: () => {
      this.pushLog('onUpdateFailed')
    },
    onUpdated: () => {
      this.pushLog('onUpdated')
    }
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
