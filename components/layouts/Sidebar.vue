
import type { NuxtImg } from '#build/components';
<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<NuxtLink to="/" class="mb-10 block">
			<NuxtImg class="mx-auto" src="/logo.svg" width="100" height="100" alt="logo crm" />
		</NuxtLink>

		<UiButton>Test btn</UiButton>
	</aside>
</template>

<script lang="ts" setup>

</script>