import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter.js'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.filter('dateFilter', dateFilter) // название , функция

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
