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
          type="password"
        />
        <UiInput v-model="name" class="mb-3" placeholder="Name" type="text" />
        <div class="flex items-center justify-center gap-5">
          <UiButton @click="login" type="button">Login</UiButton>
          <UiButton @click="registration" type="button">Registration</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../store/auth";
import { v4 as uuid } from "uuid";

useHead({
  title: "Login | CRM System",
});

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const name = ref("");

const login = async () => {
  authStore.isLoading = true;
  await account.createEmailPasswordSession(email.value, password.value);
  const response = await account.get();
  if (response) {
    (authStore.user.email = response.email),
      (authStore.user.name = response.name),
      (authStore.user.status = response.status);
  }

  email.value = "";
  password.value = "";
  name.value = "";

  await router.push("/");
  authStore.isLoading = false;
};

// TODO: add register
const registration = async () => {
  await account.create(uuid(), email.value, password.value, name.value);
  await login();
};

console.log(authStore.isLoading);
</script>
