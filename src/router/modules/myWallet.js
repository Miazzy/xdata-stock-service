export default [{
    path: '/myWallet',
    name: 'myWallet',
    meta: {
        index: 15
    },
    component: () =>
        import ('@/views/wallet/myWallet.vue')
}]