<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';



//grabing data from the store
//for authentication process
const authStore = useAuthStore();
const {authenticate} = useAuthStore()

//get data from the form
const formData = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation:''
});




</script>

<template>
  <main class="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    <h1 class="title text-3xl font-semibold text-gray-800 mb-6">Register</h1>
    <form
     @submit.prevent="
     ()=>{
      authStore.authenticate('register',formData)
      }" 
     class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-medium">name</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your name"
          required
        />
        
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-medium">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 font-medium">Password</label>
        <input
          v-model="formData.password"
          type="password"
          id="password"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your password"
          required
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 font-medium">confirm Password</label>
        <input
          v-model="formData.password_confirmation"
          type="password"
          id="password"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Re-Enter your password"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
      >
        Register
      </button>
    </form>
  </main>
</template>
