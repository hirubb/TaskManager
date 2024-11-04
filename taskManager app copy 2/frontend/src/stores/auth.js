import { defineStore } from "pinia";
import router from "@/router";

export const useAuthStore = defineStore('authStore',{

    state:() => {
        return{
            user:null,
        }
    },
    
    actions:{
        //get authenticated user
        async getUser(){
            if(localStorage.getItem('token')){
                const res = await fetch('/api/user',{
                    headers:{
                        'Authorization':`Bearer ${localStorage.getItem('token')}`,

                    },
                });
                const data = await res.json();
                if(res.ok){
                    this.user = data;
                }
                console.log(data);

            }
        },

        //dont have to use function keyword
        async authenticate(apiRoute,formData){

            const res = await fetch(`/api/${apiRoute}`,{
                method:'POST',
                body: JSON.stringify(formData) //pass formdata as the body


            });

           const data = await res.json();
           console.log(data);

           if(data.errors){
            this.errors = data.errors
           }else{
            localStorage.setItem('token',data.token);
            this.user = data.user
            //redirect
            router.push({ name: 'home' });

           }
            



        },
    }



})