<template>
<div class="home">
    <div>
        <div class="home-newslist">
            <div class="home-middle-content">
                <div class="lnews-cell" data-keywords="" data-tag="">
                    <a class="item" href="https://mob.qichacha.com/h5/app/news-template/index-dynamics?newsId=9c368015690606801080b381e460f482&amp;outside=1&amp;unique=8cc160268ee08b0b305b3691e842c10e" target="_blank" rel="nofollow">
                        <div class="cell-bd">
                            <div class="content">
                                <div class="title fixheight">
                                    美国将涉嫌协助日产前董事长戈恩潜逃的2名美国人引渡至日本
                                </div>
                                <div class="info">
                                    <span class="ltext">第一财经</span>
                                    <span class="ltext">3347阅读</span>
                                    <span class="ltext">2小时前</span>
                                </div>
                            </div>
                        </div>
                        <div class="cell-ft">
                            <div class="img">
                                <img src="https://www.qcc.com/material/theme/chacha/cms/v2/images/no_image.png" alt="美国将涉嫌协助日产前董事长戈恩潜逃的2名美国人引渡至日本-企查查" onerror="this.src='https://www.qcc.com/material/theme/chacha/cms/v2/images/no_image.png'" class="">
                            </div>
                        </div>
                    </a> </div>
                <div class="lnews-cell" data-keywords="" data-tag=""> <a class="item" href="https://mob.qichacha.com/h5/app/news-template/index-dynamics?newsId=9bb367b0f6bea0f6914e6b40a810c1ae&amp;outside=1&amp;unique=1fdd7be2ade0dc92468c6f36d390ba30" target="_blank" rel="nofollow">
                        <div class="cell-bd">
                            <div class="content">
                                <div class="title fixheight">
                                    法国二手奢侈品平台完成新一轮共1.78亿欧元融资
                                </div>
                                <div class="info">
                                    <span class="ltext">搜狐财经</span>
                                    <span class="ltext">958阅读</span>
                                    <span class="ltext">1小时前</span>
                                </div>
                            </div>
                        </div>
                    </a> </div>
            </div>
        </div>
        <div style="height:30px;"></div>
    </div>
    <tabbar></tabbar>
</div>
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
    name: "home",
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
        const timeData = ref(36000000);
        const headerActive = ref(false);

        const state = reactive({
            homeImgs: [],
            tabArray: []
        });

        const ball = reactive({
            show: false,
            el: ""
        });

        ctx.$http.get("http://test.happymmall.com/home/homeData").then(res => {
            const {
                images,
                tabList
            } = res.data;
            state.tabArray = tabList;
            state.homeImgs = images;
        });

        onMounted(() => {
            window.addEventListener("scroll", pageScroll);
        });

        const addToCart = (event, tag) => {
            $store.commit("cart/addToCart", tag);
            ball.show = true;
            ball.el = event.target;
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
            ball.show = false;
            el.style.display = "none";
        };

        const handleClick = linkUrl => {
            $router.push("/classify/product");
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
            timeData,
            headerActive,
            ...toRefs(ball),
            ...toRefs(state),
            addToCart,
            beforeEnter,
            enter,
            afterEnter,
            handleClick,
            pageScroll
        };
    }
};
</script>

<style lang="scss" scoped>
@import "./home.css";
@import "./news.scss";
</style>
