<template>
    <div>
        <nav-bar>
            <img src="~assets/img/common/back.svg" slot="left" class="back" @click="backClick">
            <div slot="middle" class="title">
                <div v-for="(item,index) in title" class="item" :class="{active:index===currentIndex}"
                     @click="changePink(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";

    export default {
        name: "DetailNavBar",
        components: {
            NavBar
        },
        data() {
            return {title: ['商品', '参数', '评价', '相关'], currentIndex: 0}

        },
        methods: {
            changePink(index) {
                this.currentIndex = index
                this.$emit('titleClick', index)
            },
            backClick() {
                this.$router.back()
            }
        }

    }
</script>

<style scoped>
    .back {
        margin-top: 12px;
    }

    .title {
        display: flex;
    }

    .item {
        flex: 1;
    }

    .active {
        color: var(--color-high-text);
    }
</style>