<template>
<div class="home">

    <van-nav-bar title="公司信息" left-text="返回" left-arrow @click-left="returnBack" />

    <div id="company-query-content">
        <van-search v-model="value" placeholder="请输入公司名称、法人、地址等信息" @search="companySearch" />
        <div class="home-latestcompany" style="margin-bottom:50px;">
            <div class="home-middle-content">
                <a href="/firm/f06eabb81ca5c48435a99d643e2aeb6d.html" class="a-decoration">
                    <div class="list-item">
                        <div class="list-item-top">
                            <div class="list-item-logo"></div>
                            <div class="list-item-name">
                                普洱蓝艺装饰工程有限责任公司
                            </div>
                        </div>
                        <div class="list-item-middle">
                            <div class="col-3">
                                <div class="col-subtitle">
                                    法定代表人
                                </div> <object class="col-title"> <a class="text-primary" href="/people?name=%E9%99%88%E6%B5%A9&amp;keyno=f06eabb81ca5c48435a99d643e2aeb6d">陈浩</a> </object>
                            </div>
                            <div class="col-3">
                                <div class="col-subtitle">注册资金</div>
                                <div class="col-title"> 100万元人民币 </div>
                            </div>
                            <div class="col-3">
                                <div class="col-subtitle">成立日期</div>
                                <div class="col-title">2021-02-24</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div style="height:30px;"></div>
    </div>
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

export default {
    name: "companyQuery",
    components: {},
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

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            window.addEventListener("scroll", pageScroll);
        });

        //返回上一页函数
        const returnBack = () => {
            console.log('returnBack');
            $router.push("/company");
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
            beforeEnter,
            enter,
            afterEnter,
            pageScroll,
            returnBack,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../home/home.css";

#company-query-content .list-item-name {
    color: #333333;
    font-size: 17px;
    float: left;
    margin-left: 5px;
    width: calc(100% - 50px);
}
</style>
