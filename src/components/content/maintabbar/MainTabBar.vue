<template>
    <div id="main-tab-bar">
        <tab-bar>
            <tab-bar-item path="/home">
                <img src="~assets/img/tabbar/home_active.svg" slot="img_a">
                <img src="~assets/img/tabbar/home.svg" slot="img">
                <div slot="text">主页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img src="~assets/img/tabbar/category_active.svg" slot="img_a">
                <img src="~assets/img/tabbar/category.svg" slot="img">
                <div slot="text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <img src="~assets/img/tabbar/cart_active.svg" slot="img_a">
                <img src="~assets/img/tabbar/cart.svg" slot="img">
                <div slot="text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/me">
                <img src="~assets/img/tabbar/profile_active.svg" slot="img_a">
                <img src="~assets/img/tabbar/profile.svg" slot="img">
                <div slot="text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBarItem from "../../common/tabbar/TabBarItem";
    import TabBar from "../../common/tabbar/TabBar";

    export default {
        name: "MainTabBar",
        components:{
            TabBar,TabBarItem
        }
    }
</script>

<style scoped>

</style>