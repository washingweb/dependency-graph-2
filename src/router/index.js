import Vue from 'vue';
import Router from 'vue-router';
import Design from '@/components/Design';
import Config from '@/components/Config';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: `${routePrefix}/design`,
      name: 'design',
      component: Design,
    },
    {
      path: `${routePrefix}/config`,
      name: 'config',
      component: Config,
    },
    {
      path: '*',
      redirect: `${routePrefix}/design`,
    },
  ],
});
