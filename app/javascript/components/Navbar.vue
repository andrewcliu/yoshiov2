<template>
	<div id='customNav'>
		<a href="" class='brand-logo'>
			<img src="~images/yoshio.jpg">
		</a>
		<ul><br>
			<li><router-link to='/' class='btn btn-sm'>Home</router-link></li><br>
			<li><router-link to='/menu' class='btn btn-sm'>Menu</router-link></li><br>
			<li><router-link to='/togo' class='btn btn-sm'>To Go</router-link></li><br>
			<li><router-link to='/delivery' class='btn btn-sm'>Delivery</router-link></li><br>
			<li><router-link to='/gallery' class='btn btn-sm'>Gallery</router-link></li><br>
			<li><router-link to='/info' class='btn btn-sm'>Info</router-link></li><br>
		</ul>
	</div>
</template>

<script>
	// import './font-awesome@4.7.0';
	export default{
		name: 'Navbar'
	}
</script>

