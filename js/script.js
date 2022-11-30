const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            newToDo: ""
        }
    },
    created() {
        axios.get('server.php').then((resp) => {
            this.todoList = resp.data;
        })
    },
    methods: {
        addToDo() {
            const data = {
                newToDo: this.newToDo
            };
            axios.post('server.php', data, {
                headers: {"Content-Type": "multipart/form-data"}
            }).then((resp) => {
                this.todoList = resp.data;
                this.newToDo = "";
            });
        }
    }
}).mount("#app");