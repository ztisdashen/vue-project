<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav-bar"
                        @titleClick="titleClick"
                        ref="navbar"/>
        <scroll class="content"
                ref="scroll"
                :listenScroll="true"
                @scroll="scroll"
                :probeType="3">
            <detail-swiper
                    :topImg="topImg"/>
            <detail-base-info
                    :goods="goods" id="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detailInfo='detailInfo' @imgLoad="imgLoad"/>
            <detail-param-info id="argument" :paramInfo="paramInfo" ref="argument"/>
            <detail-comment-info :commentInfo=' commentInfo' id="comment" ref="comment"/>
            <goods-list :goods="recommends" id="relate" ref="relate"/>

        </scroll>
        <detail-msg @addToCart="addToCart1"/>
        <back-top ref='backtop' @click.native='backTop'/>
        <!--        <toast class="toast"-->
        <!--                :msg="msg"-->
        <!--                :isShow="isShow"/>-->
    </div>
</template>

<script>

    import BackTop from "../../components/content/backtop/BackTop";
    import DetailCommentInfo from './DetailCommentInfo'
    import NavBar from "../../components/common/navbar/NavBar";
    import DetailShopInfo from './DetailShopInfo'
    import DetailNavBar from './DetailNavBar'
    import DetailBaseInfo from './DetailBaseInfo'
    import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "../../network/detail";
    import DetailSwiper from "./DetailSwiper"
    import DetailGoodsInfo from "./DetailGoodsInfo"
    import DetailParamInfo from "./DetailParamInfo"
    import DetailMsg from "./DetailMsg"
    import Scroll from 'components/common/scroll/Scroll'
    import GoodsList from 'components/content/goodslist/GoodsList'
    import {backTopMixin, itemLoadListenerMixin} from "../../common/mixin";
    import {deBounce} from "../../common/utils";
    import {mapActions} from "vuex";
    import Toast from "components/common/toast/Toast.vue"

    export default {
        name: "Detail",
        data() {
            return {
                iid: null,
                data: null,
                topImg: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommends: [],
                themeTopY: [],
                currentIndex: -1,
                debounceTopY: null,
                // isShow:false,
                // msg:''
            }
        },
        mounted() {
            this.debounceTopY = deBounce(() => {
                this.themeTopY = [];
                console.log('haha');
                this.themeTopY.push(0);
                this.themeTopY.push(this.$refs.argument.$el.offsetTop)
                this.themeTopY.push(this.$refs.comment.$el.offsetTop)
                this.themeTopY.push(this.$refs.relate.$el.offsetTop)
            }, 200)
        },
        created() {
            this.iid = this.$route.query.iid;
            getDetail(this.iid).then(res => {
                this.data = res.data;
                this.topImg = this.data.result.itemInfo.topImages;
                this.goods = new Goods(this.data.result.itemInfo, this.data.result.columns, this.data.result.shopInfo.services)
                this.shop = new Shop(this.data.result.shopInfo);
                this.detailInfo = this.data.result.detailInfo;
                this.paramInfo = new GoodsParam(this.data.result.itemParams.info, this.data.result.itemParams.rule)
                if (this.data.result.rate.cRate !== 0) {
                    this.commentInfo = this.data.result.rate.list[0]
                }
            });
            getRecommend().then(res => {
                this.recommends = res.data.data.list
            })
        },
        updated() {
            /**
             * 1. el没有渲染
             * 2. el中的img没有渲染
             * 3. this.$nexttic在图片加载完后
             * @type {*[]}
             */

        },
        components: {
            DetailShopInfo,
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            Scroll,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            GoodsList,
            DetailMsg,
            BackTop,
            Toast
        },
        methods: {
            ...mapActions(['addToCart']),
            imgLoad() {
                this.newRefresh()
                this.debounceTopY()
            },
            titleClick(index) {
                this.$refs.scroll.refresh();
                this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200)
            },
            scroll(pos) {
                if (this.currentIndex !== 0 && -pos.y < this.themeTopY[1]) {
                    this.currentIndex = 0
                } else if (this.currentIndex !== 1 && -pos.y >= this.themeTopY[1] && -pos.y < this.themeTopY[2]) {
                    this.currentIndex = 1
                } else if (this.currentIndex !== 2 && -pos.y >= this.themeTopY[2] && -pos.y < this.themeTopY[3]) {
                    this.currentIndex = 2
                } else if (this.currentIndex !== 3 && -pos.y > this.themeTopY[3]) {
                    this.currentIndex = 3
                }
                this.$refs.backtop.isShow = pos.y < -1050;
            },
            addToCart1() {

                const obj = {};
                obj.img = this.topImg[0];
                obj.iid = this.iid;
                obj.title = this.goods.title;
                obj.desc = this.goods.desc;
                obj.price = this.goods.nowPrice;
                // console.log(obj);
                // this.$store.dispatch('addToCart',obj)
                this.addToCart(obj).then(res => {
                    // console.log(res);
                    // this.msg = res
                    // this.isShow =  true
                    // setTimeout(()=>{
                    //     this.isShow = false;
                    //     this.msg = ''
                    // },1500)
                    this.$toast.show(res, 2000)
                })
            }
        },
        mixins: [itemLoadListenerMixin, backTopMixin],
        destroyed() {
            this.$bus.$off('imgLoad', this.itemLoadListener)
        },
        watch: {
            'currentIndex': function (newVal) {
                this.$refs.navbar.currentIndex = newVal

            }
        }
    }
</script>

<style scoped>
    .detail {
        position: relative;
        z-index: 9;
        background: #ffffff;
        height: 100vh;
    }

    .content {
        height: calc(100% - 44px - 49px);
    }

    .detail-nav-bar {
        position: relative;
        z-index: 9;
        background: white;
    }

</style>