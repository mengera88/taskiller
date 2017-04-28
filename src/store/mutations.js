export const mutations = {
    //添加todo
    addTodo(state, {todo}) {
        state.todos.push(todo)
    },
    //删除todos
    deleteTodo(state, {todo}) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    },
    //设置当前的todos
    setTodo(state, {todos}) {
        state.todos = todos
    },
    //切换todo的完成状态
    toggleTodo(state, {todo}) {
        todo.done = !todo.done;
    },

    //左侧menu切换，设置当前menu值
    setCurMenu(state, {menu}) {
        state.curMenu = menu;
    },
    //设置menu值，
    getMenu(state, {menus}) {
        state.menus = menus;
    }
}