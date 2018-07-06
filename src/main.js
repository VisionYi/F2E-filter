import 'vuetify/dist/vuetify.min.css';
import '@/assets/simple-grid.min.css';
import '@/assets/scss/main.scss';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components/index';

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#00BCD4',
    secondary: '#4DD0E1',
  },
});

// 自動載入全局的 components
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
