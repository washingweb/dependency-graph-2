import Vue from 'vue';
import Router from 'vue-router';
import Design from '@/components/Design';
import Config from '@/components/Config';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/design',
      name: 'design',
      component: Design,
    },
    {
      path: '/config',
      name: 'config',
      component: Config,
    },
    {
      path: '*',
      redirect: '/design',
    },
  ],
});
