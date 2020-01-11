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
		{
		    path: '/yanglaoyuan',
		    component: () => import('@/views/yanglaoyuan'),
		},
        {
            path: '/index',
            component: () => import('@/views/layout'),
            redirect: "/index/index",
            children: [{
                    path: 'index',
                    component: () => import('@/views/index'),
                },
                {
                    path: 'mealTable',
                    component: () => import('@/views/mealTable'),
                },
                {
                    path: 'score',
                    component: () => import('@/views/score'),
                },
                {
                    path: 'messageBoard',
                    component: () => import('@/views/messageBoard'),
                }
            ]
        }
    
    ]
});




export default router