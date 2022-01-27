/**
 * Imported Packages and Components.
 */
 import Vue from 'vue'
 import VueRouter from 'vue-router';
 import App from './App.vue'
 import vuetify from './plugins/vuetify';
 import { store } from './store/store';
 import { routes } from './routes.js';
 /**
  * Configuration and Setting up the packages with the Vue.
  */
 
 Vue.use(VueRouter);
 const router = new VueRouter({
   mode: 'history',
   routes,
 });
 
 /**
  * Create The Vue App Core Instance. 
  */
 
 new Vue({
   el: '#app',
   store,
   router,
   vuetify,
   render: h => h(App)
 })
 