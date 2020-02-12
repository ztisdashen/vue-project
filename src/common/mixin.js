import {deBounce} from "./utils";

export const itemLoadListenerMixin = {
    data() {
        return {
            itemLoadListener: null,
            newRefresh: null
        }
    },
    mounted() {

        this.newRefresh = deBounce(this.$refs.scroll.refresh, 100);
        this.itemLoadListener = () => {
            this.newRefresh()
        };
        this.$bus.$on('imgLoad', this.itemLoadListener)
    }
};
export const backTopMixin = {
    data() {
        return {}
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 500)
        }
    }
};