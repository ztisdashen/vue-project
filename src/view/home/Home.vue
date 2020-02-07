<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="middle">购物街</div>
        </nav-bar>
        <scroll class="content-a" ref="scroll" :probeType='3' :listenScroll="true" @scroll='scroll'>
            <home-swiper :banner="banner"/>
            <!--        <h2>主页</h2>-->
            <home-recommend :recommends="recommends"/>
            <future-view/>
            <tab-control :titles="['流行','新款','精品']" class="tab-control" @tabControlClick='tabClick'/>
            <goods-list :goods="goodList"/>
        </scroll>
        <back-top ref='backtop' @click.native='backTop'/>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import {getGoodsData, getHomeMultiData} from '../../network/home'
    import HomeSwiper from "./childrenComponent/HomeSwiper";
    import HomeRecommend from "./childrenComponent/HomeRecommend";
    import FutureView from "./childrenComponent/FutureView";
    import TabControl from "../../components/content/tabcontrol/TabControl";
    import GoodsList from "../../components/content/goodslist/GoodsList";
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/content/backtop/BackTop";


    export default {
        name: "Home",
        data() {
            return {
                result: null,
                banner: [],
                recommends: [],
                goods: {
                    pop: {page: 0, list: []},
                    new: {page: 0, list: []},
                    sell: {page: 0, list: []}
                },
                currentType: 'pop'
            }
        },

        components: {
            GoodsList,
            NavBar,
            HomeSwiper,
            HomeRecommend,
            FutureView,
            TabControl,
            Scroll,
            BackTop

        },
        created() {
            this.getHomeMultiData()
            this.getGoodsData('sell')
            this.getGoodsData('new')
            this.getGoodsData('pop')
        },
        methods: {
            getHomeMultiData() {
                getHomeMultiData().then(res => {
                    // console.log(res);
                    this.recommends = res.data.data.recommend.list;
                    this.banner = res.data.data.banner.list
                })
            },
            getGoodsData(type) {
                const page = this.goods[type].page + 1;
                getGoodsData(type, page).then(res => {
                    // console.log(res)
                    this.goods[type].page = page;
                    this.goods[type].list.push(...res.data.data.list)
                })
            },
            //    tab control 自定义事件
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = 'sell';
                        break

                }
            },
            backTop() {
                this.$refs.scroll.scrollTo(0, 0, 500)
            },
            scroll(pos) {
                // console.log(pos.y);
                this.$refs.backtop.isShow = pos.y < -1050;
            }
        },
        computed: {
            goodList() {
                return this.goods[this.currentType].list
            }
        }
    }
</script>

<style scoped>
    #home {
        /*padding-top: 44px;*/
        /*viewport height 如果不设置这个，原有的大量商品会把home撑开5000px*/
        height: 100vh;
    }

    .home-nav {
        background: var(--color-tint);
        color: white;
        font-size: 18px;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        /*设置防遮盖*/
        z-index: 9;
        /*position: sticky;*/
        /*top: -44px;*/
    }

    /*当tab control变化到44px时 属性由static变成fixed*/
    .tab-control {
        position: sticky;
        top: 44px;
        /*background: white;*/
        z-index: 9;
    }

    .content-a {
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 44px;
    }
</style>