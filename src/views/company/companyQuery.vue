<template>
<div class="home">

    <van-nav-bar title="公司信息" left-text="返回" left-arrow @click-left="returnBack" />

    <div id="company-query-content">
        <van-search v-model="state.searchkey" placeholder="请输入公司名称、法人、地址等信息" @search="companySearch(null,state.searchkey);" />
        <div class="home-latestcompany" style="margin-bottom:50px;">
            <div class="home-middle-content">
                <template v-for="(item , index) in state.companyColumns" :key="index">
                    <a href="#" class="a-decoration">
                        <div class="list-item" @click="redirectView(`/companyinfo?id=${item.id}&back=/companyquery`);">
                            <div class="list-item-top">
                                <div class="list-item-logo">
                                    <span class="boss-letter color-1" :first-letter="item.companyName.slice(0,4)" ></span>
                                </div>
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
</div>
</template>

<script>
import { Dialog } from 'vant';
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore} from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "companyQuery",
    components: {},
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
            state.searchkey = $route.query.searchkey;
            companySearch(null,$route.query.searchkey);
            window.addEventListener("scroll", pageScroll);
        });

        //跳转到View
        const redirectView = (path) =>{
            $router.push(path);
        }

        //返回上一页函数
        const returnBack = (back = '/company') => {
            back = $route.query.back ? $route.query.back : '/company';
            $router.push(back);
        };

        //页面滚动处理函数
        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ?  (headerActive.value = true) :  (headerActive.value = false);
        };

        //搜索公司信息
        const companySearch = async (data, key) => {
            key = Betools.tools.deNull(key,'');
            data = await Betools.manage.queryTableData('bs_company_flow_data', `_where=(companyName,like,~${key}~)&_sort=-id&_p=0&_size=100`); // 获取最近12个月的已用印记录
            data.map(item=>{
                item.establish_time= dayjs(item.establish_time).format('YYYY-MM-DD');
            })
            state.companyColumns = data;
        };

        //查询默认公司列表信息
        companySearch(null,$route.query.searchkey);

        return {
            active,
            timeData,
            headerActive,
            state,
            pageScroll,
            returnBack,
            companySearch,
            redirectView,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../home/home.css";
</style>
