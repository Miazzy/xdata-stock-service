<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="录董监高" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
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
                            <van-col span="24" style="text-align: center;font-size:.475rem;">录入董监高申请</van-col>
                        </van-row>
                    </div>

                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">

                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="机构人员" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="录入日期" v-model="state.item.create_time" placeholder="请输入录入日期" readonly />
                                <common-select :showTag="state.tag.showCompanyName" :modelColumns="state.companyNameColumns" fieldName="companyName" :modelValue="state.item.companyName" :element="state.item" type="company_ic" v-model="state.item.companyName" labelName="公司名称" placeholderName="请填写公司名称" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showDirectorChairman" :modelColumns="state.directorChairmanColumns" fieldName="directorChairman" :modelValue="state.director.directorChairman" :element="state.director" type="user" v-model="state.director.directorChairman" labelName="董事长" placeholderName="请选择董事长" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showDirector" :modelColumns="state.directorColumns" fieldName="director" :modelValue="state.director.director" :element="state.director" type="user" v-model="state.director.director" labelName="董事" placeholderName="请选择董事" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showDirectorExecutive" :modelColumns="state.directorExecutiveColumns" fieldName="directorExecutive" :modelValue="state.director.directorExecutive" :element="state.director" type="user" v-model="state.director.directorExecutive" labelName="执行董事" placeholderName="请选择执行董事" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showManager" :modelColumns="state.managerColumns" fieldName="manager" :modelValue="state.director.manager" :element="state.director" type="user" v-model="state.director.manager" labelName="总经理/经理" placeholderName="请选择总经理/经理名单" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showSupervisorChairman" :modelColumns="state.supervisorChairmanColumns" fieldName="supervisorChairman" :modelValue="state.director.supervisorChairman" :element="state.director" type="user" v-model="state.director.supervisorChairman" labelName="监事会主席" placeholderName="请选择监事会主席" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showSupervisor" :modelColumns="state.supervisorColumns" fieldName="supervisor" :modelValue="state.director.supervisor" :element="state.director" type="user" v-model="state.director.supervisor" labelName="监事" placeholderName="请选择监事" @search="commonSearch" @confirm="commonConfirm" />
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
import { Dialog, Popup } from 'vant';
import commonSelect from '@/components/select/commonSelect';
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "base",
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
            companyNameColumns: [],
            directorChairmanColumns: [],
            directorColumns: [],
            directorExecutiveColumns: [],
            managerColumns: [], //总经理/经理
            supervisorChairmanColumns: [], //监事会主席
            supervisorColumns: [], //监事
            shareholderColumns: [],
            radio: {
                companyName: '',
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
            },
            director: {
                directorChairman: '', //董事长
                director: '', //董事
                directorExecutive: '', //执行董事
                manager: '', //总经理/经理
                supervisorChairman: '', //监事会主席
                supervisor: '' //监事
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
                showCompanyName: false,
                showDirectorChairman: false,
                showDirector: false,
                showDirectorExecutive: false,
                showManager: false, //总经理/经理
                showSupervisorChairman: false, //监事会主席
                showSupervisor: false, //监事
                showShareholder: false,
                showKey: '',
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
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            scrollTop > 100 ?
                (headerActive.value = true) :
                (headerActive.value = false);
        };

        const commonConfirm = async (index, value, key, item) => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog);
        };

        const commonSearch = async (data, value, key, fieldKey, type = 'user') => {
            debugger;
            await Betools.manage.commonDataSearch(data, value, key, fieldKey, state, type);
            const searchkey = value[key];
            if (type == 'company') {
                data = await Betools.manage.queryCompanyData(searchkey, []);
            } else if (type == 'user') {
                data = await Betools.manage.queryUserData(searchkey, []);
            } else if (type == 'company_ic') {
                data = await Betools.manage.queryCompanyICData(searchkey, []);
            }
            debugger;
            state.tag['show' + Betools.manage.prefixUpperCase(fieldKey)] = true;
            state.tag.showKey = key;
            state[fieldKey + 'Columns'] = data;
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
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
@import "../base/company.scss";
</style>
