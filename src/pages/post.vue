<template>
  <article class="post-page">
    <input class="adds" type="text" v-model="addlists"  @keyup.enter="addList($event)">
    <h1>未完成</h1>
    <todo-list class="todo" v-for="(todo, index) in undoneTodos" :todo="todo" :key="index"></todo-list>
    <h1>已完成</h1>
    <todo-list class="todo" v-for="(todo, index) in doneTodos" :todo="todo" :key="index"></todo-list>
  </article>
</template>

<script>
  import TodoList from 'components/todo-list.vue';
  import { mapState } from 'vuex'
  import {mapGetters} from 'vuex'

  const COMPONENT_NAME = 'post-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        addlists: ''
      }
    },
    computed: {
      ...mapState([
        'todos',
      ]),
      ...mapGetters([
        'doneTodos',
        'undoneTodos'
      ])
    },
    methods: {
      addList(e) {
        var text = this.addlists
        this.$store.commit('addTodo', {text})
        this.addlists = '';
      },
    },
    components: {
      TodoList,
    }
  }
</script>

<style lang="less">
  .post-page {
    padding: 30px;
    text-align: center;
  }
  .adds{
    width: 500px;
    border: 1px solid #dedede;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    height: 32px;
    line-height: 32px;
  }
  .todo{
    margin: 0 auto;
    text-align: left;
  }
</style>