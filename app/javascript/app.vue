<template>
  <div class='row noMargin'>
  	<div class='col s2 m1 noPadding'>
		   <Navbar />
		</div>
		<div class='col s10 m11 noPadding rootView'>
			<router-view/>
	   </div>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {Navbar, Footer}
};
</script>