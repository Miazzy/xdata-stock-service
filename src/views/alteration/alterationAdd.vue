<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="信息变更" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%);">

                <div class="weui-cells" style="margin-top:0px;">

                    <div class="weui-cells" style="margin-top:0px;border-bottom:0px solid #fefefe;">
                        <van-notice-bar v-show=" title!='' && title != null && typeof title != 'undefined' " left-icon="volume-o" color="#1989fa" background="#ecf9ff" :text="title" />
                    </div>

                    <div class="" id="scanCell" style="padding: 8px 10px 4px 10px;">
                        <van-row>
                            <van-col span="24" style="text-align: center;font-size:.475rem;">信息变更申请</van-col>
                        </van-row>
                    </div>

                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">

                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="基本信息" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="填报日期" v-model="state.item.createtime" placeholder="请输入登记日期" readonly />
                                <van-field required :readonly="false" clickable clearable label="用印类型" v-model="state.item.sealtype" placeholder="选择用印类型" />
                                <van-field required readonly clickable clearable label="用印顺序" v-model="state.item.ordertype" placeholder="选择用印顺序" />
                            </van-cell-group>
                        </van-form>
                    </van-cell-group>

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
            imgs: [],
            item: {
                createtime: dayjs().format('YYYY-MM-DD'),
                sealtype: '',
                ordertype: '',
            },
        });

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            window.addEventListener("scroll", pageScroll);
        });

        const returnBack = () => {
            console.log('returnBack');
            $router.push("/alteration");
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
            pageScroll
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
</style>
