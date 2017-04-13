<template>
  <article class="post-page">
    <input class="adds" type="text" v-model="addlists"  @keyup.enter="addList($event)">
    <todo-list class="todo" v-for="(list, index) in lists" :text="list.text" :done="list.done" :index="index" :key="index" @doneChange="change($event)"></todo-list>
    <search></search>
    
  </article>
</template>

<script>
  import TodoList from 'components/todo-list.vue';
  import Search from 'components/search.vue';

  const COMPONENT_NAME = 'post-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        lists: [{
          text: '1',
          done: false
        },{
          text: '2',
          done: false
        },{
          text: '3',
          done: false
        },{
          text: '4',
          done: false
        }],
        addlists: '',
      }
    },
    methods: {
      addList(e) {
        this.lists.push({
          text: this.addlists,
          done: false
        });
        this.addlists = '';
      },
      change(e) {
        console.log(e)
        this.lists[e.index].done = e.value;
      }
    },
    components: {
      TodoList,
      Search
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