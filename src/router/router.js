import Main from '../views/main/main.vue'
export default [
    {
        path: '/',
        name: 'home',
        component: Main,
        meta: {

        },
        children: [

        ]
    },
    {
        path: '/403',
        name: 'error_403',
        meta: {
            hideInMenu: true
        },
        component: () => import('../views/error-page/403.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('../views/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('../views/error-page/404.vue')
    }
]
