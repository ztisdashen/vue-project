<template>
    <div class="cart-list">


        <cart-list-item
                v-for="(item,index) in _list"
                :itemInfo="item"
                :key="index"
        />
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import CartListItem from "./CartListItem"
    import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "CartList",
        components: {
            Scroll,
            CartListItem
        },
        computed: {
            // ...mapGetters(['getCartLength'])
            ...mapGetters({
                length: 'getCartLength',
                _list: 'getList'
            })
        }
    }
</script>

<style scoped>
    /*.cart-list {*/
    /*    height: calc(100% - 93px);*/
    /*}*/

    /*.content {*/
    /*    overflow: hidden;*/
    /*    height: 100%;*/
    /*}*/
</style>