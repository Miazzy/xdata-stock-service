<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="设立公司" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" v-show="state.step == 'one' " style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%);">

                <div class="weui-cells" style="margin-top:0px;">

                    <div class="weui-cells" style="margin-top:0px;border-bottom:0px solid #fefefe;">
                        <van-notice-bar v-show=" title!='' && title != null && typeof title != 'undefined' " left-icon="volume-o" color="#1989fa" background="#ecf9ff" :text="title" />
                    </div>

                    <div class="" id="scanCell" style="padding: 8px 10px 4px 10px;">
                        <van-row>
                            <van-col span="24" style="text-align: center;font-size:.475rem;">设立公司申请</van-col>
                        </van-row>
                    </div>

                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">

                    <van-cell-group>
                        <van-form>

                            <van-cell-group style="margin-top:10px;">

                                <van-cell value="基本信息" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="填报日期" v-model="state.item.createtime" placeholder="请输入登记日期" readonly />
                                <van-field required :readonly="false" clickable clearable label="公司名称" v-model="state.item.sealtype" placeholder="请填写公司名称" />
                                <van-field required :readonly="false" clickable clearable label="所属行业" v-model="state.item.ordertype" placeholder="请选择所属行业" />
                                <van-field required :readonly="false" clickable clearable label="所属区域" v-model="state.item.ordertype" placeholder="请选择所属区域" />
                                <van-field required :readonly="false" clickable clearable label="登记状态" v-model="state.item.ordertype" placeholder="请选择登记状态" />
                                <van-field required :readonly="false" clickable clearable label="注销时间" v-model="state.item.ordertype" placeholder="请选择注销时间" />
                                <van-field required :readonly="false" clickable clearable label="营业执照" v-model="state.item.ordertype" placeholder="请选择营业执照" />

                                <van-field required :readonly="false" clickable clearable label="经营范围" v-model="state.item.ordertype" placeholder="请输入经营范围" />
                                <van-field required :readonly="false" clickable clearable label="注册地址" v-model="state.item.ordertype" placeholder="请输入注册地址" />
                                <van-field required :readonly="false" clickable clearable label="注册资本(万)" v-model="state.item.ordertype" placeholder="请输入注册资本(万)" />
                                <van-field required :readonly="false" clickable clearable label="实缴资本(万)" v-model="state.item.ordertype" placeholder="请输入实缴资本(万)" />
                                <van-field required :readonly="false" clickable clearable label="认缴时间" v-model="state.item.ordertype" placeholder="请选择认缴时间" />
                                <van-field required :readonly="false" clickable clearable label="实缴时间" v-model="state.item.ordertype" placeholder="请选择实缴时间" />
                                <van-field required :readonly="false" clickable clearable label="营业期限" v-model="state.item.ordertype" placeholder="请选择营业期限" />
                                <van-field required :readonly="false" clickable clearable label="公司类型" v-model="state.item.ordertype" placeholder="请选择公司类型" />

                                <van-field required :readonly="false" clickable clearable label="设立原因" v-model="state.item.ordertype" placeholder="请输入设立原因" />
                                <van-field required :readonly="false" clickable clearable label="使用情况" v-model="state.item.ordertype" placeholder="请输入使用情况" />
                                <van-field required :readonly="false" clickable clearable label="法定代表人" v-model="state.item.ordertype" placeholder="请输入法定代表人" />
                                <van-field required :readonly="false" clickable clearable label="印章保管人" v-model="state.item.ordertype" placeholder="请选择印章保管人" />
                                <van-field required :readonly="false" clickable clearable label="备案联络员" v-model="state.item.ordertype" placeholder="请选择工商备案联络员" />
                                <van-field required :readonly="false" clickable clearable label="财务负责人" v-model="state.item.ordertype" placeholder="请选择工商备案财务负责人" />
                                <van-field required :readonly="false" clickable clearable label="备注信息" v-model="state.item.ordertype" placeholder="请输入备注信息" />

                            </van-cell-group>

                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div class="section-content" v-show="state.step == 'two' " style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%); margin-bottom:0.00rem;">
                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="机构人员" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="董事长" v-model="state.item.ordertype" placeholder="请选择董事长" />
                                <van-field required :readonly="false" clickable clearable label="董事" v-model="state.item.ordertype" placeholder="请选择董事" />
                                <van-field required :readonly="false" clickable clearable label="执行董事" v-model="state.item.ordertype" placeholder="请选择执行董事" />
                                <van-field required :readonly="false" clickable clearable label="总经理/经理" v-model="state.item.ordertype" placeholder="请选择总经理/经理名单" />
                                <van-field required :readonly="false" clickable clearable label="监事会主席" v-model="state.item.ordertype" placeholder="请选择监事会主席" />
                                <van-field required :readonly="false" clickable clearable label="监事" v-model="state.item.ordertype" placeholder="请选择监事" />
                            </van-cell-group>
                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div class="section-content" v-show="state.step == 'three' " style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%); margin-bottom:0.75rem;">
                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="股东信息" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.item.ordertype" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.item.ordertype" placeholder="请输入股权占股明细" />
                            </van-cell-group>
                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div class="section-button" style="text-align:center;margin-top:0.75rem;margin-bottom:0.75rem;">
            <van-button v-show="state.step == 'one' " plain hairline type="info" style="width:37.5%;" @click="cancel">取消</van-button>
            <van-button v-show="state.step != 'one' " plain hairline type="info" style="width:37.5%;" @click="prestep">上一步</van-button>
            <van-button v-show="state.step != 'three' " plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="nextstep">下一步</van-button>
            <van-button v-show="state.step == 'three' " plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="confirm">确认</van-button>
        </div>

    </div>
</keep-alive>
</template>

<script>

import { Dialog } from 'vant';

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
            step:'one',
        });

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            window.addEventListener("scroll", pageScroll);
        });

        const returnBack = () => {
            console.log('returnBack');
            $router.push("/company");
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

        const cancel = () => {
            Dialog.confirm({
                    title: '取消设立公司申请？',
                    message: '点击‘确认’后返回上一页',
                }).then(() => { // on confirm
                    returnBack();
                }).catch(() => { // on cancel

                });
        }

        const confirm = ()=> {

        }

        const nextstep = () => {
            if(state.step == 'one'){
                state.step = 'two'
            } else if(state.step == 'two'){
                state.step = 'three'
            }
        }

        const prestep = () => {
            if(state.step == 'three'){
                state.step = 'two'
            } else if(state.step == 'two'){
                state.step = 'one'
            }
        }

        return {
            active,
            state,
            returnBack,
            searching,
            beforeEnter,
            enter,
            afterEnter,
            headerActive,
            pageScroll,
            nextstep,
            prestep,
            cancel
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
@import "../base/company.scss";
</style>
