export default [{
    path: '/emailRegister',
    name: 'emailRegister',
    meta: {
        index: 2
    },
    component: () =>
        import ('@/views/register/emailRegister')
}]