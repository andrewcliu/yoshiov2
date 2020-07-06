<template>
	<div class='rootPadding'>
		<!-- <h3 class="title center-align">Dining Menu</h3> -->
	  <carousel :per-page="1" :mouse-drag="true">
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


