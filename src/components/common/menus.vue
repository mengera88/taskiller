<template>
    <div class="menu">
        <menu-item-list v-for="menu in menus" :item="menu" ></menu-item-list>
    </div>
</template>
<script>
    import MenuItemList from 'components/menu-item.vue'
    import {mapActions} from 'vuex'
    import {mapState} from 'vuex'

    const COMPONENT_NAME = 'menu';

    export default {
        name: COMPONENT_NAME,
        data() {
            return {
            }
        },
        created() {
            this.getMenus();
        },
        components: {
            MenuItemList
        },
        computed: {
            ...mapState(['menus'])
        },
        methods: {
            ...mapActions(['getMenus'])
        }
    }
</script>
<style lang="less">
    .menu {
        width: 100%;
    }
</style>