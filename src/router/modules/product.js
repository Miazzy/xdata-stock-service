export default [{
    path: '/product',
    name: 'product',
    meta: {
        index: 25
    },
    component: () =>
        import ('@/views/product/index.vue')
}]