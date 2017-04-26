<template>
    <div class="list">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo({todo: todo})">
        <span>{{todo.text}}</span>
        <span class="delete fa fa-times-circle" aria-hidden="true" @click="deleteTodo({todo: todo})"></span>
    </div>
</template>
<script>
    import { mapActions} from 'vuex'

    const COMPONENT_NAME = 'todo-list';

    export default {
        name: COMPONENT_NAME,
        props: ['todo'],
        methods: {
            ...mapActions([
                'deleteTodo',
                'toggleTodo'
            ])
        }
    }
</script>
<style  lang="less" coped>
    .list{
        width: 300px;
        height: 32px;
        line-height: 30px;
        border: 1px solid #dedede;
        margin-bottom: 20px;
    }
    .delete{
        float: right;
        margin-top: 8px;
        margin-right: 10px;
        cursor: pointer;
        color: #999;
    }
</style>