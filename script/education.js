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


//to be integrated
var app7 = new Vue({
    el: '#app7',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app8 = new Vue({
    el: '#app8',
    data: {
        message: 'Type here!'
    }
})

var app9 = new Vue({
    el: '#app9',
    data: {
        newTodo: '',
        todos: [
            { text: 'Add some todos' }
        ]
    },
    methods: {
        addTodo: function () {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({ text: text })
                this.newTodo = ''
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        }
    }
})