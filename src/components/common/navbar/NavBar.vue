<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"/></div>
        <div class="middle"><slot name="middle"/></div>
        <div class="right"><slot class="right"/></div>

    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
        line-height: 44px;
    }
    .left,.right{
        width: 18%;
    }
    .middle{
        flex: 1;
    }
</style>