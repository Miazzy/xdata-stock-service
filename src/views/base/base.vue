<template>
<keep-alive>
    <div id="content" style="margin-top: 0px; overflow-x: hidden;">
        <header id="wx-header" style="overflow-x:hidden;">
            <van-nav-bar title="基础信息" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
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
        const {
            ctx
        } = getCurrentInstance();

        const $store = useStore(); // ctx.$store === $store  ==>true 其实是同一个对象！
        const $router = useRouter();
        const $route = useRoute(); // 可以拿到所有和路由相关的参数
        const active = ref("");
        const headerActive = ref(false);

        const state = reactive({
            homeImgs: [],
            tabArray: []
        });

        onMounted(() => {
            window.addEventListener("scroll", pageScroll);
        });

        const redirectView = (path) =>{
            $router.push(path);
        }

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
            headerActive,
            redirectView,
            pageScroll
        };
    }
};
</script>

<style lang="scss" scoped>
@import "./base.scss";
</style>
