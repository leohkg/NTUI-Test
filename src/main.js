import Vue from 'vue'
import App from './App.vue'

import './styles/button.less';
import Button from './components/button/index.js';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
