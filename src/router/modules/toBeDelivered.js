export default [{
    path: '/toBeDelivered',
    name: 'toBeDelivered',
    meta: {
        index: 11
    },
    component: () =>
        import ('@/views/order/toBeDelivered.vue')
}]