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
                                <van-cell value="资质管理" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="填报日期" v-model="state.qualification.create_time" placeholder="请输入填报日期" readonly />

                                <!--公司名称-->
                                <common-select :showTag="state.tag.showCompanyName" :modelColumns="state.companyNameColumns" fieldName="companyName" :modelValue="state.qualification.companyName" :element="state.qualification" type="company" v-model="state.qualification.companyName" labelName="公司名称" placeholderName="请填写公司名称" @search="commonSearch" @confirm="commonConfirm" />

                                <van-field required :readonly="true" clickable clearable label="资质类型" v-model="state.qualification.qualificationType" placeholder="请选择资质类型" @click="state.tag.showQualificationType = true;" />
                                <van-cascader v-show="state.tag.showQualificationType" title="请选择资质类型" :options="state.cascader.typeOptions" @close="state.tag.showQualificationType = false" @finish="companyQType" />
                                
                                <van-field v-show="state.qualification.qualificationType!='--'" required :readonly="true" clickable clearable label="资质等级" v-model="state.qualification.qualificationLevel" placeholder="请选择资质类型" @click="state.tag.showQualificationLevel = true;" />
                                <van-cascader v-show="state.tag.showQualificationLevel && state.qualification.qualificationType!='--'" title="请选择资质等级" :options="state.cascader.levelOptions" @close="state.tag.showQualificationLevel = false" @finish="companyQLevel" />

                                <van-field v-show="state.qualification.qualificationType!='--'" required :readonly="false" clickable clearable label="资质编号" v-model="state.qualification.qualificationNumber" placeholder="请选择资质编号" />
                                <van-field v-show="state.qualification.qualificationType!='--'" required :readonly="true" clickable clearable label="资质证有效期" v-model="state.qualification.qualificationPeriod" placeholder="请选择资质证有效期" />

                                <van-field v-show="state.qualification.qualificationType!='--'" required :readonly="true" clickable clearable label="开始时间" v-model="state.qualification.validityPeriod1" placeholder="请选择资质证有效开始时间" @click="clickDatePicker('showValidityPeriod1' , 'validityPeriod1' , true);" />
                                <nut-popup position="bottom" closeable close-icon-position="top-left" :style="{ height: '40%' }" v-model:visible="state.tag.showValidityPeriod1">
                                    <van-datetime-picker v-show="state.tag.showValidityPeriod1" v-model="state.status.validityPeriod1" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showValidityPeriod1' , 'validityPeriod1' , false);" @confirm="clickDatePicker('showValidityPeriod1' , 'validityPeriod1' , false);" />
                                </nut-popup>

                                <van-field v-show="state.qualification.qualificationType!='--'" required :readonly="true" clickable clearable label="结束时间" v-model="state.qualification.validityPeriod2" placeholder="请选择资质证有效结束时间" @click="clickDatePicker('showValidityPeriod2' , 'validityPeriod2' , true);" />
                                <nut-popup position="bottom" closeable close-icon-position="top-left" :style="{ height: '40%' }" v-model:visible="state.tag.showValidityPeriod2">
                                    <van-datetime-picker v-show="state.tag.showValidityPeriod2" v-model="state.status.validityPeriod2" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showValidityPeriod2' , 'validityPeriod2' , false);" @confirm="clickDatePicker('showValidityPeriod2' , 'validityPeriod2' , false);" />
                                </nut-popup>

                                <van-field v-show="state.qualification.qualificationType!='--'" required :readonly="true" clickable clearable label="资质状态" v-model="state.qualification.qualificationStatus" placeholder="请选择资质状态" @click="state.tag.showQualificationStatus = true;" />
                                <van-cascader v-show="state.tag.showQualificationStatus && state.qualification.qualificationType!='--'" title="请选择资质状态" :options="state.cascader.statusOptions" @close="state.tag.showQualificationStatus = false" @finish="companyQStatus" />
                                
                                <van-field v-show="state.qualification.qualificationType!='--' && state.qualification.qualificationStatus == '注销' " required :readonly="false" clickable clearable label="注销原因" rows="5" autosize type="textarea" v-model="state.qualification.cancellationReason" placeholder="请选择注销原因" />
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
import { Toast} from "@nutui/nutui";
import { Dialog } from 'vant';
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
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
            radio: {
                companyName: '',
            },
            item:{
                create_time: dayjs().format('YYYY-MM-DD'),
                companyName:'',
            },
            qualification:{
                id:'',
                create_time: dayjs().format('YYYY-MM-DD'),
                companyName:'',
                qualificationType :'房地产开发', // '资质类型',
                qualificationLevel : '一级资质', //  '资质等级',
                qualificationNumber : '', //'资质编号',
                qualificationPeriod: dayjs().format('YYYY-MM-DD') + ' 至 ' + dayjs().format('YYYY-MM-DD'), // '资质证有效期',
                qualificationStatus :'有效', // '资质状态',
                validityPeriod1: dayjs().format('YYYY-MM-DD'),
                validityPeriod2: dayjs().format('YYYY-MM-DD'),
                cancellationReason:'', //     
            },
            status: {
                validityPeriod1: new Date(),
                validityPeriod2: new Date(),
                minDate: new Date(1970, 0, 1),
                maxDate: new Date(2099, 12, 31),
            },
            tag:{
                showOperationZone:true,
                showCompanyName:false,
                showValidityPeriod1:false,
                showValidityPeriod2:false,
                showQualificationType:false,
                showQualificationLevel:false,
                showQualificationStatus:false,
                showKey: '',
            },
            companyNameColumns:[],
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

        //执行搜索
        const searching = () => {
            console.log('searching');
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
        const companyQStatus = (config) => {
            state.tag.showQualificationStatus = false;
            state.qualification.qualificationStatus = config.selectedOptions.map((option) => option.text).join('/');
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
            state.qualification[tname] = dayjs(state.status[tname]).format('YYYY-MM-DD');
            state.qualification.qualificationPeriod = state.qualification.validityPeriod1 + ' 至 ' + state.qualification.validityPeriod2;
        };

        //通用搜索
        const commonSearch = async (data, value, key, fieldKey, type = 'user') => {
            await Betools.manage.commonDataSearch(data, value, key, fieldKey, state, type);
        };

        //页面滚动
        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ? (headerActive.value = true) : (headerActive.value = false);
        };

        //取消提交录入申请函数
        const cancel = async() => {
            await Betools.manage.cancelAndBack(Dialog , returnBack , '取消录入资质申请？');
        };

        //提交录入变更记录申请确认函数
        const confirm = async(result = null , elem = null , nodes = []) => {
            delete state.qualification.company;
            state.qualification.id = Betools.tools.queryUniqueID(); //构建提交Node
            result = await Betools.manage.postTableData('bs_company_flow_qualification', state.qualification); //提交变更信息
            Toast.success('提交录入资质申请成功！');//提示用户操作成功
            state.tag.showOperationZone = false;
        };

        return {
            active,
            state,
            returnBack,
            searching,
            headerActive,
            pageScroll,
            companyQType,
            companyQLevel,
            companyQStatus,
            commonConfirm,
            companyTypeConfirm,
            clickDatePicker,
            commonSearch,
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
