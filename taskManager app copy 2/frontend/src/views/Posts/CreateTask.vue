<script setup>
    import { useTasksStore } from '@/stores/tasks';

    import { reactive, ref } from 'vue';
    
  
    const {createTask} = useTasksStore();
    const formData = reactive({

      title:"",
      description:"",
      status:"pending",


    });
    

</script>


<template>
    <main class="p-6 max-w-4xl mx-auto">
      <!-- Page Header -->
      <h1 class="text-3xl font-semibold mb-6 text-center">Add New Task</h1>
  
      <!-- Task Form -->
      <div class="mb-6 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h2 class="text-lg font-semibold mb-4">Add New Task</h2>
        <form @submit.prevent="createTask(formData)">
        <div class="flex flex-col gap-4">
          <input
            v-model="formData.title"
            type="text"
            placeholder="Task Title"
            class="p-2 border border-gray-300 rounded"
          />
          
          <textarea
            v-model="formData.description"
            placeholder="Task Description"
            class="p-2 border border-gray-300 rounded"
          ></textarea>
          
         
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </form>
      </div>
  
      
    </main>
  </template>
  