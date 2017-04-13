export const doneTodos = state => {
    return state.todos.filter(item => item.done)
}

export const undoneTodos = state => {
    return state.todos.filter( item => !item.done)
}