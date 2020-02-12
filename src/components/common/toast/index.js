import Toast from './Toast'

const obj = {}
obj.install = function (Vue) {
    // console.log('hahahaahahah',Vue);

    // document.body.appendChild(Toast.$el)
    // 1. 创建组件构造器
    const toastConstructor = Vue.extend(Toast)
    // 通过new的方式 创建组件对象
    const toast = new toastConstructor()
    // 手动将toast挂载到div上
    toast.$mount(document.createElement('div'))
    // $el就是div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast

}
export default obj