<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="middle">
                购物车({{length_}})
            </div>
        </nav-bar>
        <scroll class="content" ref="scroll">
            <cart-list/>
        </scroll>
        <cart-button-bar/>
        <!--        <bottom-bar/>-->
    </div>
</template>

<script>
    import CartButtonBar from './cartCom/CartButtonBar'
    import NavBar from "../../components/common/navbar/NavBar";
    import CartList from "./cartCom/CartList"
    import {mapGetters} from "vuex";
    // import CartList from "../../components/content/goodslist/GoodsList";
    import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "Cart",
        components: {
            NavBar,
            CartList,
            Scroll,
            CartButtonBar
        }, computed: {
            // ...mapGetters(['getCartLength'])
            ...mapGetters({
                length_: 'getCartLength'
            })
        }, activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    .cart {
        height: 100vh;
    }

    .nav-bar {
        background: #ff8198;
        text-align: center;
        font-size: 20px;
        color: white;
    }

    .content {
        height: calc(100% - 93px - 44px);
        overflow: hidden;
    }

    /*.content{*/
    /*    height: calc(100% - 93px);*/
    /*}*/
</style>