todo_resource = Vue.resource('/todos{/id}')
var todos_vm = new Vue({
  el: '#todos',
  data: {
    todos: [],
    new_todo_body: ''
  },
  methods: {
    create() {
      todo_resource.save({todo: {body: this.new_todo_body}}).then((response) => {
        this.todos.push(response.json())
        this.new_todo_body = ''
      }, (response) => {
        alert(response.body)
      });
    },
    destroy(todo) {
      // if (confirm('确认删除?')){
        todo_resource.remove({id: todo.id}).then((response) => {
          this.todos.$remove(todo)
        }, (response) => {
          alert(response.body)
        });
      // }
    },
    active(todo) {
      Vue.http.post('/todos/' + todo.id + '/active').then((response) => {
        todo.status = 'active'
      }, (response) => {
        alert(response.body)
      });
    },
    completed(todo) {
      Vue.http.post('/todos/' + todo.id + '/completed').then((response) => {
        todo.status = 'completed'
      }, (response) => {
        alert(response.body)
      });
    }
  },
  ready() {
    todo_resource.get().then((response) => {
      this.todos = response.data
    }, (response) => {
      alert(response.body)
    });
  }
});