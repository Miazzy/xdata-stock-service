export default [{
    path: '/nodePool',
    name: 'nodePool',
    meta: {
        index: 15
    },
    component: () =>
        import ('@/views/pool/nodePool.vue')
}]