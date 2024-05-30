import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

    state: {

        counter: 0

    }

    getters: {
        getCounter : () => {
            return this.state.counter;
        }
    }

})

