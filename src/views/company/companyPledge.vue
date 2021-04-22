<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="录入质押" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 3%); padding-bottom: 0.40rem;">
                <div class="weui-cells" style="margin-top:0px;">
                    <div class="weui-cells" style="margin-top:0px;border-bottom:0px solid #fefefe;">
                        <van-notice-bar v-show=" title!='' && title != null && typeof title != 'undefined' " left-icon="volume-o" color="#1989fa" background="#ecf9ff" :text="title" />
                    </div>
                    <div class="" id="scanCell" style="padding: 8px 10px 4px 10px;">
                        <van-row>
                            <van-col span="24" style="text-align: center;font-size:.475rem;">录入质押申请</van-col>
                        </van-row>
                    </div>
                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="基本信息" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="填报日期" v-model="state.pledge.create_time" placeholder="请输入填报日期" readonly />
                                
                                <!--公司名称-->
                                <common-select :showTag="state.tag.showCompanyName" :modelColumns="state.companyNameColumns" fieldName="companyName" :modelValue="state.pledge.companyName" :element="state.pledge" type="company" v-model="state.pledge.companyName" labelName="所属公司" placeholderName="请填写所属公司名称" @search="commonSearch" @confirm="commonConfirm" style="display:block;"/>
                                <span id="van-company-name" value="" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem; color: red; padding: 0.0rem 0.30rem; transform:scale(0.5); font-size:0.25rem; ">* 本条质押信息展示在所属公司的详情信息中</span>
                                <span style="width:100%; border-bottom:1px solid #cecece;"> - </span>

                                <!--登记编号-->
                                <van-field required :readonly="false" clickable clearable label="登记编号" v-model="state.pledge.pledgeID" rows="1" autosize type="textarea" placeholder="请输入质押登记编号" />

                                <!--出质人-->
                                <common-select :showTag="state.tag.showPledgor" :modelColumns="state.pledgorColumns" fieldName="pledgor" :modelValue="state.pledge.pledgor" :element="state.pledge" type="company" v-model="state.pledge.pledgor" labelName="出质人" placeholderName="请填写出质人" @search="commonSearch" @confirm="commonConfirm" />

                                <!--出质股权标的企业-->
                                <common-select :showTag="state.tag.showPledgeCompanyName" :modelColumns="state.pledgeCompanyNameColumns" fieldName="pledgeCompanyName" :modelValue="state.pledge.pledgeCompanyName" :element="state.pledge" type="company" v-model="state.pledge.pledgeCompanyName" labelName="出质标的企业" placeholderName="请填写出质股权标的企业" @search="commonSearch" @confirm="commonConfirm" />

                                <!--质权人-->
                                <common-select :showTag="state.tag.showPledgee" :modelColumns="state.pledgeeColumns" fieldName="pledgee" :modelValue="state.pledge.pledgee" :element="state.pledge" type="company" v-model="state.pledge.pledgee" labelName="质权人" placeholderName="请填写质权人" @search="commonSearch" @confirm="commonConfirm" />
                                
                                <van-field required :readonly="false" clickable clearable label="出质股权数" v-model="state.pledge.pledgedNumber" placeholder="请输入出质股权数额(万元)" />
                                
                                <van-field required :readonly="true" clickable clearable label="出资设立时间" v-model="state.pledge.investmentTime" placeholder="请选择出资设立时间" @click="clickDatePicker('showInvestmentTime' , 'investmentTime' , true);" />
                                <nut-popup position="bottom" closeable close-icon-position="top-left" :style="{ height: '40%' }" v-model:visible="state.tag.showInvestmentTime">
                                    <van-datetime-picker v-show="state.tag.showInvestmentTime" v-model="state.status.investmentTime" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showInvestmentTime' , 'investmentTime' , false);" @confirm="clickDatePicker('showInvestmentTime' , 'investmentTime' , false);" />
                                </nut-popup>

                                <van-field required :readonly="true" clickable clearable label="质押状态" v-model="state.pledge.pledgeStatus" placeholder="请选择资质状态" @click="state.tag.showPledgeStatus = true;" />
                                <van-cascader v-show="state.tag.showPledgeStatus" title="请选择资质状态" :options="state.cascader.statusOptions" @close="state.tag.showPledgeStatus = false" @finish="confirmPStatus" />

                                <van-field v-if="state.pledge.pledgeStatus == '注销' " required :readonly="true" clickable clearable label="注销时间" v-model="state.pledge.cancellationTime" placeholder="请选择注销时间" @click="clickDatePicker('showCancellationTime' , 'cancellationTime' , true);" />
                                <nut-popup v-if="state.pledge.pledgeStatus == '注销' " position="bottom" closeable close-icon-position="top-left" :style="{ height: '40%' }" v-model:visible="state.tag.showCancellationTime">
                                    <van-datetime-picker v-show="state.tag.showCancellationTime" v-model="state.status.cancellationTime" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" @confirm="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" />
                                </nut-popup>
                            
                            </van-cell-group>
                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div v-if="state.tag.showOperationZone" class="section-button" style="text-align:center;margin-top:0.75rem;margin-bottom:0.75rem;">
            <van-button plain hairline type="info" style="width:37.5%;" @click="cancel" >取消</van-button>
            <van-button plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="confirm" >确定</van-button>
        </div>

    </div>
