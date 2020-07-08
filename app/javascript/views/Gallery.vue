<template>
	<div class='rootPadding'>
		<div class='row'>
			<div class='col m4 offset-m4 s12 woodBg'>
				<h3 class="title center-align">ギャラリー</h3>
			</div>
		</div>
		<div v-lazy-container="{ selector: 'img' }">
			<masonry
			  :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
			  :gutter="{default: '30px', 700: '15px'}"
			  >
			  <div v-for="(n, index) in 82" :key="index">
			  	<img :src="require('gallery/' + n + '.jpg')" style='width:100%;'/>
			  </div>
			</masonry>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue/dist/vue.esm'
	import VueMasonry from 'vue-masonry-css'

	Vue.use(VueMasonry);

	export default{
		name: 'Gallery'
	}

</script>