export default [{
    path: '/personInfo',
    name: 'personInfo',
    meta: {
        index: 13
    },
    component: () =>
        import ('@/views/mine/personInfo.vue')
}]