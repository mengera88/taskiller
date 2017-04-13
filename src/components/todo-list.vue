<template>
    <div class="list">
        <input type="checkbox" v-model="hasDone">
        <span>{{text}}</span>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'todo-list';

    export default {
        name: COMPONENT_NAME,
        props: ['text', 'done', 'index'],
        computed: {
            hasDone:{
                get() {
                    return this.done;
                },
                set(value) {
                    var index = this.index;
                    this.$emit('doneChange', {
                        value: value,
                        index: index
                    })
                }
            } 
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
</style>