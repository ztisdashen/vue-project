<template>
    <div class="CartButtonBar">
        <div class="check-content">
            <check-button class="checkButton"
                          :isActive="isSelectAll"
                          @click.native="checkAll"/>
            <span>全选</span>
        </div>
        <div style="color: red;margin-left: 10px;width: 40%">
            总价:{{totalPrice}}
        </div>
        <div class="calc" @click="calcClick">去结算({{checkedLength}})</div>
    </div>
</template>

<script>
    import CheckButton from 'components/content/checkbutton/CheckButton'

    export default {
        name: "CartButtonBar",
        components: {
            CheckButton
        },
        computed: {
            totalPrice() {
                return this.$store.getters.getList.filter(item => item.isCheck).reduce((old, item) => {
                    return old + item.price * item.count
                }, 0)
            },
            checkedLength() {
                return this.$store.getters.getList.filter(item => item.isCheck).length
            },
            isSelectAll() {
                return this.$store.getters.getList.every(item => item.isCheck)
                // return !(this.$store.getters.getList.find(item=>!item.isCheck))
            }
        },
        methods: {
            checkAll() {
                let bool = this.isSelectAll;
                this.$store.getters.getList.forEach(item => item.isCheck = !bool)
            },
            calcClick() {
                const checkSome = this.$store.getters.getList.some(item => item.isCheck)
                if (!checkSome) {
                    this.$toast.show('请选择商品', 2000)
                }
            }
        }
    }
</script>

<style scoped>
    .CartButtonBar {
        height: 44px;
        display: flex;
        background: #eeeeee;
        line-height: 40px;
        /*position: relative;*/
    }

    .checkButton {
        height: 20px;
        width: 20px;
        line-height: 20px;
        font-size: 20px;
        font-weight: bold;
    }

    .check-content {
        width: 20%;
        display: flex;
        /*display: flex;*/
        justify-content: center;
        align-items: center;
    }

    .calc {
        background: #ff8198;
        width: 40%;
        text-align: center;
        font-size: 18px;
        color: white;
        font-weight: bold;
    }
</style>