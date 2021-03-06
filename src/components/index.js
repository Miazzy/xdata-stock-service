function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function validateFileName(str) {
    return /^\S+\.vue$/.test(str) &&
        str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

const requireComponent = require.context('.', true, /\.vue$/)

export default {
    install(app) {
        // 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
        requireComponent.keys().forEach(filePath => {
            const componentConfig = requireComponent(filePath)
            const fileName = validateFileName(filePath)
            const componentName = fileName.toLowerCase() === 'index' ?
                capitalizeFirstLetter(componentConfig.default.name) :
                fileName
            app.component(componentName, componentConfig.default || componentConfig)
        })
    }
}