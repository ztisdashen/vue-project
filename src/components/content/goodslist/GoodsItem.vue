<template>
    <div class="goods" @click="loadDetail(goodsItem.iid)">
        <a>
            <img v-lazy="showImg" @load="imgLoad">
            <!--            <img :src="showImg" @load="imgLoad">-->
        </a>
        <!--        <img v-l>-->
        <div class="goods-info">
            <p class="goods-title">{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        components: {},
        props: {
            goodsItem: {
                type: Object, default() {
                    return {}
                }
            }
        },
        methods: {
            imgLoad() {
                this.$bus.$emit("imgLoad")
            },
            loadDetail(id) {
                this.$router.push({path: "/detail", query: {iid: id}})
            }
        }, computed: {
            showImg() {
                if (this.goodsItem.show)
                    return this.goodsItem.show.img
                else
                    return this.goodsItem.image
            }
        }
    }
</script>

<style scoped>
    .goods {
        padding-bottom: 40px;
        position: relative;
        width: 47%;
        margin-right: 5px;
        margin-left: 5px;
    }

    .goods a img {
        width: 100%;
        border-radius: 7px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>