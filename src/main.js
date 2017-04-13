import Vue from 'vue';
import App from './App';
import router from './route';
import axios from 'axios';
import store from './store'
import './less/index';


Vue.config.debug = true;
Vue.prototype.http = axios;

const app = new Vue({
  store,
  router,
  ...App
}).$mount('#app');
