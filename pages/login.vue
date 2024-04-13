<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded bg-sidebar w-1/4 p-5">
			<h1 class="text-2xl font-bold text-center mb-5">Login</h1>

			<form>
				<UiInput
					v-model="email"
					class="mb-3"
					placeholder="Email"
					type="email"
				/>
				<UiInput
					v-model="password"
					class="mb-3"
					placeholder="Password"
					type="email"
				/>
				<UiInput
					v-model="name"
					class="mb-3"
					placeholder="Name"
					type="email"
				/>
				<div class="flex items-center justify-center gap-5">
					<UiButton type="button">Login</UiButton>
					<UiButton type="button">Registration</UiButton>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
	useHead({
		title: 'Login | CRM System'
	})

	const email = ref('')
	const password = ref('')
	const name = ref('')
</script>