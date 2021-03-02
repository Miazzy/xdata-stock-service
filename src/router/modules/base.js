export default [{
    path: '/base',
    name: 'base',
    meta: {
        index: 101
    },
    component: () =>
        import ('@/views/base/base.vue')
}, {
    path: '/company',
    name: 'company',
    meta: {
        index: 102
    },
    component: () =>
        import ('@/views/base/company.vue')
}, {
    path: '/alteration',
    name: 'alteration',
    meta: {
        index: 103
    },
    component: () =>
        import ('@/views/base/alteration.vue')
}, {
    path: '/pledge',
    name: 'pledge',
    meta: {
        index: 104
    },
    component: () =>
        import ('@/views/base/pledge.vue')
}, {
    path: '/annals',
    name: 'annals',
    meta: {
        index: 104
    },
    component: () =>
        import ('@/views/base/annals.vue')
}, {
    path: '/withdraw',
    name: 'withdraw',
    meta: {
        index: 104
    },
    component: () =>
        import ('@/views/base/withdraw.vue')
}, {
    path: '/news',
    name: 'news',
    meta: {
        index: 104
    },
    component: () =>
        import ('@/views/home/news.vue')
}]