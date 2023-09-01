<script setup lang="ts">
</script>

<template>
	<common-page>
		<div v-for="i of 10">
			<h3>Dashboard {{ i }}</h3>
			<router-link to="/table">Go to Table</router-link>
		</div>
	</common-page>
</template>

<style scoped>

</style>