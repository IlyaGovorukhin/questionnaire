
// JS - ./js/index.js
import './js/'
// SCSS
import './scss/main.scss'
// CSS (example)
import './css/main.css'

// Bootstrap (example)
 import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
 //import 'bootstrap/dist/css/bootstrap.min.css'

// import 'vue'
//import Vue from 'vue'
window.Vue = require('vue');

//import store from './store';
import VueMask from 'v-mask'
import Router from 'vue-router';
  import DatePick from 'vue-date-pick';
import FirstPartForm from './components/FirstPartForm.vue';
import SecondPartForm from './components/SecondPartForm.vue';
import ShowResultAfterCreatePoll from './components/ShowResultAfterCreatePoll.vue';
import App from './components/Example.vue';
import 'vue-date-pick/dist/vueDatePick.css';

Vue.use(Router);
Vue.use(VueMask);
const router = new Router({
 routes: [
   {
     path: '/',
     name:'FirstPartForm',
     component: FirstPartForm,
   },
   {
     path: '/SecondPartForm',
     name:'SecondPartForm',
     component: SecondPartForm,
     props: true,
   },
   {
     path: '/ShowResultAfterCreatePoll',
     name:'ShowResultAfterCreatePoll',
     component: ShowResultAfterCreatePoll,
     props: true,
   },
 ],
  mode: 'history'
})
//Vue.use(Router)
//Vue.component('example-component', require('./components/Example.vue').default)

// With vuex
// const app = new Vue({
//   data () {
//     return {
//       component: false,
//     }
//   },
//   store,
//   el: '#app',
//   router

// })

//* Without vuex and store
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { DatePick }
  
})