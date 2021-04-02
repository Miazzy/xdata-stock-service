<template>
<div class="setting-page">

    <header id="wx-header">
        <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
        </van-nav-bar>
    </header>

    <section class="setting-content">
        <ul class="setting-list">
            <li class="setting-item">
                <span class="setting-msg">消息提醒</span>
                <van-switch v-model="checked" active-color="#D8182D" size="20px" />
            </li>
            <li class="setting-item">
                <span class="setting-msg">清除缓存</span>
                <van-icon class="icon" name="arrow" />
            </li>
            <router-link tag="li" class="setting-item" to="/aboutas">
                <span class="setting-msg">关于我们</span>
                <van-icon class="icon" name="arrow" />
            </router-link>
        </ul>
    </section>
    <van-button plain size="large" type="danger">退出登录</van-button>
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
        const headerActive = ref(false);

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
            headerActive,
            pageScroll
        };
    }
};
</script>

<style lang="scss" scoped>
.setting-page {
    padding: 0 0px;
    height: 100vh;

    .van-button--large {
        width: 92%;
        height: 1.33333rem;
        margin-left: 4%;
        margin-right: 4%;
    }

    .page-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;

        .header-content {
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            flex: 1;
        }
    }

    .setting-content {
        padding: 20px 20px 0 20px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 8px;

        .setting-list {
            .setting-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 20px;

                .icon {
                    color: #949497;
                    opacity: 0.5;
                    font-size: 15px;
                }

                .setting-msg {
                    color: #3a3a3a;
                    font-size: 15px;
                }
            }
        }
    }

    /deep/ .van-button--large {
        height: 44px;
        line-height: 44px;
    }
}
</style>
