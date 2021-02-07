import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter.js'
import router from './router'
import store from './store'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// import { filter } from 'core-js/fn/array'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.filter('dateFilter', dateFilter) // название , функция

firebase.initializeApp({
  apiKey: 'AIzaSyCBFF9vWiMfxfLkY4nEaTqmDx5NwDZW9mw',
  authDomain: 'vue-crm--project.firebaseapp.com',
  projectId: 'vue-crm--project',
  storageBucket: 'vue-crm--project.appspot.com',
  messagingSenderId: '708165566235',
  appId: '1:708165566235:web:375bb4266bb0637718ddbe',
  measurementId: 'G-1NZGJF4W6N'
})

let app

firebase.auth().onAuthStateChanged(() => { // Находит данные, которые помогают поддерживать автоматическую авторизацию пользователю
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
