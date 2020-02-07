<template>
    <div class="recommends">
        <div class="recommend-item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommends:Array
        }
    }
</script>

<style scoped>
    .recommends{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 0 15px;
        border-bottom: 10px #eeeeee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item a img{
        width: 70px;
        height: 70px;
    }
</style>