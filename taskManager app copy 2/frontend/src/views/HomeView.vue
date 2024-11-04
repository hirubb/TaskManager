<script setup>

import { useTasksStore } from '@/stores/tasks';
import { onMounted, ref } from 'vue';

const {getMyTasks, deleteTask} = useTasksStore();


const tasks = ref([]);

onMounted(async ()=> tasks.value = await getMyTasks())





// Edit task model controls
const editTask = ref(null);
const editTaskDetails = (task) => {
  editTask.value = { ...task };
};
const updateTask = () => {
  const index = tasks.value.findIndex(t => t.id === editTask.value.id);
  if (index !== -1) tasks.value[index] = editTask.value;
  editTask.value = null;
};

// // Form input states
// const newTaskTitle = ref('');
// const newTaskDesc = ref('');
</script>

<template>
  <main class="p-6 max-w-4xl mx-auto">
    <!-- Page Header -->
    <h1 class="text-3xl font-semibold mb-6 text-center">My Tasks</h1>

   

    <!-- Task List -->
    <ul class="space-y-4">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between items-start"
      >
        <div>
          <h3 class="text-xl font-semibold">{{ task.title }}</h3>
          <p class="text-gray-600">{{ task.description }}</p>
          <span
            class="px-2 py-1 rounded-full text-xs font-semibold"
            :class="{
              'bg-yellow-100 text-yellow-600': task.status === 'pending',
              'bg-green-100 text-green-600': task.status === 'completed'
            }"
          >
            {{ task.status }}
          </span>
        </div>
        <div class="space-x-2">
          <button
            @click="editTaskDetails(task)"
            class="text-blue-500 hover:text-blue-600"
          >
            Edit
          </button>
          <form @submit.prevent="deleteTask(task.id)">
            <button
            @submit.prevent="deleteTask(task.id)"
            class="text-red-500 hover:text-red-600"
          >
            Delete
          </button>

          </form>
          
        </div>
      </li>
    </ul>

    <!-- Edit Task Modal -->
    <div
      v-if="editTask"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-6 rounded-lg max-w-md w-full">
        <h3 class="text-lg font-semibold mb-4">Edit Task</h3>
        <input
          v-model="editTask.title"
          type="text"
          class="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          v-model="editTask.description"
          class="w-full p-2 border border-gray-300 rounded mb-4"
        ></textarea>
        <select v-model="editTask.status" class="w-full p-2 border border-gray-300 rounded mb-4">
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div class="flex justify-end space-x-4">
          <button @click="updateTask" class="bg-green-500 text-white py-2 px-4 rounded">
            Save
          </button>
          <button @click="editTask = null" class="text-gray-500 hover:text-gray-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
