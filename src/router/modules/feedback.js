export default [{
    path: '/feedback',
    name: 'feedback',
    meta: {
        index: 15
    },
    component: () =>
        import ('@/views/mine/feedback.vue')
}]