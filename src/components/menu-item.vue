<template>
    <div class="menu-list" @click="setCurMenu(item)" :class="{selected: curMenu === item}">
        <div>
            <i class="fa fa-list-ul" aria-hidden="true"></i>
            <span>{{item.name}}</span>
            <span v-show="!item.selected" class="tips">3</span>
            <i v-show="item.selected" class="fa fa-pencil-square-o tips" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'menu-item-list';
    import {mapState} from 'vuex'

    export default {
        name: COMPONENT_NAME,
        data() {
            return {
            }
        },
        computed: {
            ...mapState([
                'curMenu',
            ]),
        },
        props: ['item'],
        methods: {
            setCurMenu(menu) {
                this.$store.dispatch('setCurMenu', {id: this.item.id, menu: menu})
            }
        }
    }
</script>
<style lang="less">
    .menu-list {
        width: 100%;
        padding-left: 20px;
        cursor: pointer;
        &:hover{
            background: #29A9FF;
            div{
                color: #fff;
            }
        }
        &.selected{
            background: #29A9FF;
            div{
                color: #fff;
            }
        }
        div{
            height: 38px;
            line-height: 38px;
            color: #333;
        }
        i{
            display: inline-block;
            height: 38px;
            line-height: 38px;
        }
        .tips{
            float: right;
            margin-right: 20px;
        }
    }
</style>