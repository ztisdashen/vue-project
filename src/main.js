import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from 'components/common/toast/'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'

Vue.use(VueLazyLoad, {
    loading: require("./assets/img/ddd.png")
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
new Vue({
    router, store,
    render: h => h(App),
}).$mount('#app')
FastClick.attach(document.body)