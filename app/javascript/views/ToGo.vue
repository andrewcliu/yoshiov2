<template>
	<div class="rootPadding">
		<!-- <h3 class="title center-align">To Go Menu</h3> -->
	  <carousel :per-page="1" :mouse-drag="true">
	    <slide v-for="(n,index) in 2" :key="n">
	      <img :src="require('menu/togo' + n + '.png')"/>
	    </slide>
	  </carousel>
	</div>
</template>

<script>
import Vue from 'vue/dist/vue.esm';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name:'ToGo',
  components: {
    Carousel,
    Slide
  }
};

</script>