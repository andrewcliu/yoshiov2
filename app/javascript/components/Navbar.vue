<template>
	<div>
		<div id='customNav'>
			<a href="" class='brand-logo'>
				<img src="~images/yoshio.jpg">
			</a>
			<ul><br>
				<li><router-link to='/' class='btn btn-sm' exact>Home</router-link></li><br>
				<li><router-link to='/menu' class='btn btn-sm' exact>Menu</router-link></li><br>
				<li><router-link to='/togo' class='btn btn-sm' exact>To Go</router-link></li><br>
				<li><router-link to='/delivery' class='btn btn-sm' exact>Delivery</router-link></li><br>
				<li><router-link to='/gallery' class='btn btn-sm' exact>Gallery</router-link></li><br>
				<li><router-link to='/info' class='btn btn-sm' exact>Info</router-link></li><br>
			</ul>
		</div>
		<div id='mobileNav'>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
      	<img src="~images/hamburger.png" style='width:65px;'>
      </a>
		  <ul class="sidenav" id="mobile-demo">
				<li><router-link to='/' class='btn btn-sm' exact>Home</router-link></li><br>
				<li><router-link to='/menu' class='btn btn-sm' exact>Menu</router-link></li><br>
				<li><router-link to='/togo' class='btn btn-sm' exact>To Go</router-link></li><br>
				<li><router-link to='/delivery' class='btn btn-sm' exact>Delivery</router-link></li><br>
				<li><router-link to='/gallery' class='btn btn-sm' exact>Gallery</router-link></li><br>
				<li><router-link to='/info' class='btn btn-sm' exact>Info</router-link></li><br>
		  </ul>
		</div>
	</div>
</template>

<script>
	// import './font-awesome@4.7.0';

	export default{
		name: 'Navbar',
		mounted(){
		  document.addEventListener('DOMContentLoaded', function() {
		    var elems = document.querySelectorAll('.sidenav');
		    console.log('working');
		    var instances = M.Sidenav.init(elems, options);
		  });
		}
	}
</script>

