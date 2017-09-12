import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import Layout from '@/components/layout/layout';
import Login from '../views/login';

Vue.use(Router);

export const constantRouterMap = [
    { path: '/', component: Login, hidden: true},
    {
        path: '/layout',
        component: Layout
    }
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});