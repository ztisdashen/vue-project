import vue from 'vue'
import Router from 'vue-router'
vue.use(Router);
const Home =()=> import("../view/home/Home");
const Me = ()=>import("../view/me/Me");
const Cart = ()=>import("../view/cart/Cart");
const Category = () => import("../view/category/Category");
const Detail = () => import('../view/detail/Detail')
const router = new Router({
    mode: "history",
    routes: [
        {
            path: "",
            redirect: "/home",
            meta: {
                title: "首页"
            }
        },
        {
            path: "/home",
            component: Home,
            meta:{
                title:"首页"
            }
        },
        {
            path: "/category",
            component: Category,
            meta:{
                title:"分类"
            }
        },
        {
            path: "/cart",
            component: Cart,
            meta: {
                title: "购物车"
            }
        },
        {
            path: "/me",
            component: Me,
            meta: {
                title: "我的"
            }
        }, {
            path: "/detail",
            component: Detail,
            meta: {
                title: '详情'
            }
        }
    ]
});
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    next()
})
export default router