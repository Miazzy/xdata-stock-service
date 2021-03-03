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
        index: 105
    },
    component: () =>
        import ('@/views/base/annals.vue')
}, {
    path: '/withdraw',
    name: 'withdraw',
    meta: {
        index: 106
    },
    component: () =>
        import ('@/views/base/withdraw.vue')
}, {
    path: '/news',
    name: 'news',
    meta: {
        index: 107
    },
    component: () =>
        import ('@/views/home/news.vue')
}, {
    path: '/allowance',
    name: 'allowance',
    meta: {
        index: 108
    },
    component: () =>
        import ('@/views/base/allowance.vue')
}, {
    path: '/qualification',
    name: 'qualification',
    meta: {
        index: 109
    },
    component: () =>
        import ('@/views/base/qualification.vue')
}, {
    path: '/property',
    name: 'property',
    meta: {
        index: 110
    },
    component: () =>
        import ('@/views/base/property.vue')
}, {
    path: '/account',
    name: 'account',
    meta: {
        index: 111
    },
    component: () =>
        import ('@/views/base/account.vue')
}, {
    path: '/lawsuit',
    name: 'lawsuit',
    meta: {
        index: 112
    },
    component: () =>
        import ('@/views/base/lawsuit.vue')
}, {
    path: '/punish',
    name: 'punish',
    meta: {
        index: 113
    },
    component: () =>
        import ('@/views/base/punish.vue')
}, {
    path: '/license',
    name: 'license',
    meta: {
        index: 114
    },
    component: () =>
        import ('@/views/base/license.vue')
}, {
    path: '/otherlicense', //businesslicense
    name: 'otherlicense',
    meta: {
        index: 115
    },
    component: () =>
        import ('@/views/base/otherlicense.vue')
}, {
    path: '/businesslicense', //businesslicense
    name: 'businesslicense',
    meta: {
        index: 116
    },
    component: () =>
        import ('@/views/base/businesslicense.vue')
}, {
    path: '/certificate', //businesslicense
    name: 'certificate',
    meta: {
        index: 117
    },
    component: () =>
        import ('@/views/base/certificate.vue')
}]