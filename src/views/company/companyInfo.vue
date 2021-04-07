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
                    <div class="oper-warp"> <a href="/pl/prcff5954c49da16ce2f85860c129233.html" class="text-primary oper">{{state.item.legalRepresentative}}</a> <span class="oper-desc">
                            法定代表人
                        </span> </div>
                    <div class="address">
                        {{state.item.registeredAddress}}
                    </div>
                    <div style="font-size: 12px;color:#666; padding-bottom: 15px; margin-left: 10px;margin-right: 10px;">
                        {{state.item.brief_info}}
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
                                                <div class="v"> <a href="/pl/prcff5954c49da16ce2f85860c129233.html" class="text-primary ">{{state.item.legalRepresentative}}</a> </div>
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
                                            <div class="v">有限责任公司（自然人独资）</div>
                                        </td>
                                        <td>
                                            <div class="d">参保人数</div>
                                            <div class="v">-</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">人员规模</div>
                                            <div class="v">-</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">统一社会信用代码</div>
                                            <div class="v">91440300MA5GNY375L</div>
                                        </td>
                                        <td>
                                            <div class="d">纳税人识别号</div>
                                            <div class="v">91440300MA5GNY375L</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">工商注册号</div>
                                            <div class="v">440300213305773</div>
                                        </td>
                                        <td>
                                            <div class="d">组织机构代码</div>
                                            <div class="v">MA5GNY37-5</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">进出口企业代码</div>
                                            <div class="v">-</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">英文名</div>
                                            <div class="v">-</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">曾用名</div>
                                            <div class="v">
                                                -
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">所属行业</div>
                                            <div class="v">居民服务、修理和其他服务业</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">经营范围</div>
                                            <div class="v">生物技术开发；除“四害”消毒杀虫服务；电子产品、家居环保设备的研发与销售；提供清洁服务；环境保护及环境检测技术咨询；环境保护工程的设计与施工；室内环境污染处理工程的施工；室内空气净化产品的技术开发与销售；生物技术、病媒生物防止、白蚁防治技术开发与技术咨询；园林绿化用品的销售；厨房抽油烟设施上门安装、清洗、保养、维护、维修；国内贸易；货物及技术进出口。园林绿化工程的设计与施工；室内、车内空气中甲醛等有害物质的质量检测及治理；园林绿化养护服务。无</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">经营方式</div>
                                            <div class="v">-</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">企业地址</div>
                                            <div class="v">深圳市龙岗区龙城街道爱联社区爱南路639号颐安都会中央花园2期F座17-1号商铺</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">营业期限</div>
                                            <div class="v">2021-03-31 至 -</div>
                                        </td>
                                        <td>
                                            <div class="d">核准日期</div>
                                            <div class="v">2021-03-31</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="d">登记机关</div>
                                            <div class="v">深圳市市场监督管理局</div>
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
                        <div>
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-2" first-letter="晋"></span> </div>
                                                <div class="ct">
                                                    <div class="m-t-xs ptag"> <span class="ntag sm text-success m-r-xs tooltip-br">股东</span> </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">持股比例</div>
                                            <div class="v">100%</div>
                                        </td>
                                        <td>
                                            <div class="d">股东类型</div>
                                            <div class="v">自然人股东</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d">认缴出资额</div>
                                            <div class="v"> 500万元<br> </div>
                                        </td>
                                        <td>
                                            <div class="d">认缴出资日期</div>
                                            <div class="v"> - </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                    <div id="syr" class="content-block" style="display:none;">
                        <div class="block-title">
                            最终受益人
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
                            <span class="block-num">2</span>
                            <div onclick="collapse(this)" class="darrow"></div>
                        </div>
                        <div>
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-2" first-letter="晋"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="/pl/prcff5954c49da16ce2f85860c129233.html" class="text-primary ">晋升</a> </div>
                                                    <div class="vl">总经理,执行董事</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <div class="cop-td">
                                                <div class="head"> <span class="letter color-6" first-letter="寇"></span> </div>
                                                <div class="ct">
                                                    <div class="name"> <a href="/pl/pre4783f0a547eaddcfe615225ce8bef.html" class="text-primary ">寇红伟</a> </div>
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
                        <div> <a class="info-cell" href="/firm/2b12c64ed7dda3749394cc5f53f2d0f0.html">
                                <div class="img-row">
                                    <div class="img"> <img src="https://qccdata.qichacha.com/AutoImage/2b12c64ed7dda3749394cc5f53f2d0f0.jpg" onerror="this.src='https://co-image.qichacha.com/CompanyImage/default.jpg'"> </div>
                                    <div class="ct">
                                        <div class="name">
                                            深圳市拓星企业管理咨询有限公司
                                            <object class="v"> <a href="/pl/pr4b772e49e06e19720c2b9d8e3f401e.html" class="text-primary ">牛艳霞</a> </object> </div>
                                    </div>
                                    <div class="ntag text-success">存续</div>
                                </div>
                                <div class="darrow"></div>
                            </a> <a class="info-cell" href="/firm/f9d6b923c61886c7f674bd6f828ea4e6.html">
                                <div class="img-row">
                                    <div class="img"> <img src="https://qccdata.qichacha.com/AutoImage/f9d6b923c61886c7f674bd6f828ea4e6.jpg" onerror="this.src='https://co-image.qichacha.com/CompanyImage/default.jpg'"> </div>
                                    <div class="ct">
                                        <div class="name">
                                            深圳敏潮管理合伙企业（有限合伙）
                                            <object class="v"> <a href="/pl/p73df1100c0a480e4c60b98fa62570b8.html" class="text-primary ">寿亦华</a> </object> </div>
                                    </div>
                                    <div class="ntag text-success">存续</div>
                                </div>
                                <div class="darrow"></div>
                            </a> <a class="info-cell" href="/firm/2b0ad1f9d3841fd7a1783f356be3cddf.html">
                                <div class="img-row">
                                    <div class="img"> <img src="https://qccdata.qichacha.com/AutoImage/2b0ad1f9d3841fd7a1783f356be3cddf.jpg" onerror="this.src='https://co-image.qichacha.com/CompanyImage/default.jpg'"> </div>
                                    <div class="ct">
                                        <div class="name">
                                            梦纯实业（深圳）有限公司
                                            <object class="v"> <a href="/pl/pr02aa5d91e2d3e8c328febf5ae4a9f5.html" class="text-primary ">李新良</a> </object> </div>
                                    </div>
                                    <div class="ntag text-success">存续</div>
                                </div>
                                <div class="darrow"></div>
                            </a> </div>
                    </div>
                    <div class="content-block" style="display: none;">
                        <div class="module-row border-bottom">
                            <div class="module-col-4 border-right"> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_branch_off.png" title="暂无信息"> </div>
                                <div class="module-name">分支机构</div>
                            </div>
                            <div class="module-col-4 border-right"> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_invest_off.png" title="暂无信息"> </div>
                                <div class="module-name">对外投资</div>
                            </div>
                            <div class="module-col-4 border-right"> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_annual_off.png" title="暂无信息"> </div>
                                <div class="module-name">企业年报</div>
                            </div>
                            <div class="module-col-4"> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_dishonest_off.png" title="暂无信息"> </div>
                                <div class="module-name">失信信息</div>
                            </div>
                        </div>
                        <div class="module-row">
                            <div class="module-col-4 border-right"> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_executed_off.png" title="暂无信息"> </div>
                                <div class="module-name">被执行人</div>
                            </div>
                            <div class="module-col-4 border-right"> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_brand_off.png" title="暂无信息"> </div>
                                <div class="module-name">商标信息</div>
                            </div>
                            <div class="module-col-4 border-right"> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_patent_off.png" title="暂无信息"> </div>
                                <div class="module-name">专利信息</div>
                            </div>
                            <div class="module-col-4" onclick=""> <span class="module-num">0</span>
                                <div class="module-img"> <img src="/material/theme/mobile/img/wxa-service/btn_judge_off.png" title="暂无信息"> </div>
                                <div class="module-name">裁判文书</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-button" style="text-align:center;margin-top:0.75rem;margin-bottom:0.75rem;display:none;">
            <van-button v-show="state.step == 'one' " plain hairline type="info" style="width:37.5%;" @click="cancel">取消</van-button>
            <van-button v-show="state.step == 'one' " plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="confirm">确认</van-button>
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
            id:'',
            show: true,
            message: {},
            step: 'one',
        });

        onMounted(async () => {            
            state.geo.options = await Betools.manage.queryCity();
            state.id = await Betools.tools.queryUrlString('id','search');
            const list = await Betools.manage.queryTableData('bs_company_flow_data',`_where=(id,eq,${state.id})`);
            const element = list[0];
            const { directorChairman, director, directorExecutive, manager, supervisorChairman, supervisor } = element;
            const { shareholder0, ratioDetail0, shareholder1, ratioDetail1, shareholder2, ratioDetail2, shareholder3, ratioDetail3, shareholder4, ratioDetail4, shareholder5, ratioDetail5, shareholder6, ratioDetail6, shareholder7, ratioDetail7, shareholder8, ratioDetail8, shareholder9, ratioDetail9, shareholder10, ratioDetail10, shareholder11, ratioDetail11, shareholder12, ratioDetail12, shareholder13, ratioDetail13, shareholder14, ratioDetail14, shareholder15, ratioDetail15, shareholder16, ratioDetail16, shareholder17, ratioDetail17, shareholder18, ratioDetail18, shareholder19, ratioDetail19, } = element;
            state.director = { directorChairman, director, directorExecutive, manager, supervisorChairman, supervisor };
            state.stock = { shareholder0, ratioDetail0, shareholder1, ratioDetail1, shareholder2, ratioDetail2, shareholder3, ratioDetail3, shareholder4, ratioDetail4, shareholder5, ratioDetail5, shareholder6, ratioDetail6, shareholder7, ratioDetail7, shareholder8, ratioDetail8, shareholder9, ratioDetail9, shareholder10, ratioDetail10, shareholder11, ratioDetail11, shareholder12, ratioDetail12, shareholder13, ratioDetail13, shareholder14, ratioDetail14, shareholder15, ratioDetail15, shareholder16, ratioDetail16, shareholder17, ratioDetail17, shareholder18, ratioDetail18, shareholder19, ratioDetail19, };
            state.item = element;
            state.item.create_time = dayjs(element.create_time).format('YYYY-MM-DD');
            state.item.paidTime = dayjs(element.paidTime).format('YYYY-MM-DD');
            state.item.paidTureTime = dayjs(element.paidTureTime).format('YYYY-MM-DD');
            state.item.businessTerm = dayjs(element.businessTerm).format('YYYY-MM-DD');
            state.item.establish_time = dayjs(element.establish_time).format('YYYY-MM-DD');
            state.item.examine_date = dayjs(element.examine_date).format('YYYY-MM-DD');
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

        const companyCode = (config) => {
            state.geo.show = false;
            state.item.companyCode = config.selectedOptions.map((option) => option.text).join('/');
        };

        const commonConfirm = async (index, value, key, item, type = '') => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog, type);
        };

        const companyTypeConfirm = async (value, index) => {
            await Betools.manage.commonDataConfirm(index, value, 'companyType', state.item, state, Dialog, '');
        };

        const commonSearch = async (data, value, key, fieldKey, type = 'user') => {
            await Betools.manage.commonDataSearch(data, value, key, fieldKey, state, type);
        };

        const validField = (fieldName, item) => {
            state.message[fieldName] = Betools.tools.isNull(item[fieldName]) ? `未填写${fieldName}信息，请填写后在进行提交申请！` : '';
            return Betools.tools.isNull(state.message[fieldName]);
        };

        const clickDatePicker = async (name, tname, status = true) => {
            state.tag[name] = status;
            state.item[tname] = dayjs(state.status[tname]).format('YYYY-MM-DD');
        };

        const checkValid = (element) => {
            const keys = Object.keys(element);
            const invalidKey = keys.find(key => {
                return !validField(key, element);
            });
            return invalidKey;
        }

        //页面滚动
        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ? (headerActive.value = true) : (headerActive.value = false);
        };

        //取消函数
        const cancel = async () => {
            await Betools.manage.cancelAndBack(Dialog, returnBack, '取消设立公司申请？');
        }

        //确认函数
        const confirm = async (elem, result, validResult, response) => {
            await Betools.manage.confirmCompanyAdd(elem, result, validResult, response, state, Dialog);
        }

        //下一步函数
        const nextstep = async () => {
            await Betools.manage.nextstepCompanyAdd(state, checkValid, Dialog, confirm);
        }

        //上一步函数
        const prestep = async () => {
            await Betools.manage.prestepCompanyAdd(state, cancel);
        }

        return {
            active,
            state,
            returnBack,
            searching,
            headerActive,
            pageScroll,
            nextstep,
            prestep,
            cancel,
            confirm,
            clickDatePicker,
            companyCode,
            companyTypeConfirm,
            commonConfirm,
            commonSearch,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
@import "../base/company.scss";
@import "../base/companyinfo.scss";
</style>