</keep-alive>
</template>

<script>
import { Toast } from "@nutui/nutui";
import { Dialog } from 'vant';
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import tabbar from "@/components/tabbar";

export default {
    name: "质押管理",
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
            radio: {
                companyName: '',
            },
            item: {
                companyName:'',
            },
            pledge:{
                id:'',
                baseID:'',
                create_time: dayjs().format('YYYY-MM-DD'),
                companyName:'', //所属公司
                pledgeID:'', //登记编号
                pledgee:'',  //质权人
                pledgor:'',  //出质人
                pledgeCompanyName:'', //出质股权标的企业
                pledgedNumber:'', //出质股权数额
                pledgeName:'', //出质名称
                pledgeTime:'', //登记日期
                investmentTime: dayjs().format('YYYY-MM-DD'),
                cancellationTime: dayjs().format('YYYY-MM-DD'),
                remark:'', //备注
                pledgeStatus:'有效', //质押状态
                xid:'0',
            },
            status: {
                investmentTime: new Date(),
                cancellationTime: new Date(),
                minDate: new Date(1970, 0, 1),
                maxDate: new Date(2099, 12, 31),
            },
            tag:{
                showOperationZone:true,
                showPledgeStatus:false,
                showCompanyName:false,
                showPledgee:false,
                showPledgor:false,
                showPledgeCompanyName:false,
                showInvestmentTime:false,
                showCancellationTime:false,
                showKey: '',
            },
            pledgeeColumns:[],
            pledgorColumns:[],
            pledgeCompanyNameColumns:[],
            companyNameColumns:[],
        });

        onMounted(() => {
            window.addEventListener("scroll", pageScroll);
        });

        //返回上一页函数
        const returnBack = (back = '/company') => {
            back = $route.query.back ? $route.query.back : '/company';
            $router.push(back);
        };

        //执行搜索
        const searching = () => {
            console.log('searching');
        };

        //页面滚动
        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ? (headerActive.value = true) : (headerActive.value = false);
        };

        //设置资质类型
        const companyQType = (config) => {
            state.tag.showQualificationType = false;
            state.qualification.qualificationType = config.selectedOptions.map((option) => option.text).join('/');
        };

        //设置资质等级
        const companyQLevel = (config) => {
            state.tag.showQualificationLevel = false;
            state.qualification.qualificationLevel = config.selectedOptions.map((option) => option.text).join('/');
        };

        //设置资质状态
        const confirmPStatus = (config) => {
            state.tag.showPledgeStatus = false;
            state.pledge.pledgeStatus = config.selectedOptions.map((option) => option.text).join('/');
        };

        //确认操作
        const commonConfirm = async (index, value, key, item, type = '') => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog, type);
        };

        //公司类型确认操作
        const companyTypeConfirm = async (value, index) => {
            await Betools.manage.commonDataConfirm(index, value, 'companyType', state.qualification, state, Dialog, '');
        };

        //日期选择确认
        const clickDatePicker = async (name, tname, status = true) => {
            state.tag[name] = status;
            state.pledge[tname] = dayjs(state.status[tname]).format('YYYY-MM-DD');
        };

        //通用搜索
        const commonSearch = async (data, value, key, fieldKey, type = 'user') => {
            await Betools.manage.commonDataSearch(data, value, key, fieldKey, state, type);
        };

        //取消提交录入申请函数
        const cancel = async() => {
            await Betools.manage.cancelAndBack(Dialog , returnBack , '取消录入质押申请？');
        };

        //提交录入变更记录申请确认函数
        const confirm = async(result = null , elem = null , nodes = []) => {
            //验证信息是否填写完整

            delete state.pledge.company;
            state.pledge.id = Betools.tools.queryUniqueID(); //构建提交Node
            result = await Betools.manage.postTableData('bs_company_flow_pledge', state.pledge); //提交变更信息
            Toast.success('提交录入质押申请成功！');//提示用户操作成功
            state.tag.showOperationZone = false;
        };

        return {
            active,
            state,
            returnBack,
            searching,
            headerActive,
            pageScroll,
            clickDatePicker,
            confirmPStatus,
            commonSearch,
            commonConfirm,
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
