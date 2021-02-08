import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.config.productionTip = false
//这里全局注册了elemntUI 组件 可以直接引用他的子组件
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')