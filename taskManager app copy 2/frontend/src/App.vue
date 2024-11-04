<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'


const authStore = useAuthStore();
onMounted(()=>{
  authStore.getUser()
  });
</script>

<template>
<header class="bg-indigo-600 p-4 shadow-lg">
  <nav class="flex justify-between items-center max-w-6xl mx-auto">
    
    <RouterLink :to="{ name: 'home' }" class="text-white text-lg font-semibold hover:text-indigo-200 nav-link">
      Home
    </RouterLink>


    <div class="text-white font-medium" v-if="authStore.user">
      Welcome, {{ authStore.user.name }}
    </div>

    <RouterLink :to="{ name: 'newTask' }" class="text-white text-lg font-semibold hover:text-indigo-200 nav-link">
      New Task
    </RouterLink>

    <div class="space-x-4">
      <RouterLink :to="{ name: 'register' }" class="text-white hover:text-indigo-200 transition nav-link">
        Register
      </RouterLink>
      <RouterLink :to="{ name: 'login' }" class="text-white hover:text-indigo-200 transition nav-link">
        Login
      </RouterLink>
    </div>
  </nav>
</header>


  <RouterView />
</template>

