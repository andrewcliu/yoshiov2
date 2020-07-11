<template>
	<div class="rootPadding">
		<div class='row'>
			<div class='col s12 m4 push-m4 woodBg'>
				<h3 class="title center-align">メニューに行く</h3>
			</div>
		</div>
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