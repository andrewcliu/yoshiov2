import Vue from 'vue/dist/vue.esm';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Home from './views/Home.vue';
import ToGo from './views/ToGo.vue';
import Gallery from './views/Gallery.vue';
import Info from './views/Info.vue';
import Delivery from './views/Delivery.vue';
Vue.use(Router);


const router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:Home
		},
		{
			path:'/menu',
			component: Menu
		},
		{
			path: '/togo',
			component: ToGo
		},
		{
			path: '/gallery',
			component: Gallery
		},
		{
			path: '/delivery',
			component: Delivery
		},
		{
			path: '/info',
			component: Info
		}
	]
})

export default router;