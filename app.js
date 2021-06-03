let vm = Vue.createApp({
    data() {
        return {
       
            mode: 0
        }
    },
    methods: {
        increment() {
            return this.mode++
        },
        decrement() {
            return this.mode--
        }
    }
}).mount('#app');
