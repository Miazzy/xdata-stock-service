<template>
<div class="message-center">
    <header id="wx-header">
        <van-nav-bar title="消息中心" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
        </van-nav-bar>
    </header>
    <section class="message-card">
        <ul class="message-list">
            <li class="message-item">
                <div class="item-title">
                    <van-tag color="#FFBF43">问题反馈</van-tag>
                    <span>2019-05-17 16:30:10</span>
                </div>
                <div class="message-content">
                    您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
                </div>
            </li>
        </ul>
    </section>
    <section class="message-card">
        <ul class="message-list">
            <li class="message-item">
                <div class="item-title">
                    <van-tag color="#FFBF43">问题反馈</van-tag>
                    <span>2019-05-17 16:30:10</span>
                </div>
                <div class="message-content">
                    您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
                </div>
            </li>
        </ul>
    </section>
    <section class="message-card">
        <ul class="message-list">
            <li class="message-item">
                <div class="item-title">
                    <van-tag color="#91C95B">订单通知</van-tag>
                    <span>2019-05-17 16:30:10</span>
                </div>
                <div class="message-content">
                    您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
                </div>
            </li>
        </ul>
    </section>
    <section class="message-card">
        <ul class="message-list">
            <li class="message-item">
                <div class="item-title">
                    <van-tag color="#FFBF43">问题反馈</van-tag>
                    <span>2019-05-17 16:30:10</span>
                </div>
                <div class="message-content">
                    您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
                </div>
            </li>
        </ul>
    </section>
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

        const state = reactive({
            imgs: [
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@r3.0.8/images/worktile_9.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/list_00.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/hire.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/pay.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@r3.0.5/images/shenpi.png',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/jiejing.png',
            ],
        });

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            window.addEventListener("scroll", pageScroll);
        });

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
            pageScroll
        };
    }
};
</script>

<style lang="scss" scoped>
.message-center {
    height: 100%;
    padding: 0 0px;
    padding-bottom: 45px;

    .page-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;

        .btn-left {
            background-color: white;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
        }

        .header-content {
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            color: #3a3a3a;
            flex: 1;
        }

        .appeal-record {
            color: #d8182d;
            font-size: 13px;
        }
    }

    .message-card {
        margin-top: 10px;
        background: url("../../assets/image/back-show.png") no-repeat center center;
        background-size: 100% 100%;

        .message-list {
            .message-item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 16px;
                color: #3a3a3a;

                .item-title {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 5px;

                    span {
                        font-size: 10px;
                    }
                }

                .message-content {
                    font-size: 13px;
                }
            }
        }
    }
}
</style>
