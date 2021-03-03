<template>
  <div class="about-as">
    
    <header id="wx-header">
        <van-nav-bar title="关于我们" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
        </van-nav-bar>
    </header>

    <div class="logo-version">
      <img src="../../assets/image/setting/logo.png" />
      <h6>Chain Mall</h6>
      <span class="version">版本1.0.1</span>
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
            headerActive,
            pageScroll
        };
    }
};
</script>

<style scoped lang="scss">
.about-as {
  min-height: 100vh;
  background-color: #fff;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      position: fixed;
      left: 20px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
    }
  }
  .logo-version {
    padding-top: 92px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
    }
    .version {
      font-size: 17px;
      padding-top: 6px;
      color: #3a3a3a;
    }
  }
  // .setting-content {
  //   padding: 20px 37px 0 37px;
  //   margin-bottom: 20px;
  //   .setting-list {
  //     .setting-item {
  //       display: flex;
  //       justify-content: space-between;
  //       align-items: center;
  //       padding-bottom: 20px;
  //       .icon {
  //         color: #949497;
  //         opacity: 0.5;
  //         font-size: 15px;
  //       }
  //       .setting-msg {
  //         color: #3a3a3a;
  //         font-size: 15px;
  //       }
  //     }
  //   }
  // }
}
</style>
