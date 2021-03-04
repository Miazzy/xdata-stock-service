export default [{
    path: '/nodeApplication',
    name: 'nodeApplication',
    meta: {
        index: 15
    },
    component: () =>
        import ('@/views/node/nodeApplication.vue')
}]