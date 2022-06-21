const app1 = new Vue({
    el: '#hobbyTitle',
    data: {
        title: 'Hobbies',
        message: 'You loaded this page on ' + new Date().toLocaleString()
    },
})

var app2 = new Vue({
    el: '#hobbies',
    data: {
        hobbyList:{},
    },
    methods: {
        loadHobbies(){
            fetch('/model/hobbies.json')
            .then(res => res.json())
            .then(data => this.hobbyList=data)
        },
        
    },
    mounted() {
        this.loadHobbies();
    }
})

var app9 = new Vue({
    el: '#todosection',
    data: {
        newTodo: '',
        todos: [
            { text: 'Add some todos' }
        ]
    },
    methods: {
        addTodo() {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({ text: text })
                this.newTodo = ''
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    }
})