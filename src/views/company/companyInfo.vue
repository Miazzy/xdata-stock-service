<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="公司信息" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" v-show="state.step == 'one' " style="">

            <div class="content">
                <div class="content-block">
                    <div class="company-name">
                        <h1 style="font-size:15px">{{state.item.company}}
                            <span class="ntag text-success">{{state.item.registrationStatus}}</span> </h1>
                    </div>
                    <div class="oper-warp"> <a href="#" class="text-primary oper">{{state.item.legalRepresentative}}</a> <span class="oper-desc">
                            法定代表人
                        </span> </div>
                    <div class="address">
                        {{state.item.registeredAddress}}
                    </div>
                    <div style="font-size: 12px;color:#666; padding-bottom: 15px; margin-left: 10px;margin-right: 10px;">
                        简介：{{state.item.brief_info}}
                    </div>
                </div>
                <div class="tab-content">
                    <div id="base" class="content-block">
                        <div class="block-title">
                            工商信息
                            <div onclick="collapse(this)" class="darrow"></div>
                        </div>
                        <div class="basic-wrap">
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="pull-left">
                                                <div class="d">法定代表人</div>
                                                <div class="v"> <a href="#" class="text-primary ">{{state.item.legalRepresentative}}</a> </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">成立日期</div>
                                            <div class="v"> {{state.item.establish_time}} </div>
                                        </td>
                                        <td>
                                            <div class="d">登记状态</div>
                                            <div class="v">{{state.item.registrationStatus}}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">注册资本</div>
                                            <div class="v"> {{ state.item.registeredCapital }} 万元人民币 </div>
                                        </td>
                                        <td>
                                            <div class="d">实缴资本</div>
                                            <div class="v"> {{ state.item.paidCapital }} 万元人民币 </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">企业类型</div>
                                            <div class="v"> {{ state.item.companyType }} </div>
                                        </td>
                                        <td colspan="1">
                                            <div class="d">人员规模</div>
                                            <div class="v"> - </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">统一社会信用代码</div>
                                            <div class="v"> {{ state.item.licenseNumber }} </div>
                                        </td>
                                        <td>
                                            <div class="d">纳税人识别号</div>
                                            <div class="v"> {{ state.item.taxpayer_id }} </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">工商注册号</div>
                                            <div class="v"> {{ state.item.regist_number }} </div>
                                        </td>
                                        <td>
                                            <div class="d">组织机构代码</div>
                                            <div class="v"> {{ state.item.organ_code }} </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">英文名</div>
                                            <div class="v">  {{ state.item.companyNameEn }} </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">所属行业</div>
                                            <div class="v"> {{ state.item.industryName }} </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">经营范围</div>
                                            <div class="v"> {{ state.item.businessScope }} </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">企业地址</div>
                                            <div class="v"> {{ state.item.registeredAddress }} </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">营业期限</div>
                                            <div class="v"> {{state.item.establish_time}} 至 {{state.item.businessTerm}} </div>
                                        </td>
                                        <td>
                                            <div class="d">核准日期</div>
                                            <div class="v"> {{state.item.examine_date}} </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">登记机关</div>
                                            <div class="v"> {{ state.item.regist_authority }} </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="partners" class="content-block">
                        <div class="block-title">
                            股东信息
                            <div onclick="collapse(this)" class="darrow"></div>
                        </div>
                        <template :key="item.id" v-for="(item,index) in state.stockids" >
                        <div v-if="state.stock['shareholder' + index] != '' " style="border-bottom:1px solid #fafafa;">
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td colspan="3">
                                            <div class="cop-td">
                                                <div class="head" style="margin-top:0.170rem;"> <span class="" style="margin-top:0.25rem;" >{{ state.stock['shareholder' + index] }}</span> </div>
                                                <div class="ct">
                                                    <div class="m-t-xs ptag"> <span class="ntag sm text-success m-r-xs tooltip-br">股东</span> </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">持股比例</div>
                                            <div class="v"> {{ parseFloat(state.stock['ratioDetail' + index]).toFixed(2) }}%</div>
                                        </td>
                                        <td>
                                            <div class="d">认缴出资额</div>
                                            <div class="v"> {{ parseFloat(state.stock['ratioDetail' + index] * state.item.registeredCapital / 100).toFixed(2) }}万元 <br> </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </template>
                    </div>
                    <div id="guquan" class="content-block" style="display:none;">
                        <div class="block-title">
                            股权结构
                            <div onclick="collapse(this)" class="darrow"></div>
                        </div>
                        <div>
                            <div class="mb"></div> <a id="appBtn2" href="javascript:;" onclick="openApp()" class="more-toapp">

                            </a>
                        </div>
                    </div>
                    <div id="employees" class="content-block">
                        <div class="block-title">
                            主要人员
                            <div onclick="collapse(this)" class="darrow"></div>
                        </div>
                        <div>
                            <table class="info-table" v-if="state.director.directorChairman != '--' ">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-1" first-letter="董"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="#" class="text-primary ">{{ state.director.directorChairman }}</a> </div>
                                                    <div class="vl">董事长</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="info-table" v-if="state.director.director != '--' ">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-2" first-letter="董"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="#" class="text-primary ">{{ state.director.director }}</a> </div>
                                                    <div class="vl">董事</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="info-table" v-if="state.director.directorExecutive != '--' ">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-3" first-letter="执"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="#" class="text-primary ">{{ state.director.directorExecutive }}</a> </div>
                                                    <div class="vl">执行董事</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="info-table" v-if="state.director.manager != '--' ">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-4" first-letter="总"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="#" class="text-primary ">{{ state.director.manager }}</a> </div>
                                                    <div class="vl">总经理</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="info-table" v-if="state.director.supervisorChairman != '--' ">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-5" first-letter="监"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="#" class="text-primary ">{{ state.director.supervisorChairman }}</a> </div>
                                                    <div class="vl">监事会主席</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="info-table" v-if="state.director.supervisor != '--' ">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-6" first-letter="监"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="#" class="text-primary ">{{ state.director.supervisor }}</a> </div>
                                                    <div class="vl">监事</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div id="samelist" class="content-block">
                        <div class="block-title">
                            同地区同行业企业
                            <div onclick="collapse(this)" class="darrow"></div>
                        </div>
                        <div id="company-info-content" > 
                            <template :key="item.id" v-for=" item in state.occupation " >
                            <a class="info-cell" href="#">
                                <div class="img-row">
                                    <div class="img"> 
                                        <div class="list-item-logo">
                                            <span class="boss-letter color-1" :first-letter="item.companyName.slice(0,4)" ></span>
                                        </div>
                                    </div>
                                    <div class="ct">
                                        <div class="name">
                                            {{ item.companyName }}
                                            <object class="v"> <a href="#" class="text-primary ">{{ item.legalRepresentative }}</a> </object> </div>
                                    </div>
                                    <div class="ntag text-success">{{ item.registrationStatus }}</div>
                                </div>
                                <div class="darrow"></div>
                            </a> 
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</keep-alive>
</template>

