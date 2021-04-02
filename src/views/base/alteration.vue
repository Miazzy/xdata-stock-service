<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header" style="">
            <van-nav-bar title="信息变更" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%);">
                <div id="weui-cells-flex" class="weui-cells" style="">
                    <div class="weui-cell-title" style="">变更管理</div>
                    <div class="flex-layout-content" id="scanCell" style="">
                        <van-row>
                            <van-col span="6" @click="redirectView('/companyrec?back=/alteration&title=公司变更')" >
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[0]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">公司变更</div>
                            </van-col>
                            <van-col span="6" @click="redirectView('/companystockholder?back=/alteration&title=股东变更')" >
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[1]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">股东变更</div>
                            </van-col>
                            <van-col span="6" @click="redirectView('/companydirector?back=/alteration&title=高管变更')" >
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[2]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">高管变更</div>
                            </van-col>
                            <van-col span="6" @click="redirectView('/alterationadd')" >
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[3]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">资金变更</div>
                            </van-col>
                            <van-col span="6" @click="redirectView('/alterationadd')" >
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[6]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">经营变更</div>
                            </van-col>
                            <van-col span="6" @click="redirectView('/alterationadd')" >
                                <van-badge>
                                    <img class="child" style="" :src="state.imgs[5]">
                                </van-badge>
                                <div class="section-flex-layout-content" style="">其他变更</div>
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
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xinwen_jy.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xiangmuxinxi_jy.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/liebiao_jy.png',//anquanjianchaxiang_jy
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/anquanjianchaxiang_jy.png',//
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/tongzhigonggao_jy.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xinxidengji_jy.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/fenbufenxiang_jy.png',
                ],
        });

        onMounted(() => {
            window.addEventListener("scroll", pageScroll);
        });

        const returnBack = () => {
            console.log('returnBack');
            $router.push("/mine");
        };

        const redirectView = (path) =>{
            $router.push(path);
        }

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
