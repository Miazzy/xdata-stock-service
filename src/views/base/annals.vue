<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="年报上传" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%);">
                <div id="weui-cells-flex" class="weui-cells" style="">
                    <div class="weui-cell-title" style="">年报管理</div>
                    <div class="flex-layout-content" id="scanCell" style="">
                        <van-row>
                            <van-col span="6">
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[8]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">年报上传</div>
                            </van-col>
                            <van-col span="6">
                                <van-badge>
                                    <img class="child" style="transform:scale(0.88);" :src="state.imgs[6]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">录入年报</div>
                            </van-col>
                            <van-col span="6">
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[10]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">变更年报</div>
                            </van-col>
                            <van-col span="6">
                                <van-badge>
                                    <img class="child" style="transform:scale(0.88);" :src="state.imgs[9]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">注销年报</div>
                            </van-col>
                            <van-col span="6">
                                <van-badge>
                                    <img class="child" style="transform:scale(0.88);" :src="state.imgs[7]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">查看年报</div>
                            </van-col>
                        </van-row>
                    </div>
                </div>
                <div id="weui-cells-bottom" style="">
                    <span></span>
                </div>
            </section>
        </div>

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
        const $store = useStore();
        const $router = useRouter();
        const $route = useRoute();
        const active = ref("");
        const headerActive = ref(false);

        const state = reactive({
            imgs: [
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@r3.0.8/images/worktile_9.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/list_00.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/hire.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/pay.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@r3.0.5/images/shenpi.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/jiejing.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/fuwujigou.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/lianlugenzong_sn00.png',//gongshangbuzhujinshenbao
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/gongshangbuzhujinshenbao.png',//gerenyewushouli
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/laodonghetong.png',//hezu
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/hezu.png',//hezu
            ],
        });

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            window.addEventListener("scroll", pageScroll);
        });

        const redirectView = (path) =>{
            $router.push(path);
        }

        const returnBack = () => {
            console.log('returnBack');
            $router.push("/mine");
        };

        const searching = () => {
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
            state,
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
