<template>
    <div class="goods-list wrapper" ref="wrapper">
        <div class="content">
            <goods-item class="goods-item" v-for="(item,index) in goods" :goodsItem = 'item' :key="index"/>
        </div>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";

    export default {
        name: "GoodsList",
        data(){return {}},
        props:{
            goods:{
                type:Array,
                default() {
                    return [];
                }
            }
        },components:{    GoodsItem
        }
    }
</script>

<style scoped>

.content{
    /* 1行放两个*/
    display: flex;
    flex-wrap: wrap;
    /*均等分*/
    justify-content: space-around;
}
</style>