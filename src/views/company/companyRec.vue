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
                options: [{
                        text: '浙江省',
                        value: '浙江省',
                        children: [{
                            text: '杭州市',
                            value: '杭州市'
                        }],
                    },
                    {
                        text: '江苏省',
                        value: '江苏省',
                        children: [{
                            text: '南京市',
                            value: '南京市'
                        }],
                    },
                    {
                        text: '四川省',
                        value: '四川省',
                        children: [{
                            text: '成都市',
                            value: '成都市'
                        }],
                    },
                ],
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
                companyName: '', //公司名称
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

        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ?  (headerActive.value = true) :  (headerActive.value = false);
        };

        const commonConfirm = async (index, value, key, item, type='') => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog, type);
            //如果confirm了公司名称，需要带出公司的基础信息
            if(type == 'company_ic'){
                const element = state.companyNameColumns.find((item)=>{return item.companyName == value});
                const { directorChairman, director, directorExecutive, manager, supervisorChairman, supervisor } = element;
                state.director = { directorChairman, director, directorExecutive, manager, supervisorChairman, supervisor };
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
            elem = {
                id: company.id,
                ...state.item,
            };

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
