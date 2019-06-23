import Vue from 'vue'
import router from '@/router/index'
import store from '@/store/index'
import App from '@/app'
import { Image, Switch, Checkbox, Popup, Picker, Swipe, SwipeItem, Tab, Tabs, TreeSelect, Tabbar, TabbarItem } from 'vant'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1,
    lazyComponent: true
});

Vue.use(Image)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tab).use(Tabs)
Vue.use(TreeSelect)
Vue.use(Tabbar).use(TabbarItem)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
