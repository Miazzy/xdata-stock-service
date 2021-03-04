export default [{
    path: '/phoneRegister',
    name: 'phoneRegister',
    meta: {
        index: 2
    },
    component: () =>
        import ('@/views/register/phoneRegister')
}]