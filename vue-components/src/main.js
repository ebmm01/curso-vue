import Vue from 'vue'
import App from './assets/App.vue'
//import AppContador from './assets/AppContador.vue'

//Vue.component('app-contador', AppContador)

new Vue({
  el: "#app",
  render: h => h(App)
})
