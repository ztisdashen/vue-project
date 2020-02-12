<template>
    <div class="toast" v-show="isShow">
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data() {
            return {msg: '', isShow: false}
        },
        // props:{
        //     msg:{
        //         type:String,
        //         default:""
        //     },
        //     isShow:{
        //         type: Boolean,
        //         default: true
        //     }
        // },
        methods: {
            show(msg, duration) {
                this.msg = msg
                this.isShow = true
                setTimeout(() => {
                    this.msg = '';
                    this.isShow = false
                }, duration)
            }
        }
    }
</script>

<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        background: rgba(0, 0, 0, .75);
        z-index: 999;
    }
</style>