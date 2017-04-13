export const mutations = {
    addTodo(state, {text}) {
        state.todos.push({
            text,
            done: false
        })
    },
    
    deleteTodo(state, {todo}) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    },

    toggleTodo(state, {todo}) {
        todo.done = !todo.done;
    }
}