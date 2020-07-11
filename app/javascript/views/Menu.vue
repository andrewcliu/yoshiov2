<template>
	<div class='rootPadding'>
		<div class='row'>
			<div class='col s12 m4 offset-m4 woodBg'>
				<h3 class="title center-align">メニュー</h3>
			</div>
		</div>

	  <carousel :per-page="2" :mouse-drag="true" v-if="!isMobile()">
	    <slide v-for="(n,index) in 16" :key="n">
	      <img :src="require('menu/' + n + '.png')"/>
	    </slide>
	  </carousel>
	  <carousel :per-page="1" :mouse-drag="true" v-else>
	    <slide v-for="(n,index) in 16" :key="n">
	      <img :src="require('menu/' + n + '.png')"/>
	    </slide>
	  </carousel>
	</div>
</template>

<script>

import Vue from 'vue/dist/vue.esm';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name:'Menu',
  components: {
    Carousel,
    Slide
  },
	methods: {
	 isMobile() {
	   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	     return true
	   } else {
	     return false
	   }
	 }
	}
};

</script>


