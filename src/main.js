import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import Patient from './views/patient'
// import axios from ' axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 
Vue.use(ElementUI)
Vue.config.productionTip = false 



new Vue({
  render: h => h(App),
  router,
  ElementUI

}).$mount('#app')
// new Vue({
//   render: (h) => h( Home),
// }).$mount('#app');
