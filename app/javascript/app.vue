<template>
  <div id="">
	   <Navbar />
	   <div>
			<router-view/>
	   </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: {Navbar}
};
</script>