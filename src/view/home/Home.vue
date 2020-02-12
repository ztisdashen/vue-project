<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="middle">购物街</div>
        </nav-bar>
        <tab-control
                :titles="['流行','新款','精品']"
                class="tab-control"
                ref="tabControl1"
                @tabControlClick='tabClick'
                v-show="isTabFixed"/>
        <scroll class="content-a"
                ref="scroll"
                :probeType='3'
                @scrollToEnd='scrollToEnd'
                :pullup="true"
                :listenScroll="true"
                @scroll='scroll'
                :data="goodList">
            <home-swiper :banner="banner"
                         @swiperImgLoad="swiperImgLoad"/>
            <!--        <h2>主页</h2>-->
            <home-recommend
                    :recommends="recommends"
            />
            <future-view/>
            <tab-control
                    :titles="['流行','新款','精品']"
                    ref="tabControl2"
                    @tabControlClick='tabClick'/>
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
    import {deBounce} from '../../common/utils'
    import {backTopMixin, itemLoadListenerMixin} from "../../common/mixin";

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
                currentType: 'pop',
                offsetTop: -1,
                isTabFixed: false,
                saveY: 0
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
            this.getGoodsData('sell');
            this.getGoodsData('new');
            this.getGoodsData('pop');

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
                let page = this.goods[type].page + 1;
                getGoodsData(type, page).then(res => {
                    this.goods[type].page++;
                    this.goods[type].list.push(...res.data.data.list);
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
                this.$refs.tabControl1.currentIndex = index;
                this.$refs.tabControl2.currentIndex = index;
            },
            scroll(pos) {
                this.isTabFixed = -pos.y > this.offsetTop;
                this.$refs.backtop.isShow = pos.y < -1050;
            },
            scrollToEnd() {
                this.getGoodsData(this.currentType)
            },
            swiperImgLoad() {
                this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
            }
            //    防抖函数

        },
        mixins: [backTopMixin, itemLoadListenerMixin],
        computed: {
            goodList() {
                return this.goods[this.currentType].list
            }
        },
        mounted() {
            // const refresh = deBounce(this.$refs.scroll.refresh, 100);
            // this.$bus.$on('imgLoad', () => {
            //     refresh()
            // })
            //解决tab control的吸顶效果   获取offset
            // 但是由于许多元素的img没有加载完成，所以offsetTop时不正确的
            // console.log(this.$refs.tabControl.$el.offsetTop);
        },
        activated() {
            this.$refs.scroll.refresh();
            this.$refs.scroll.scrollTo(0, this.saveY, 0);
        },
        deactivated() {
            this.saveY = this.$refs.scroll.scrollY();
            this.$refs.scroll.refresh()

            this.$bus.$off('imgLoad', this.itemLoadListener)
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
        background-color: var(--color-tint);
        font-weight: 700;
        color: #fff;

        /*position: fixed;*/
        /*left: 0;*/
        /*right: 0;*/
        /*top: 0;*/
        /*!*设置防遮盖*!*/
        z-index: 9;
    }

    /*当tab control变化到44px时 属性由static变成fixed*/
    .tab-control {
        position: relative;
        /*top: 44px;*/
        /*background: white;*/
        z-index: 9;
    }

    .content-a {
        /*height: calc(100% - 93px);*/
        /*overflow: hidden;*/
        /*margin-top: 44px;*/
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }

    .fix {
        position: absolute;
        top: 44px;
        right: 0;
        left: 0;
        z-index: 9;
    }
</style>