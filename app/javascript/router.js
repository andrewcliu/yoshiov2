import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router';
import About from './views/About.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:Home
		},
		{
			path:'/about',
			component: About
		}
	]
})