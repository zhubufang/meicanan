import Vue from "vue";
import Router from "vue-router";
import store from './store/index'


Vue.use(Router);

let router = new Router({
    routes: [{
            path: "/",
            redirect: "/index",
        },
        {
            path: '/sign',
            component: () => import('@/views/sign'),
        },
        //颐养之家
        {
            path: '/yanglaoyuan',
            component: () => import('@/views/yanglaoyuan'),
        },
        //颐养之家搜索列表
        {
            path: '/searchStore',
            component: () => import('@/views/searchStore'),
        },
        //学校
        {
            path: '/school',
            component: () => import('@/views/school'),
        },
        {
            path: '/index',
            component: () => import('@/views/layout'),
            redirect: "/index/index",
            children: [{
                    path: 'index',
                    component: () => import('@/views/index'),
                },
                //资讯
                {
                    path: 'news',
                    component: () => import('@/views/news'),
                },
                //用户
                {
                    path: 'user',
                    component: () => import('@/views/user'),
                },
            ]
        }

    ]
});




export default router