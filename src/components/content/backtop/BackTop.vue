<template>
    <div class="back-top" v-if="isShow">
        <img src="~assets/img/common/top.png">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        data(){
            return {isShow:true}
        }
    }
</script>

<style scoped>
.back-top{
    position: absolute;
    right: 8px;
    bottom: 55px;
}
    img{
        height: 50px;
        width: 50px;
    }
</style>