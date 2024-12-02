import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/MyHome';
import Create from '@/components/MyCreate';
import Table from '@/components/MyTable';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/'
            ,component:Home
        },
        {
            path:'/table'
            ,component:Table
        },
        {
            path:'/create'
            ,component:Create
        }
    ]
})