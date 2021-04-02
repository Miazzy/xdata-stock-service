<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="录入工商信息" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
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
                            <van-col span="24" style="text-align: center;font-size:.475rem;">录入工商信息申请</van-col>
                        </van-row>
                    </div>

                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">

                    <van-cell-group>
                        <van-form>

                            <van-cell-group style="margin-top:10px;">

                                <van-cell value="基本信息" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="填报日期" v-model="state.item.create_time" placeholder="请输入登记日期" readonly />
                                <common-select :showTag="state.tag.showCompanyName" :modelColumns="state.companyNameColumns" fieldName="companyName" :modelValue="state.item.companyName" :element="state.item" type="company_ic" v-model="state.item.companyName" labelName="公司名称" placeholderName="请填写公司名称" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="公司简介" v-model="state.item.brief_info" rows="1" autosize type="textarea" placeholder="请输入公司简介" />
                                <van-field required :readonly="false" clickable clearable label="英文名称" v-model="state.item.companyNameEn" rows="1" autosize type="textarea" placeholder="请输入公司英文名称" />
                                <common-select :showTag="state.tag.showIndustryName" :modelColumns="state.industryColumns" fieldName="industryName" :modelValue="state.item.industry" :element="state.item" type="common" v-model="state.item.industry" labelName="所属行业" placeholderName="请选择所属行业" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="所属区域" v-model="state.item.companyCode" placeholder="请选择所属区域" @click="state.geo.show = true;" />
                                <van-cascader v-show="state.geo.show" v-model="state.geo.cascaderValue" title="请选择所在地区" :options="state.geo.options" @close="state.geo.show = false" @finish="companyCode" />
                                <common-select :showTag="state.tag.showRegistrationStatus" :modelColumns="state.registStatusColumns" fieldName="registrationStatus" :modelValue="state.item.registrationStatus" :element="state.item" type="common" v-model="state.item.registrationStatus" labelName="登记状态" placeholderName="请选择登记状态" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field v-show="state.item.registrationStatus == '注销' " required readonly clickable clearable label="注销时间" v-model="state.item.cancellationTime" placeholder="请选择注销时间" @click="clickDatePicker('showCancellationTime' , 'cancellationTime' , true);" />
                                <van-datetime-picker v-show="state.tag.showCancellationTime" v-model="state.status.cancellationTime" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" @confirm="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" />
                                <van-field required :readonly="false" clickable clearable label="成立日期" v-model="state.item.establish_time" placeholder="请选择营业期限" @click="clickDatePicker('showEstablishTime' , 'establish_time' , true);" />
                                <van-datetime-picker v-show="state.tag.showEstablishTime" v-model="state.status.establish_time" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showEstablishTime' , 'establish_time' , false);" @confirm="clickDatePicker('showEstablishTime' , 'establish_time' , false);" />
                                <van-field required :readonly="false" clickable clearable label="核准日期" v-model="state.item.examine_date" placeholder="请选择营业期限" @click="clickDatePicker('showExamineDate' , 'examine_date' , true);" />
                                <van-datetime-picker v-show="state.tag.showExamineDate" v-model="state.status.examine_date" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showExamineDate' , 'examine_date' , false);" @confirm="clickDatePicker('showExamineDate' , 'examine_date' , false);" />
                                <van-field required :readonly="false" clickable clearable label="营业执照" v-model="state.item.licenseNumber" rows="1" autosize type="textarea" placeholder="请输入营业执照注册号" />
                                <van-field required :readonly="false" clickable clearable label="纳税人识别号" v-model="state.item.taxpayer_id" rows="1" autosize type="textarea" placeholder="请输入纳税人识别号" />
                                <van-field required :readonly="false" clickable clearable label="工商注册号" v-model="state.item.regist_number" rows="1" autosize type="textarea" placeholder="请输入工商注册号" />
                                <van-field required :readonly="false" clickable clearable label="组织机构代码" v-model="state.item.organ_code" rows="1" autosize type="textarea" placeholder="请输入组织机构代码" />
                                <van-field required :readonly="false" clickable clearable label="登记机关" v-model="state.item.regist_authority" rows="1" autosize type="textarea" placeholder="请输入登记机关" />
                                <van-field required :readonly="false" clickable clearable label="经营范围" v-model="state.item.businessScope" rows="1" autosize type="textarea" placeholder="请输入经营范围" />
                                <van-field required :readonly="false" clickable clearable label="注册地址" v-model="state.item.registeredAddress" rows="1" autosize type="textarea" placeholder="请输入注册地址" />
                                <van-field required :readonly="false" clickable clearable label="注册资本(万)" v-model="state.item.registeredCapital" type="number" placeholder="请输入注册资本(万)" />
                                <van-field required :readonly="false" clickable clearable label="实缴资本(万)" v-model="state.item.paidCapital" type="number" placeholder="请输入实缴资本(万)" />
                                <van-field required :readonly="false" clickable clearable label="认缴时间" v-model="state.item.paidTime" placeholder="请选择认缴时间" @click="clickDatePicker('showPaidTime' , 'paidTime' , true);" />
                                <van-datetime-picker v-show="state.tag.showPaidTime" v-model="state.status.paidTime" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showPaidTime' , 'paidTime' , false);" @confirm="clickDatePicker('showPaidTime' , 'paidTime' , false);" />
                                <van-field required :readonly="false" clickable clearable label="实缴时间" v-model="state.item.paidTureTime" placeholder="请选择实缴时间" @click="clickDatePicker('showPaidTureTime' , 'paidTureTime' , true);" />
                                <van-datetime-picker v-show="state.tag.showPaidTureTime" v-model="state.status.paidTureTime" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showPaidTureTime' , 'paidTureTime' , false);" @confirm="clickDatePicker('showPaidTureTime' , 'paidTureTime' , false);" />
                                <van-field required :readonly="false" clickable clearable label="营业期限" v-model="state.item.businessTerm" placeholder="请选择营业期限" @click="clickDatePicker('showBusinessTerm' , 'businessTerm' , true);" />
                                <van-datetime-picker v-show="state.tag.showBusinessTerm" v-model="state.status.businessTerm" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showBusinessTerm' , 'businessTerm' , false);" @confirm="clickDatePicker('showBusinessTerm' , 'businessTerm' , false);" />
                                <van-field required :readonly="false" clickable clearable label="公司类型" v-model="state.item.companyType" placeholder="请选择公司类型" @click="state.tag.showCompanyType = true;" />
                                <van-picker v-show="state.tag.showCompanyType" title="选择公司类型" show-toolbar :columns="state.companyTypeColumns" @confirm="companyTypeConfirm" @cancel="state.tag.showCompanyType = false;" />
                                <van-field required :readonly="false" clickable clearable label="设立原因" v-model="state.item.reason" rows="1" autosize type="textarea" placeholder="请输入设立原因" />
                                <van-field required :readonly="false" clickable clearable label="使用情况" v-model="state.item.usages" rows="1" autosize type="textarea" placeholder="请输入使用情况" />
                                <common-select :showTag="state.tag.showLegalRepresentative" :modelColumns="state.legalRepresentativeColumns" fieldName="legalRepresentative" :modelValue="state.item.legalRepresentative" :element="state.item" type="user" v-model="state.item.legalRepresentative" labelName="法定代表人" placeholderName="请输入法定代表人" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showSealKeeper" :modelColumns="state.sealKeeperColumns" fieldName="sealKeeper" :modelValue="state.item.sealKeeper" :element="state.item" type="user" v-model="state.item.sealKeeper" labelName="印章保管人" placeholderName="请输入印章保管人" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showLiaison" :modelColumns="state.liaisonColumns" fieldName="liaison" :modelValue="state.item.liaison" :element="state.item" type="user" v-model="state.item.liaison" labelName="备案联络员" placeholderName="请选择工商备案联络员" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showResponsiblePerson" :modelColumns="state.responsiblePersonColumns" fieldName="responsiblePerson" :modelValue="state.item.responsiblePerson" :element="state.item" type="user" v-model="state.item.responsiblePerson" labelName="财务负责人" placeholderName="请选择工商备案财务负责人" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="备注信息" v-model="state.item.remark" rows="1" autosize type="textarea" placeholder="请输入备注信息" />
                            </van-cell-group>

                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>       

        <div class="section-button" style="text-align:center;margin-top:0.75rem;margin-bottom:0.75rem;">
            <van-button plain hairline type="info" style="width:37.5%;" @click="cancel" >取消</van-button>
            <van-button plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="confirm" >确定</van-button>
        </div>

    </div>
