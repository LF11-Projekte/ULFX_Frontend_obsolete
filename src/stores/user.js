// stores/counter.js
import { defineStore } from 'pinia'
import { Api } from '@/API';

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: 0,
        userName: "",
        description: ""
    }),
    
    actions: {
        auth() {
            const api = new Api();
            api.user.create({
                "id": "c5dc2b8f-ce57-4900-be99-bbe719d18a68",
                "creationDate": "2024-05-30T19:36:37.039Z",
                "updateDate": "2024-05-30T19:36:37.039Z",
                "email": "Test@ttest.de",
                "username": "Testi Tester",
                "description": "jajajjaja"
              });
        },
    },
})