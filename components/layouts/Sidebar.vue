<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<NuxtLink to="/" class="mb-10 block">
			<NuxtImg class="mx-auto" src="/logo.svg" width="100" height="100" alt="logo crm" />
		</NuxtLink>
		<button class="absolute top-2 right-3 transition-colors hover:text-primary">
			<Icon name="line-md:logout" size="1.6rem" />
		</button>
		<LayoutsMenu />
	</aside>
</template>

<script lang="ts" setup>
</script>