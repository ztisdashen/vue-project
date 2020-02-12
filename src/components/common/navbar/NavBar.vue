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
    .nav-bar {
        position: relative;
        z-index: 10;

        display: flex;

        height: 44px;
        line-height: 44px;
        text-align: center;
    }

    .left, .right {
        width: 18%;
    }
    .middle{
        flex: 1;
    }
</style>