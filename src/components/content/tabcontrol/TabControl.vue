<template>
    <div id="tab-control">
        <div v-for="(i,index) in titles" class="tab-item" :class="{active:(currentIndex === index)}" @click="changePink(index)" >
            <span >{{i}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },data(){
            return {currentIndex:-1}
        },methods:{
            changePink(index){
                this.currentIndex = index;
                // console.log("haha");
                this.$emit("tabControlClick",index)
            },changeWhite(index){
                this.currentIndex = -1
            }
        }
    }
</script>

<style scoped>
#tab-control{
    display: flex;
    text-align: center;
    background: white;

}
    .tab-item span{
        padding-bottom: 5px;
    }
    .tab-item{
        flex: 1;
        font-size: 18px;
        font-weight: bold;
        line-height: 40px;
        height: 40px;
    }
    .active{
        color: var(--color-high-text);

    }
    .active span{
        border-bottom: 3px solid var(--color-high-text);
    }
</style>