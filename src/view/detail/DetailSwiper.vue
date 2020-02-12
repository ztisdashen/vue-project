<template>

    <swiper v-if="topImg.length" style="height: 270px">
        <swiper-item v-for="(item, index) in topImg" :key="index">
            <a>
                <img :src="'http://'+item" alt="">
            </a>
        </swiper-item>
    </swiper>

</template>

<script>
    import {Swiper, SwiperItem} from "components/common/swiper/index";

    export default {
        name: "DetailSwiper",
        data() {
            return {}
        },
        props: {
            topImg: {
                type: Array, default() {
                    return []
                }
            }
        },
        components: {
            SwiperItem, Swiper
        }
    }
</script>

<style scoped>

</style>