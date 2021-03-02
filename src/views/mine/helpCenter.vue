<template>
  <div class="help-center">
    
    <header id="wx-header">
        <van-nav-bar title="帮助中心" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
        </van-nav-bar>
    </header>

    <section class="message-card">
      <ul class="message-list">
        <li class="message-item">
          <div class="item-title">
            <svg-icon icon-class="product-help"></svg-icon>
            <span>使用帮助</span>
          </div>
          <router-link to="/mine/feedback" class="item-title" tag="div">
            <svg-icon icon-class="feedback-svg"></svg-icon>
            <span>问题反馈</span>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="mine-content">
      <ul class="options-list">
        <li class="item-header">
          <span>使用帮助</span>
        </li>
        <router-link to="/mine/messageCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>支持方式</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>服务承诺</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>联系我们</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
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

         const activeNames = reactive({ values: ["1"] });

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
            pageScroll,
            activeNames
        };
    }
};
</script>

<style scoped lang="scss">
.help-center {
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
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        color: #3a3a3a;
        .item-title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          .svg-icon {
            width: 70px;
            height: 68px;
          }
          span {
            font-size: 15px;
            margin-top: 10px;
          }
        }
        .message-content {
          font-size: 13px;
        }
      }
    }
  }
  .mine-content {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      .item-header {
        font-size: 18px;
        margin-bottom: 16px;
      }
      .option-item {
        color: #3a3a3a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding-bottom: 22px;
        .collapse-box {
          width: 100%;
          /deep/ .van-collapse-item__content {
            padding-left: 0;
            padding-right: 0;
          }
          /deep/ .van-cell {
            padding-left: 0;
            padding-right: 0;
          }
          /deep/ .van-cell:not(:last-child)::after {
            border: none;
          }
          /deep/ .van-cell__title {
            color: #3a3a3a;
            font-size: 17px;
          }
          /deep/ .van-collapse-item__content {
            padding: 0;
            .help-item {
              padding: 5px 0;
              font-size: 15px;
              color: #949497;
            }
          }
        }
        /deep/ .van-hairline--top-bottom::after {
          display: none;
        }
        .item-info {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
