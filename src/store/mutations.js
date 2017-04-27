export const mutations = {
    addTodo(state, {todo}) {
        state.todos.push(todo)
    },
    
    deleteTodo(state, {todo}) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    },

    setTodo(state, {todos}) {
        state.todos = todos
    },

    toggleTodo(state, {todo}) {
        todo.done = !todo.done;
    },

    //左侧menu切换
    setCurMenu(state, {menu}) {
        state.curMenu = menu;
    },

    getMenu(state, {menus}) {
        state.menus = menus;
    }
}