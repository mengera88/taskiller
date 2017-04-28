import axios from 'axios';

const host = 'http://localhost:3001'

//获取所有的menu
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
        commit('getMenu', {menus: data});       //提交mutation，初始化menus列表
        
        commit('setCurMenu', {menu: initMenu}); //提交mutation，初始化curMenu。

        axios.get(host + '/todolist/get/'+initMenu.id)
        .then((response) => {
            var data = response.data;
            commit('setTodo', {todos: data})     //根据初始化的curMenu获取todolist，并提交mutation更新todos列表
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
        commit('setTodo', {todos: data})               //用数据库返回的数据提交mutation，更新todo列表
        commit('setCurMenu', {menu: menuData.menu})    //更新当前目录，提交mutation来更新curMenu值
    })
    .catch( error => {
        console.log(error)
    })
}

//添加todo
export const addTodo = ({commit}, data) => {
    axios.post(host + '/todolist/add', {
        data: data,
    })
    .then((response) => {
        commit('addTodo', {todo: response.data})   // 提交mutation，向todos中添加数据库返回的记录
    })
    .catch( error => {
        console.log(error)
    })
}

//删除todo
export const deleteTodo = ({commit}, todo) => {
    axios.post(host + '/todolist/delete', {
        id: todo.todo.id,
    })
    .then((response) => {
        commit('deleteTodo', todo)               //提交mutation，在todos中删除该条记录
    })
    .catch( error => {
        console.log(error)
    })
}

//完成与未完成的切换
export const toggleTodo = ({commit}, todo) => {
    axios.post(host + '/todolist/toggle', {
        id: todo.todo.id,
        done: todo.todo.done
    })
    .then((response) => {
        console.log(response)
        commit('toggleTodo', {todo: todo.todo})    //提交mutation，更新该条todo的完成状态
    })
    .catch( error => {
        console.log(error)
    })
}