export default [{
    path: '/pendingReceipt',
    name: 'pendingReceipt',
    meta: {
        index: 11
    },
    component: () =>
        import ('@/views/order/pendingReceipt.vue')
}]