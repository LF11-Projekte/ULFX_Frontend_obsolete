// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: 0,
        userName: "",
        description: ""
    }),
    
    actions: {
        auth() {
            fetch("http://localhost:9999/api/User/5bb0f60f-7896-4af4-882c-bd8599988d7c", {
                method: "GET"
            }).then(r => {
                if (r.status === 200) return r.json();
            }).then(r => {
                this.userId = r.id;
                this.userName = r.username;
            })
        },
    },
})