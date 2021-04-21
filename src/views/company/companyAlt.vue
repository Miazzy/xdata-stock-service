<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar :title="state.title" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
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
                            <van-col span="24" style="text-align: center;font-size:.475rem;">{{state.title}}申请</van-col>
                        </van-row>
                    </div>
                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">

                                <van-cell value="变更记录" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="录入日期" v-model="state.item.create_time" placeholder="请输入录入日期" readonly />
                                
                                <common-select :showTag="state.tag.showCompanyName" :modelColumns="state.companyNameColumns" fieldName="companyName" :modelValue="state.alteration.companyName" :element="state.alteration" type="company" v-model="state.alteration.companyName" labelName="公司名称" placeholderName="请填写公司名称" @search="commonSearch" @confirm="commonConfirm" />

                                <van-field required :readonly="false" clickable clearable label="变更类型" v-model="state.alteration.name" placeholder="请选择变更类型" @click="state.tag.showName = true;" />
                                <nut-popup position="bottom" closeable close-icon-position="top-left" :style="{ height: '40%' }" v-model:visible="state.tag.showName">
                                    <van-picker v-show="state.tag.showName" title="选择变更类型" show-toolbar :columns="state.typeNameColumns" @confirm="nameConfirm" @cancel="state.tag.showName = false;" />
                                </nut-popup>

                                <van-field required :readonly="false" clickable clearable label="变更日期" v-model="state.alteration.time" placeholder="请选择变更日期" @click="clickDatePicker('showTime' , 'time' , true);" />
                                <nut-popup position="bottom" closeable close-icon-position="top-left" :style="{ height: '40%' }" v-model:visible="state.tag.showTime">
                                    <van-datetime-picker v-show="state.tag.showTime" v-model="state.status.time" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showTime' , 'time' , false);" @confirm="clickDatePicker('showTime' , 'time' , false);" />
                                </nut-popup>

                                
                                <van-field required :readonly="false" clickable clearable label="变更前内容" v-model="state.alteration.pre_value" rows="5" autosize type="textarea" placeholder="请输入变更前内容" />
                                <van-field required :readonly="false" clickable clearable label="变更后内容" v-model="state.alteration.value" rows="5" autosize type="textarea" placeholder="请输入变更后内容" />

                            </van-cell-group>
                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div v-if="state.tag.showOperationZone" class="section-button" style="text-align:center;margin-top:0.75rem;margin-bottom:0.75rem;">
            <van-button plain hairline type="info" style="width:37.5%;" @click="cancel">取消</van-button>
            <van-button plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="confirm" >确定</van-button>
        </div>

    </div>
</keep-alive>
</template>

<script>
import { Toast} from "@nutui/nutui";
import { Dialog, } from 'vant';
import commonSelect from '@/components/select/commonSelect';
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "companyDirector",
    components: {
        commonSelect
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
            title:'变更记录',
            companyNameColumns: [],
            typeNameColumns: ['主要成员变更', '章程备案变更', '企业类型变更', '出资情况变更', '公司名称变更', '法定代表人变更', '注册资本(金)变更', '高级管理人员备案(董事/监事/经理等)', '章程修正案备案', '其他事项备案', '投资者名称(姓名)变更', '其他事项备案', '投资人(股权)变更', '经营范围变更', '换发证照', '企业类型变更', '经理备案', '经营期限(营业期限)变更'],
            radio: {
            },
            item: {
                create_time: dayjs().format('YYYY-MM-DD'),
                companyName: '', //公司名称
            },
            alteration: {
                id: '', //变更记录ID
                time: dayjs().format('YYYY-MM-DD'), //变更日期
                name: '主要成员变更', //变更类型
                pre_value: '', //变更前信息
                value: '', //变更后信息
                companyName: '', //公司名称
                xid:0,
            },
            status: {
                time: new Date(),
                minDate: new Date(1990, 0, 1),
                maxDate: new Date(2099, 12, 31),
            },
            tag: {
                showOperationZone: true,
                showName: false,
                showTimes:false,
                showTime:false,
                show:true,
                showKey: '',
            },
            show: true,
            message: {},
            step: 'one',
        });

        onMounted(() => {
            state.title = $route.query.title ? $route.query.title : state.title;
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

        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ?  (headerActive.value = true) :  (headerActive.value = false);
        };

        //类型名称确认操作
        const nameConfirm = async (value, index) => {
            await Betools.manage.commonDataConfirm(index, value, 'name', state.alteration, state, Dialog, '');
        };

        //搜索数据确认函数
        const commonConfirm = async (index, value, key, item, type='company_ic') => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog, type);
        };

        //搜索数据函数
        const commonSearch = async (data, value, key, fieldKey, type = 'user') => {
            await Betools.manage.commonDataSearch(data, value, key, fieldKey, state, type);
        };

        //日期选择确认
        const clickDatePicker = async (name, tname, status = true) => {
            state.tag[name] = status;
            state.alteration[tname] = dayjs(state.status[tname]).format('YYYY-MM-DD');
        };

        //取消提交录入申请函数
        const cancel = async() => {
            await Betools.manage.cancelAndBack(Dialog , returnBack , '取消录入变更记录申请？');
        };

        //提交录入变更记录申请确认函数
        const confirm = async(result = null , elem = null , nodes = []) => {
            delete state.alteration.company;
            state.alteration.id = Betools.tools.queryUniqueID(); //构建提交Node
            result = await Betools.manage.postTableData('bs_company_flow_alteration', state.alteration); //提交变更信息
            Toast.success('提交变更记录申请成功！');//提示用户操作成功
            state.tag.showOperationZone = false;
        };

        return {
            active,
            state,
            returnBack,
            searching,
            headerActive,
            pageScroll,
            commonConfirm,
            commonSearch,
            nameConfirm,
            clickDatePicker,
            cancel,
            confirm,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
@import "../base/company.scss";
</style>
