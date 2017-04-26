import axios from 'axios';

const host = 'http://localhost:3001'

export const getMenus = ({commit}) => {
    axios.get(host + '/menu/get')
    .then((response) => {
        var data = response.data;
        var initMenu
        data.forEach(function(item) {
            if(item.selected) {
                initMenu = item
            }
        })
        commit('getMenu', {menus: data});
        
        commit('setCurMenu', {menu: initMenu});

        axios.get(host + '/todolist/get/'+initMenu.id)
        .then((response) => {
            var data = response.data;
            commit('setTodo', {todos: data})
        })
        .catch( error => {
            console.log(error)
        })
    })
    .catch( error => {
        console.log(error)
    })
}

//确切的讲是getCurTodoList，得到当前menu对应的todolist
export const setCurMenu = ({commit}, menuData) => {
    axios.get(host + '/todolist/get/'+menuData.id)
    .then((response) => {
        var data = response.data;
        commit('setTodo', {todos: data})
        commit('setCurMenu', {menu: menuData.menu})
    })
    .catch( error => {
        console.log(error)
    })
}

export const addTodo = ({commit}, data) => {
    axios.post(host + '/todolist/add', {
        data: data,
    })
    .then((response) => {
        commit('addTodo', {todo: response.data})
    })
    .catch( error => {
        console.log(error)
    })
}

export const deleteTodo = ({commit}, todo) => {
    axios.post(host + '/todolist/delete', {
        id: todo.todo.id,
    })
    .then((response) => {
        commit('deleteTodo', todo)
    })
    .catch( error => {
        console.log(error)
    })
}

export const toggleTodo = ({commit}, todo) => {
    axios.post(host + '/todolist/toggle', {
        id: todo.todo.id,
        done: todo.todo.done
    })
    .then((response) => {
        console.log(response)
        commit('toggleTodo', {todo: todo.todo})
    })
    .catch( error => {
        console.log(error)
    })
}