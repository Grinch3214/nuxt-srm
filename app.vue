<template>
  <NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	const colorMode = useColorMode()

	colorMode.value = 'dark'

	console.log(colorMode)
</script>
