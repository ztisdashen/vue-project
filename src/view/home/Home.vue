<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="middle">购物街</div>
        </nav-bar>
        <home-swiper :banner="banner"/>
        <!--        <h2>主页</h2>-->
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import {getHomeMultiData} from '../../network/home'
    import HomeSwiper from "./childrenComponent/HomeSwiper";


    export default {
        name: "Home",
        data() {
            return {result: null, banner: [], recommends: []}
        },

        components: {
            NavBar,HomeSwiper
        }, created() {
            getHomeMultiData().then(res => {
                // console.log(res);
                this.recommends = res.data.data.recommend.list
                this.banner = res.data.data.banner.list
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background: var(--color-tint);
        color: white;
        font-size: 18px;
    }
</style>