<script>
import {
    Dialog
} from 'vant';
import commonSelect from '@/components/select/commonSelect';
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

export default {
    name: "companyInfo",
    components: {
        commonSelect,
    },
    data() {
        return {};
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
            companyTypeColumns: ['有限责任公司', '股份有限公司'],
            industryColumns: ['房地产行业', '金融行业', '物业管理', '医疗健康产业', '商业管理', '批发和零售业', '建筑业', '租赁和商务服务业'],
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
            shareholderColumns: [],
            shareholder0Columns: [],
            shareholder1Columns: [],
            shareholder2Columns: [],
            shareholder3Columns: [],
            shareholder4Columns: [],
            shareholder5Columns: [],
            shareholder6Columns: [],
            shareholder7Columns: [],
            shareholder8Columns: [],
            shareholder9Columns: [],
            shareholder10Columns: [],
            shareholder11Columns: [],
            shareholder12Columns: [],
            shareholder13Columns: [],
            shareholder14Columns: [],
            shareholder15Columns: [],
            shareholder16Columns: [],
            shareholder17Columns: [],
            shareholder18Columns: [],
            shareholder19Columns: [],
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
                id:'',
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
            stockids:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            stock: {
                shareholder0: '', //股东
                ratioDetail0: 0, //占股明细
                shareholder1: '', //股东
                ratioDetail1: 0, //占股明细
                shareholder2: '', //股东
                ratioDetail2: 0, //占股明细
                shareholder3: '', //股东
                ratioDetail3: 0, //占股明细
                shareholder4: '', //股东
                ratioDetail4: 0, //占股明细
                shareholder5: '', //股东
                ratioDetail5: 0, //占股明细
                shareholder6: '', //股东
                ratioDetail6: 0, //占股明细
                shareholder7: '', //股东
                ratioDetail7: 0, //占股明细
                shareholder8: '', //股东
                ratioDetail8: 0, //占股明细
                shareholder9: '', //股东
                ratioDetail9: 0, //占股明细
                shareholder10: '', //股东
                ratioDetail10: 0, //占股明细
                shareholder11: '', //股东
                ratioDetail11: 0, //占股明细
                shareholder12: '', //股东
                ratioDetail12: 0, //占股明细
                shareholder13: '', //股东
                ratioDetail13: 0, //占股明细
                shareholder14: '', //股东
                ratioDetail14: 0, //占股明细
                shareholder15: '', //股东
                ratioDetail15: 0, //占股明细
                shareholder16: '', //股东
                ratioDetail16: 0, //占股明细
                shareholder17: '', //股东
                ratioDetail17: 0, //占股明细
                shareholder18: '', //股东
                ratioDetail18: 0, //占股明细
                shareholder19: '', //股东
                ratioDetail19: 0, //占股明细
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
                showShareholder: false,
                showShareholder0: false,
                showShareholder1: false,
                showShareholder2: false,
                showShareholder3: false,
                showShareholder4: false,
                showShareholder5: false,
                showShareholder6: false,
                showShareholder7: false,
                showShareholder8: false,
                showShareholder9: false,
                showShareholder10: false,
                showShareholder11: false,
                showShareholder12: false,
                showShareholder13: false,
                showShareholder14: false,
                showShareholder15: false,
                showShareholder16: false,
                showShareholder17: false,
                showShareholder18: false,
                showShareholder19: false,
                showKey: '',
            },
            type: {
                supervisor: '700',
                manager: '500',
                supervisorChairman: '600',
                directorChairman: '200',
                director: '300',
                directorExecutive: '400',
            },
            position: {
                supervisor: '监事',
                manager: '总经理/经理',
                supervisorChairman: '监事会主席',
                directorChairman: '董事长',
                director: '董事',
                directorExecutive: '执行董事',
            },
            occupation:[],
            id:'',
            show: true,
            message: {},
            step: 'one',
        });

        onMounted(async () => {            
            state.geo.options = await Betools.manage.queryCity();
            state.id = state.item.id = await Betools.tools.queryUrlString('id','search');
            const element = await Betools.manage.queryCompanyIndustryInfo('bs_company_flow_data', state.id , state);
            const zone = element.item.companyCode;
            const industry = element.item.industryName;
            state.occupation = await Betools.manage.queryTableData('bs_company_flow_data',`_where=(companyCode,eq,${zone})~and(industryName,eq,${industry})~and(id,ne,${state.id})&_size=5`);
            Betools.manage.patchMainDataInfoInc(state).then(()=>{console.log(`更新法人信息_更新推送#主数据:`,JSON.stringify(state.item))});
            window.addEventListener("scroll", pageScroll);
        });

        //返回上一页函数
        const returnBack = (back = '/company') => {
            back = $route.query.back ? $route.query.back : '/company';
            $router.push(back);
        };

        //点击搜索函数
        const searching = () => {
            console.log('searching');
        };

        //页面滚动
        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ? (headerActive.value = true) : (headerActive.value = false);
        };

        return {
            active,
            state,
            returnBack,
            searching,
            headerActive,
            pageScroll,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
@import "../base/company.scss";
@import "../base/companyinfo.scss";
</style>
