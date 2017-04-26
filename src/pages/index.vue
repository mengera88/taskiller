<template>
  <article class="post-page">
    <div class="g-left">
      <menus></menus>
    </div>
    <div class="g-right">
      <input class="adds" type="text" v-model="addlists"  @keyup.enter="addList($event)" placeholder="添加任务...">
      <todo-list class="todo" v-for="(todo, index) in undoneTodos" :todo="todo" :key="index"></todo-list>
      <div class="title" @click="isShowDone = !isShowDone"> {{isShowDone ? '隐藏已完成任务' : '显示已完成任务'}} <span class="subtitle">共{{doneTodos.length}}项</span></div>
      <todo-list v-show="isShowDone" class="todo" v-for="(todo, index) in doneTodos" :todo="todo" :key="index + 'done'"></todo-list>
    </div>
  </article>
</template>

<script>
  import TodoList from 'components/todo-list.vue'
  import Menus from 'components/common/menus.vue'

  import { mapState } from 'vuex'
  import {mapGetters} from 'vuex'

  const COMPONENT_NAME = 'post-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        addlists: '',
        isShowDone: false
      }
    },
    computed: {
      ...mapState([
        'todos',
        'curMenu'
      ]),
      ...mapGetters([
        'doneTodos',
        'undoneTodos'
      ])
    },
    methods: {
      addList(e) {
        var text = this.addlists
        var curMenu = this.curMenu.id
        this.$store.dispatch('addTodo', {text: text, curMenu: curMenu})
        this.addlists = '';
      },
    },
    components: {
      TodoList,
      Menus
    }
  }
</script>

<style lang="less">
  .post-page {
    width: 100%;
  }
  .adds{
    width: 100%;
    border: 1px solid #dedede;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    height: 32px;
    line-height: 32px;
    border-radius: 3px;
    padding-left: 10px;
  }
  .todo{
    text-align: left;
  }
  .title{
    width: 300px;
    height: 32px;
    line-height: 32px; 
    text-align: left;
    cursor: pointer;
    .subtitle{
      color: #999;
      font-size: 12px;
    }
  }
</style>