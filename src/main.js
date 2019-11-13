import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

let instance = null;

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#vuecli');
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
