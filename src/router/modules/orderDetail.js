export default [{
    path: '/orderDetail',
    name: 'home',
    meta: {
        index: 3
    },
    component: () =>
        import ('@/views/order/orderDetail.vue')
}]