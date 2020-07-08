<template>
	<div class='rootPadding'>
		<div class='row'>
			<div class='col m4 offset-m4 woodBg col s8'>
				<h3 class="title center-align">メニュー</h3>
			</div>
		</div>
	  <carousel :per-page="2" :mouse-drag="true">
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
  }
};

</script>


