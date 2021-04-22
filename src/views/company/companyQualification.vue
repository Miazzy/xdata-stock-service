<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="录入资质" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
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
                            <van-col span="24" style="text-align: center;font-size:.475rem;">录入资质申请</van-col>
                        </van-row>
                    </div>
                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="资质信息" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="填报日期" v-model="state.item.createtime" placeholder="请输入登记日期" readonly />
                                <van-field required :readonly="false" clickable clearable label="公司名称" v-model="state.item.sealtype" placeholder="请填写公司名称" />
                                <van-field required :readonly="false" clickable clearable label="资质类型" v-model="state.item.sealtype" placeholder="请选择资质类型" />
                                <van-field required :readonly="false" clickable clearable label="资质等级" v-model="state.item.ordertype" placeholder="请选择资质等级" />
                                <van-field required :readonly="false" clickable clearable label="资质编号" v-model="state.item.ordertype" placeholder="请选择资质编号" />
                                <van-field required :readonly="false" clickable clearable label="资质证有效期" v-model="state.item.ordertype" placeholder="请选择资质证有效期" />
                                <van-field required :readonly="false" clickable clearable label="资质状态" v-model="state.item.ordertype" placeholder="请选择资质状态" />
                                <van-field required :readonly="false" clickable clearable label="注销原因" v-model="state.item.ordertype" placeholder="请选择注销原因" />
                            </van-cell-group>
                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div class="section-button" style="text-align:center;margin-top:0.75rem;margin-bottom:0.75rem;">
            <van-button plain hairline type="info" style="width:37.5%;">取消</van-button>
            <van-button plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;">确定</van-button>
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
            cascader:{
                typeOptions:[{"text":"房地产开发","value":"房地产开发"},{"text":"建筑装修装饰工程专业承包","value":"建筑装修装饰工程专业承包"},{"text":"食品经营许可证","value":"食品经营许可证"},{"text":"--","value":"--"}],
                levelOptions:[{"text":"一级资质","value":"一级资质"},{"text":"二级资质","value":"二级资质"},{"text":"三级资质","value":"三级资质"},{"text":"其他","value":"其他"}],
                statusOptions:[{"text":"有效","value":"有效"},{"text":"无效","value":"无效"},{"text":"注销","value":"注销"},],
            },
            qualification:{
                qualificationType :'', // '资质类型',
                qualificationLevel : '', //  '资质等级',
                qualificationNumber : '', //'资质编号',
                qualificationPeriod:'', // '资质证有效期',
                qualificationStatus :'', // '资质状态',
                validityPeriod1: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                validityPeriod2: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                cancellationReason:'', //     
            },
            status: {
                cancellationTime: new Date(),
                paidTime: new Date(),
                paidTureTime: new Date(),
                businessTerm: new Date(),
                establish_time: new Date(),
                minDate: new Date(1990, 0, 1),
                maxDate: new Date(2099, 12, 31),
            },
            qualificationTypeColumns:['房地产开发','建筑装修装饰工程专业承包','食品经营许可证'],
        });

        onMounted(() => {
            window.addEventListener("scroll", pageScroll);
        });

        //返回上一页函数
        const returnBack = (back = '/company') => {
            back = $route.query.back ? $route.query.back : '/company';
            $router.push(back);
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
@import "../base/company.scss";
</style>
