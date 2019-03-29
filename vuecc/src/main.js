import Vue from 'vue'
import App from './App.vue'
import  ElementUI	from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VRouter from 'vue-router'
// import Helloword from './components/HelloWorld.vue'
import menutwo from './pages/menu-two.vue'
import menuone from './pages/menu-one.vue'
import menutree from './pages/menu-tree.vue'
import axios from 'axios'



Vue.use(ElementUI)
Vue.use(VRouter)
Vue.prototype.axios = axios
// console.log(http.axios,'http')
Vue.config.productionTip = false
const router=new VRouter({
	mode:'history',
	routes:[
		{
				path:'/menuone',
				name:'menuone',
				component:menutree
		},
		{
				path:'/menutwo',
				name:'menutwo',
				component:menutwo
		},
		{
				path:'/menutree',
				name:'menutree',
				component:menuone
		}
		]
	
})

// var $http = axios.create({
// baseURL: 'http://127.0.0.1:8181',
// timeout: 1000
// });

new Vue({
	// el:'#app',
	router,
  render: h => h(App),
}).$mount('#app')
