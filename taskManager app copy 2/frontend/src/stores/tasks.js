
import { defineStore } from "pinia"
import router from "@/router";

export const useTasksStore = defineStore('tasksStore',{

    state:()=>{
        return {
            errors:{}
        }
    },
    actions:{


        //get all tasks
        
       
        // async getMyTasks() {
        //     const res = await fetch('/api/tasks');
        //     const data = await res.json();

        //     console.log(data);
        //     return data;
             
        // },
        async getMyTasks() {
            const res = await fetch("/api/tasks", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            });
            const data = await res.json();
            console.log(data);
            return data;
          },

          //deleting tasks
          async deleteTask(id) {
            const res = await fetch(`/api/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const data = await res.json();
            console.log(data);
            return data;
        },



        //create a task
        async createTask(formData){
            const res = await fetch('/api/tasks',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

           

            if(data.errors){
                this.errors= data.errors
            }else{
                router.push({ name: 'home' });
            }




            
        },
    },

});