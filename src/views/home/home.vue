<template>
<div class="home">
    <div>
        <div class="home-top" style="background: url(https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.3/src/assets/img/top_bg3.png) no-repeat; background-size: 100% 100%;">
            <div class="home-logo-wrap" style="padding-top:0.45rem;margin-bottom:0.65rem;"> 
                <span style="color:#fefefe;font-size:0.75rem;">
                    企业股权查询平台
                </span>
            </div>
            <form action="/search" id="V3_Index_S" style="margin-left:2.5%;margin-right:2.5%;text-algin:center;">
                <div class="home-input-outside-wrap" style="width:100%;">
                    <div class="home-input-wrap"> <input type="text" placeholder="请输入企业名称、人名、品牌、地址等" v-model="state.searchkey" id="searchkey" name="key" autocomplete="off"> </div>
                    <div class="home-search-icon" id="V3_Search_bt" style="cursor: pointer;" @click="companySearch(null,state.searchkey);"> <span class="btn">查一下</span> </div>
                </div>
            </form>
        </div>
        <div class="home-latestcompany" style="margin-bottom:50px;">
            <div class="home-middle-title-wrap">
                <div class="home-middle-title">企业注册信息 <a class="home-middle-title-more"  @click="redirectView('/companyquery?back=/index');"  >查看更多</a></div>
            </div>
            <div class="home-middle-content"> 
                <template v-for="(item , index) in state.companyColumns" :key="index">
                    <a href="#" class="a-decoration">
                        <div class="list-item">
                            <div class="list-item-top">
                                <div class="list-item-logo"></div>
                                <div class="list-item-name">
                                    {{ item.companyName }}
                                </div>
                            </div>
                            <div class="list-item-middle">
                                <div class="col-3">
                                    <div class="col-subtitle">
                                        法定代表人
                                    </div> <object class="col-title"> <a class="text-primary" href="/people?name=%E9%99%88%E6%B5%A9&amp;keyno=f06eabb81ca5c48435a99d643e2aeb6d">{{ item.legalRepresentative }} </a> </object>
                                </div>
                                <div class="col-3">
                                    <div class="col-subtitle">注册资金</div>
                                    <div class="col-title"> {{ item.registeredCapital }} 万元人民币 </div>
                                </div>
                                <div class="col-3">
                                    <div class="col-subtitle">成立日期</div>
                                    <div class="col-title">{{ item.establish_time }}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </template>
            </div>
        </div>
        <div style="height:30px;"></div>
    </div>
    <tabbar></tabbar>
</div>
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
    name: "home",
    components: {
        tabbar
    },
    setup(props, context) {
        const {
            ctx
        } = getCurrentInstance();
        const $store = useStore(); // ctx.$store === $store  ==>true 其实是同一个对象！
        const $router = useRouter();
        const $route = useRoute(); // 可以拿到所有和路由相关的参数
        const active = ref("");
        const timeData = ref(36000000);
        const headerActive = ref(false);

        const state = reactive({
            homeImgs: [],
            tabArray: [],
            searchkey:'',
            companyColumns:[],
        });

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            companySearch(null,'');
            window.addEventListener("scroll", pageScroll);
        });

        const pageScroll = () => {
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            scrollTop > 100 ?
                (headerActive.value = true) :
                (headerActive.value = false);
        };

        //搜索公司信息
        const companySearch = async (data, key) => {
            data = await Betools.manage.queryTableData('bs_company_flow_data', `_where=(companyName,like,~${key}~)&_sort=-id&_p=0&_size=30`); // 获取最近12个月的已用印记录
            data.map(item=>{
                item.establish_time= dayjs(item.establish_time).format('YYYY-MM-DD');
            })
            state.companyColumns = data;
        };

        const redirectView = (path) =>{
            $router.push(path);
        }

        //查看更多
        const searchMore = async() => {
            $router.push('/companyquery');
        };
        
        //查询默认公司列表信息
        companySearch(null,'');

        return {
            active,
            timeData,
            headerActive,
            state,
            pageScroll,
            companySearch,
            searchMore,
            redirectView,
        };
    }
};
</script>
<style lang="scss" scoped>
@import "./home.css";
</style>
