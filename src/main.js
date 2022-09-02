import Vue from 'vue'
import App from './App.vue'

import './styles/button.less';
// import Button from './components/button/index.js'; //按需加载
import NTUI from './components'; // 全部加载
Vue.use(NTUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
