<template>
    <swiper v-if="banner.length">
        <swiper-item v-for="(item, index) in banner" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from "components/common/swiper/index";

    export default {
        name: "HomeSwiper",
        data() {
            return {isLoad: false}
        },
        props: {
            banner: Array
        },
        components: {
            Swiper, SwiperItem
        }, methods: {
            imgLoad() {
                if (!this.isLoad) {
                    this.isLoad = !this.isLoad;
                    this.$emit('swiperImgLoad')
                }
            }
        }
    }
</script>

<style scoped>

</style>