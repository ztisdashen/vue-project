import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
const store = new vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addToCart(state, payload) {
            payload.count = 1;
            payload.isCheck = false
            state.cartList.push(payload)
        },
        addCount(state, payload) {
            payload.count++;
        }
    },
    actions: {
        addToCart(context, payload) {
            return new Promise(((resolve, reject) => {
                let item = context.state.cartList.find(item => item.iid === payload.iid)
                if (item) {
                    context.commit('addCount', item)
                    resolve("数量 +1")
                } else {
                    context.commit('addToCart', payload)
                    resolve("添加至购物车成功")
                }
            }))

        }
    },
    getters: {
        getCartLength(state) {
            return state.cartList.length
        },
        getList(state) {
            return state.cartList
        }
    }
})
export default store