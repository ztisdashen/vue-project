<template>
    <div class="check-button" :class="{active:isActive}">
        <img src="~assets/img/cart/tick.svg">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .active {
        border-color: red;
        background: #ff5777;
    }

    .check-button {

        /*background: #ff5777;*/
        border-radius: 50%;
        border: 2px solid #aaa;
    }

    img {
        height: 15px;
        width: 15px;
    }
</style>