<template>
    <swiper v-if="banner.length">
        <swiper-item v-for="(item, index) in banner" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from "components/common/swiper/index";
    export default {
        name: "HomeSwiper",
        props:{
            banner:Array
        },
        components:{
            Swiper,SwiperItem
        }
    }
</script>

<style scoped>

</style>