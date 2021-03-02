<template>
<div class="shipping-address">
    <header id="wx-header">
        <van-nav-bar title="我的地址" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
        </van-nav-bar>
    </header>

    <section class="address-card">
        <ul class="card-content">
            <div class="card-triangle active"></div>
            <li class="addres-svg">
                <svg-icon icon-class="address-home"></svg-icon>
            </li>
            <li class="card-info">
                <div class="info-name">
                    <span>我是谁</span>
                    <i>家</i>
                </div>
                <div class="info-address">
                    <span>广东省深圳市宝安区福永地铁站C出口</span>
                    <van-icon name="arrow" color="#D8182D" />
                </div>
                <span>136778769907</span>
            </li>
        </ul>
    </section>
    <section class="address-card">
        <ul class="card-content">
            <div class="card-triangle"></div>
            <li class="addres-svg">
                <svg-icon icon-class="address-company"></svg-icon>
            </li>
            <li class="card-info">
                <div class="info-name">
                    <span>我是谁</span>
                    <i>公司</i>
                </div>
                <div class="info-address">
                    <span>广东省深圳市宝安区福永地铁站C出口</span>
                    <van-icon name="arrow" />
                </div>
                <span>136778769907</span>
            </li>
        </ul>
    </section>
    <section class="address-card">
        <ul class="card-content">
            <div class="card-triangle"></div>
            <li class="addres-svg">
                <svg-icon icon-class="address-school"></svg-icon>
            </li>
            <li class="card-info">
                <div class="info-name">
                    <span>我是谁</span>
                    <i>学校</i>
                </div>
                <div class="info-address">
                    <span>广东省深圳市宝安区福永地铁站C出口</span>
                    <van-icon name="arrow" />
                </div>
                <span>136778769907</span>
            </li>
        </ul>
    </section>

    <div class="address-btn">
        <router-link to="/mine/addAddress">
            <van-button plain type="danger" icon="plus" size="large">新增地址</van-button>
        </router-link>
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
.shipping-address {
    height: 100%;
    padding: 0rem 0rem;

    .page-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;

        .header-content {
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            color: #3a3a3a;
            flex: 1;
        }
    }

    .address-card {
        margin-top: 10px;

        .card-content {
            border-radius: 8px;
            padding: 16px 0;
            background-color: #fff;
            overflow: hidden;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;

            .card-triangle.active {
                background-color: #d8182d;
            }

            .card-triangle {
                position: absolute;
                top: -10px;
                background-color: #949497;
                right: -125px;
                width: 230px;
                height: 63px;
                transform: rotate(45deg);
                box-shadow: 0 0 5px 2px #ccc;
            }

            .addres-svg {
                padding: 10px 16px;
                border: 0 solid #efeff4;
                border-right-width: 1px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .card-info {
                font-size: 11px;
                padding-left: 16px;
                color: #3a3a3a;
                display: flex;
                flex-direction: column;
                flex: 1;

                .info-name {
                    font-size: 13px;
                    font-weight: 600;
                    display: flex;
                    justify-content: space-between;

                    i {
                        position: absolute;
                        top: 6px;
                        right: 0px;
                        font-size: 11px;
                        padding-right: 8px;
                        color: #fff;
                    }
                }

                .info-address {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 18px;
                    padding-top: 6px;
                    padding-bottom: 6px;
                }
            }
        }
    }

    .address-btn {
        position: fixed;
        bottom: 10px;
        width: 92%;
        text-align: center;
        margin-left: 4%;
        margin-right: 4%;

        /deep/ .van-button--large {
            height: 44px;
            line-height: 44px;
        }

        /deep/ .van-button--danger {
            color: #d8182d;
        }
    }
}
</style>
