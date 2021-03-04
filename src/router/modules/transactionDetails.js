export default [{
    path: '/transactionDetails',
    name: 'transactionDetails',
    meta: {
        index: 4
    },
    component: () =>
        import ('@/views/order/transactionDetails.vue')
}]