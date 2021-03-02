<template>
<div class="tabbar">
    <van-tabbar route v-model="active" @change="tabChange(active)" active-color="#FE4F70" inactive-color="#949497" style="z-index: 100">
        <van-tabbar-item name="index" icon="home-o" to="/index">
            首页
        </van-tabbar-item>
        <van-tabbar-item name="classify" icon="apps-o" to="/classify">
            查老板
        </van-tabbar-item>
        <van-tabbar-item name="news" icon="browsing-history-o" to="/news">
            发现
        </van-tabbar-item>
        <van-tabbar-item name="mine" icon="user-o" to="/mine">
            管理
        </van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
import {
    computed,
    ref,
    getCurrentInstance
} from "vue";
import {
    useStore
} from "vuex";
export default {
    name: "tabbar",
    setup(props, context) {
        const {
            attrs,
            emit,
            slots
        } = context;
        const currentInstance = getCurrentInstance();

        const {
            ctx
        } = currentInstance;
        const active = ref(0);
        const store = useStore();

        ctx.$eventBus.$on(
            "changeTag",
            tag => {
                active.value = tag;
            },
            currentInstance
        );

        const count = computed(() => store.state.cart.count);
        return {
            active,
            count
        };
    },
    methods: {
        tabChange(active) {
            console.log("active => ", active);
        }
    }
};
</script>