</keep-alive>
</template>

<script>
import { Dialog, Popup } from 'vant';
import commonSelect from '@/components/select/commonSelect';
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "companyRec",
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
            geo: {
                show: false,
                address: '',
                fieldValue: '',
                cascaderValue: '',
                options: null,
            },
            companyNameColumns: [],
            companyTypeColumns: ['有限公司', '股份公司'],
            industryColumns: ['房地产行业', '金融行业', '物业管理', '医疗健康产业', '商业管理','批发和零售业','建筑业','租赁和商务服务业'],
            industryNameColumns: ['房地产行业', '金融行业', '物业管理', '医疗健康产业', '商业管理'],
            registStatusColumns: ['存续', '注销', '经营异常'],
            registrationStatusColumns: ['存续', '注销', '经营异常'],
            legalRepresentativeColumns: [],
            sealKeeperColumns: [],
            liaisonColumns: [],
            responsiblePersonColumns: [],
            directorChairmanColumns: [],
            directorColumns: [],
            directorExecutiveColumns: [],
            managerColumns: [], //总经理/经理
            supervisorChairmanColumns: [], //监事会主席
            supervisorColumns: [], //监事
            radio: {
                companyName: '',
                industryName: '',
                registStatus: '',
                registrationStatus: '',
                sealKeeper: '',
                liaison: '',
                responsiblePerson: '',
                directorChairman: '',
                director: '',
                directorExecutive: '',
                manager: '', //总经理/经理
                supervisorChairman: '', //监事会主席
                supervisor: '', //监事
                shareholder: '',
            },
            item: {
                create_time: dayjs().format('YYYY-MM-DD'),
                brief_info:'', //公司简介
                companyName: '', //公司名称
                companyNameEn: '', //英文名称
                taxpayer_id:'', //纳税人识别号
                regist_number:'', //工商注册号
                organ_code:'', //组织机构代码
                establish_time: dayjs().format('YYYY-MM-DD'), //成立日期
                examine_date: dayjs().format('YYYY-MM-DD'), //核准日期
                regist_authority:'', //登记机关
                industry: '', //所属行业
                companyCode: '', //所属区域
                registrationStatus: '', //登记状态
                cancellationTime: '2099-12-31', //注销时间
                licenseNumber: '', //营业执照
                businessScope: '', //经营范围
                registeredAddress: '', //注册地址
                registeredCapital: '', //注册资本(万)
                paidCapital: '', //实缴资本(万)
                paidTime: dayjs().format('YYYY-MM-DD'), //认缴时间
                paidTureTime: dayjs().format('YYYY-MM-DD'), //实缴时间
                businessTerm: dayjs().format('YYYY-MM-DD'), //营业期限
                companyType: '', //公司类型
                reason: '', //设立原因
                usages: '', //使用情况
                legalRepresentative: '', //法定代表人
                sealKeeper: '', //印章保管人
                liaison: '', //备案联络员
                responsiblePerson: '', //财务负责人
                remark: '', //备注信息
            },
            director: {
                directorChairman: '', //董事长
                director: '', //董事
                directorExecutive: '', //执行董事
                manager: '', //总经理/经理
                supervisorChairman: '', //监事会主席
                supervisor: '' //监事
            },
            stock: {
            },
            status: {
                cancellationTime: new Date(),
                paidTime: new Date(),
                paidTureTime: new Date(),
                businessTerm: new Date(),
                minDate: new Date(1970, 0, 1),
                maxDate: new Date(2099, 12, 31),
            },
            tag: {
                showPaidTime: false,
                showPaidTureTime: false,
                showBusinessTerm: false,
                showCancellationTime: false,
                showCompanyName: false,
                showIndustryName: false,
                showRegistStatus: false,
                showRegistrationStatus: false,
                showCompanyType: false,
                showLegalRepresentative: false,
                showSealKeeper: false,
                showResponsiblePerson: false,
                showDirectorChairman: false,
                showDirector: false,
                showDirectorExecutive: false,
                showManager: false, //总经理/经理
                showSupervisorChairman: false, //监事会主席
                showSupervisor: false, //监事
                showKey: '',
            },
            type:{
                supervisor:'700',
                manager:'500',
                supervisorChairman:'600',
                directorChairman:'200',
                director:'300',
                directorExecutive:'400',
            },
            position:{
                supervisor:'监事',
                manager:'总经理/经理',
                supervisorChairman:'监事会主席',
                directorChairman:'董事长',
                director:'董事',
                directorExecutive:'执行董事',
            },
            show: true,
            message: {},
            step: 'one',
        });

        onMounted(async () => {
            ctx.$eventBus.$emit("changeTag", 0);
            state.geo.options = await Betools.manage.queryCity();
            window.addEventListener("scroll", pageScroll);
        });

        const returnBack = () => {
            console.log('returnBack');
            $router.push("/company");
        };

        const searching = () => {
            console.log('searching');
        };

        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ?  (headerActive.value = true) :  (headerActive.value = false);
        };

        const commonConfirm = async (index, value, key, item, type='') => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog, type);
            //如果confirm了公司名称，需要带出公司的基础信息
            if(type == 'company_ic'){
                const element = state.companyNameColumns.find((item)=>{return item.companyName == value});
                state.item = element;
                state.item.create_time = dayjs(element.create_time).format('YYYY-MM-DD');
                state.item.paidTime =  dayjs(element.paidTime).format('YYYY-MM-DD');
                state.item.paidTureTime =  dayjs(element.paidTureTime).format('YYYY-MM-DD');
                state.item.businessTerm =  dayjs(element.businessTerm).format('YYYY-MM-DD');
                state.item.establish_time =  dayjs(element.establish_time).format('YYYY-MM-DD');
                state.item.examine_date =  dayjs(element.examine_date).format('YYYY-MM-DD');
            }
        };

        const commonSearch = async (data, value, key, fieldKey, type = 'user') => {
            await Betools.manage.commonDataSearch(data, value, key, fieldKey, state, type);
        };

        const cancel = async() => {
            Dialog.confirm({
                title: '取消录入工商信息申请？',
                message: '点击‘确认’后返回上一页',
            }).then(() => { // on confirm
                returnBack();
            });
        };

        const confirm = async(result = null , elem = null , nodes = []) => {

            //查询公司名称
            const company = state.companyNameColumns.find((item)=>{return item.name == state.item.companyName});

            //董监高对象数据
            elem = { id: company.id,  ...state.item, };
            const { id , companyName, companyNameEn , brief_info, industry, taxpayer_id , regist_number , organ_code , establish_time , examine_date , companyCode,   registrationStatus,   cancellationTime,    licenseNumber,   businessScope,   registeredAddress,  registeredCapital,   paidCapital,  paidTime,  paidTureTime,   businessTerm,   companyType,   reason,  usages,  legalRepresentative,   sealKeeper,  liaison,   responsiblePerson,  remark } = elem ;
            elem =  { id, companyName, companyNameEn, brief_info, industry, taxpayer_id, regist_number , organ_code , establish_time , examine_date , companyCode,   registrationStatus,   cancellationTime,    licenseNumber,   businessScope,   registeredAddress,  registeredCapital,   paidCapital,  paidTime,  paidTureTime,   businessTerm,   companyType,   reason,  usages,  legalRepresentative,   sealKeeper,  liaison,   responsiblePerson,  remark };

            //提交申请确认
            Dialog.confirm({
                title: '确认提交录入工商信息申请？',
                message: `点击‘确认’后提交录入工商信息申请！`,
            }).then(async () => { // on confirm

                //向表单提交form对象数据（工商信息）
                result = await Betools.manage.patchTableData('bs_company_flow_data', elem.id , elem);

                //如果提交修改数据成功，则新增id的bs_company_flow_manager数据数据
                if (result.protocol41 == true && result.affectedRows > 0 ) {
                    //提示用户操作成功，并返回上一页
                    await Dialog.confirm({ title: '提交录入工商信息申请成功！', });
                    await Betools.tools.sleep(300);
                    await returnBack();
                } else {
                    await Dialog.confirm({
                        title: `提交录入申请失败，请联系管理员进行处理，Error:[${JSON.stringify(result)}]！`,
                    });
                }

            });

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
