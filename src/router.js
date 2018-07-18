import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Item from './views/Item.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/item',
      name: 'item',
      component: Item,
    },
  ],
});
