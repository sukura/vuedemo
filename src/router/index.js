import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import Layout from '@/components/layout/layout';
import Login from '../views/login';
import index from '../views/index';
import form from '../views/form';
import error1 from '../views/error/error404';
import error2 from '../views/error/error500';

Vue.use(Router);

export const constantRouterMap = [
    { path: '/', component: Login, hidden: true},
    {
        path: '/layout',
        component: Layout,
        children: [
            { path: '/index', component: index, name: '首页', meta: { title: '首页'}}
        ]
    },
    {
        path: '/form',
        component: Layout,
        children: [
            { path: '/form', component: form, name: '表单', meta: { title: '表单'}}
        ]
    },
    {
        path: '/error',
        component: Layout,
        name: '错误页面',
        meta: {title: '错误页面'},
        children: [
            { path: '/error1', component: error1, name: '404', meta: { title: '404'}},
            { path: '/error2', component: error2, name: '500', meta: { title: '404'}},
        ]
    }
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});