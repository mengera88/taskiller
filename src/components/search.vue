<template>
    <div>
        <input type="text" v-model="key" @keyup="searchKey"></inupt>
        <div v-for="(list, index) in filterLists">
            <input type="checkbox" v-model="list.done" :key="index">
            {{list.text}}
        </div>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'search';

    export default {
        name: COMPONENT_NAME,
        data() {
            return {
                key: '',
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
               filterLists: []
            }
        },
        methods: {
            searchKey() {
                let key = this.key;
                let filters = [];
                this.lists.forEach(function(list) {
                    if(list.text.indexOf(key) !== -1) {
                        filters.push(list);
                    }
                });
                this.filterLists = filters;
            }
        }
    }
</script>
<style></style>