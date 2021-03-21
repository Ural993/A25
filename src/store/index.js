import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:JSON.parse(localStorage.getItem('todos')) || 
    [  {
      id: 1,
      title: "Заметка 1",
      data: "01/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 2,
      title: "Заметка 2",
      data: "02/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 3,
      title: "Заметка 3",
      data: "03/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 4,
      title: "Заметка 4",
      data: "04/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 5,
      title: "Заметка 5",
      data: "05/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 6,
      title: "Заметка 6",
      data: "06/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 7,
      title: "Заметка 7",
      data: "07/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 8,
      title: "Заметка 8",
      data: "08/01/2000",
      text: "Сегодня я ходил за хлебом",
    },
    {
      id: 9,
      title: "Заметка 9",
      data: "09/01/2000",
      text: "Сегодня я ходил за хлебом",
    },]
  },
  mutations: {
    editTodo(state, {id, text}){
      const todos = state.todos.concat();
      const todo  = todos.find(t => t.id == id)
      console.log(todo.id)
      todos[todo.id] = {...todo, text}
      console.log(state.todos)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
    editTodo({commit}, todo){
      commit('editTodo', todo)
    }
  },
  getters:{
    todos(state){
      return state.todos
    }
  }
})
