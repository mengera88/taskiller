<template>
    <div class="list">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo({todo: todo})">
        <span>{{todo.text}}</span>
        <span class="delete" @click="deleteTodo({todo: todo})">x</span>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'

    const COMPONENT_NAME = 'todo-list';

    export default {
        name: COMPONENT_NAME,
        props: ['todo'],
        methods: {
            ...mapMutations([
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
        line-height: 32px;
        border: 1px solid #dedede;
        margin-bottom: 20px;
    }
    .delete{
        float: right;
        border-radius: 50%;
        background: #ccc;
        border: none;
        color: #fff;
        vertical-align: middle;
        margin-top: 11px;
        width: 12px;
        height: 12px;
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        padding: 0;
        margin-right: 10px;
        cursor: pointer;
    }
</style>