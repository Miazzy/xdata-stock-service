<template>
<keep-alive>
    <div id="content" style="margin-top: 0px; overflow-x: hidden;">
        <header id="wx-header" style="overflow-x:hidden;">
            <van-nav-bar title="设立管理" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <section>

        </section>
    </div>
</keep-alive>
</template>

<script>
import {
    ref,
    reactive,
    onMounted,
    toRefs,
    getCurrentInstance
} from "vue";
import {
    useStore
} from "vuex";
import {
    useRouter,
    useRoute
} from "vue-router";
import tabbar from "@/components/tabbar";
export default {
    name: "base",
    components: {
        tabbar
    },
    setup(props, context) {
        const { ctx } = getCurrentInstance();
        const $store = useStore(); 
        const $router = useRouter();
        const $route = useRoute(); 
        const active = ref("");

        const state = reactive({
            homeImgs: [],
            tabArray: []
        });

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            window.addEventListener("scroll", pageScroll);
        });

        const returnBack = () => {
            console.log('returnBack');
            $router.push("/mine");
        };

        const searching = ()=>{
            console.log('searching');
        };

        const beforeEnter = el => {
            const dom = ball.el;
            const rect = dom.getBoundingClientRect();
            const x = rect.left - window.innerWidth * 0.6;
            const y = -(window.innerHeight - rect.top);
            el.style.display = "block";
            el.style.transform = `translate3d(0,${y}px,0)`;
            const inner = el.querySelector(".inner");
            inner.style.transform = `translate3d(${x}px,0,0)`;
        };

        const enter = (el, done) => {
            document.body.offsetHeight;
            el.style.transform = "translate3d(0,0,0)";
            const inner = el.querySelector(".inner");
            inner.style.transform = "translate3d(0,0,0)";
            el.addEventListener("transitionend", done);
        };

        const afterEnter = el => {
            el.style.display = "none";
        };

        const pageScroll = () => {
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            scrollTop > 100 ?
                (headerActive.value = true) :
                (headerActive.value = false);
        };

        return {
            active,
            ...toRefs(state),
            returnBack,
            searching,
            beforeEnter,
            enter,
            afterEnter,
            pageScroll
        };
    }
};
</script>

<style lang="scss" scoped>
@import "./base.scss";
</style>
