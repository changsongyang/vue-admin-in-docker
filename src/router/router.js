import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/audit',
        icon: 'person-add',
        name: 'audit',
        title: '帐号审核',
        component: Main,
        children: [{
            path: 'audit-personal',
            title: '个人帐号审核',
            name: 'audit-personal',
            component: () => import('@/views/audit/audit-personal/audit-personal.vue')
        },{
            path: 'audit-company',
            title: '企业帐号审核',
            name: 'audit-company',
            component: () => import('@/views/audit/audit-company/audit-company.vue')
        }]
    },
    {
        path: '/app',
        icon: 'briefcase',
        name: 'app',
        title: '套餐应用审核',
        component: Main,
        children: [{
            path: 'custom-package',
            title: '企业自定义套餐审核',
            name: 'custom-package',
            component: () => import('@/views/app/custom-package/custom-package.vue')
        },{
            path: 'open-app',
            title: '开放平台应用审核',
            name: 'open-app',
            component: () => import('@/views/app/open-app/open-app.vue')
        }]
    },
    {
        path: '/user',
        icon: 'person-stalker',
        name: 'user',
        title: '用户列表',
        component: Main,
        children: [{
            path: 'user-personal',
            title: '个人用户',
            name: 'user-personal',
            component: () => import('@/views/user/user-personal/user-personal.vue')
        },{
            path: 'user-company',
            title: '企业用户',
            name: 'user-company',
            component: () => import('@/views/user/user-company/user-company.vue')
        }]
    },
    {
        path: '/order',
        icon: 'social-yen',
        name: 'order',
        title: '订单列表',
        component: Main,
        children: [{
            path: 'package-order',
            title: '套餐订单',
            name: 'package-order',
            component: () => import('@/views/order/package-order/package-order.vue')
        }]
    },
    {
        path: '/contract',
        icon: 'ios-folder-outline',
        name: 'contract',
        title: '合同列表',
        component: Main,
        children: [{
            path: 'online-contract',
            title: '在线合同',
            name: 'online-contract',
            component: () => import('@/views/contract/online-contract/online-contract.vue')
        },{
            path: 'open-contract',
            title: 'API合同',
            name: 'open-contract',
            component: () => import('@/views/contract/open-contract/open-contract.vue')
        }]
    },
    {
        path: '/certificate',
        icon: 'android-lock',
        name: 'certificate',
        title: '证书列表',
        component: Main,
        children: [{
            path: 'tianwei-certificate',
            title: '天威证书',
            name: 'tianwei-certificate',
            component: () => import('@/views/certificate/tianwei-certificate/tianwei-certificate.vue')
        },{
            path: 'beijing-certificate',
            title: '北京证书',
            name: 'beijing-certificate',
            component: () => import('@/views/certificate/beijing-certificate/beijing-certificate.vue')
        }]
    },

];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
