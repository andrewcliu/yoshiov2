import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Home from './views/Home.vue';
import ToGo from './views/ToGo.vue';
import Gallery from './views/Gallery.vue';
Vue.use(Router);

export default new Router({
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
		}
	]
})