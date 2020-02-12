<template>
    <div class="wrapper" ref="wrapper" style="text-align: center">
        <ul class="content">
            <button @click="btnClick">button</button>
            <li v-for="i in 500">... {{i}}</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Category",
        data(){
            return {scroll:null}
        },
        created() {
            // new BetterScroll('#content')
        },mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType:3,pullUpLoad:true,click:false
                })
                // this.scroll.on('scroll',(position)=>{
                //     console.log(position);
                // })
                this.scroll.on('pullingUp',()=>{
                    console.log('ssss');
                    setTimeout(()=>{
                        this.scroll.finishPullUp()
                    },2000)
                })
            })
        },methods:{
            btnClick(){
                console.log('click');
            }
        }
    }
</script>

<style scoped>
.wrapper{
    /*原生局部滚动*/
    height: 150px;

    background: #ff8198;
    overflow: hidden;
    /*overflow-y: scroll;*/
}
</style>