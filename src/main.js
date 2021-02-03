import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import dateFilter from '@/filters/date.filter.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('dateFilter', dateFilter) // название , функция

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
