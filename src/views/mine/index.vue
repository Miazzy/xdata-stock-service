<template>
<div class="mine-layout" style="background:linear-gradient(skyblue, #f0f0f0);">
    <section class="mine-header">
        <van-image class="header-img" round  width="1.5rem" height="1.5rem" :src="state.avatar" />
        <div v-show="state.username == ''" class="login-regist" style="color:#fefefe;">
            <router-link to="/login" class="order-item" tag="span" style="color:#fefefe;">登录</router-link>
            <router-link to="/register/phoneRegister" class="order-item" tag="span" style="color:#fefefe;">/注册</router-link>
        </div>
        <ul v-show="state.username != '' " class="user-info">
            <li class="user-name">
                <span class="business-node">{{state.username}}</span>
                <span class="business-node" style="margin-left:0.15rem;font-size:0.25rem">{{state.position}}</span>
            </li>
            <li class="node-info">
                <span class="business-node">{{state.companyName}}</span>
                <span class="business-node">{{state.departName}}</span>
            </li>
        </ul>
    </section>

    <section class="my-info" style="margin-top:0.45rem;margin-bottom:0.35rem;">
        <ul class="info-list">
            <li class="info-item">
                <span>我的消息</span>
            </li>
            <li class="info-item">
                <span>我的关注</span>
            </li>
            <li class="info-item" @click="redirectView('/companyquery?back=/mine')" >
                <span>查询公司</span>
            </li>
            <li class="info-item">
                <span>浏览历史</span>
            </li>
        </ul>
    </section>

    <section class="mine-content">
        <span style="padding-top:0.35rem;display:block;">工商管理</span>
        <ul class="options-list">
            <router-link to="/company" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="hotel-o" color="dodgerblue" size="0.71rem" style="margin-right:10px;" />
                    <span>设立公司</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/alteration" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="chart-trending-o" color="chocolate" size="0.71rem" style="margin-right:10px;" />
                    <span>公司变更</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/pledge" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="balance-list-o" color="royalblue" size="0.71rem" style="margin-right:10px;" />
                    <span>股权质押</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/annals" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="notes-o" color="madiumaquamarine" size="0.71rem" style="margin-right:10px;" />
                    <span>年报上传</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/withdraw" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="delete-o" color="orangered" size="0.71rem" style="margin-right:10px;" />
                    <span>注销公司</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
        </ul>
    </section>

    <section class="mine-content">
        <span style="padding-top:0.35rem;display:block;">记录管理</span>
        <ul class="options-list">
            <router-link to="/allowance" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="after-sale" color="goldenrod" size="0.71rem" style="margin-right:10px;" />
                    <span>补贴记录</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/qualification" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="newspaper-o" color="darkorange" size="0.71rem" style="margin-right:10px;" />
                    <span>资质管理</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/property" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="label-o" color="cornflowerblue" size="0.71rem" style="margin-right:10px;" />
                    <span>知识产权</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/lawsuit" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="todo-list-o" color="orangered" size="0.71rem" style="margin-right:10px;" />
                    <span>诉讼管理</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/account" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="friends-o" color="deepskyblue" size="0.71rem" style="margin-right:10px;" />
                    <span>账户管理</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/punish" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="close" color="tomato" size="0.71rem" style="margin-right:10px;" />
                    <span>处罚记录</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
        </ul>
    </section>

    <section class="mine-content">
        <span style="padding-top:0.35rem;display:block;">证照管理</span>
        <ul class="options-list">
            <router-link to="/certificate" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="records" color="deepskyblue" size="0.71rem" style="margin-right:10px;" />
                    <span>身份信息</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/businesslicense" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="newspaper-o" color="rosybrown" size="0.71rem" style="margin-right:10px;" />
                    <span>营业执照</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/license" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="description" color="goldenrod" size="0.71rem" style="margin-right:10px;" />
                    <span>项目证照</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/otherlicense" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="debit-pay" color="gray" size="0.71rem" style="margin-right:10px;" />
                    <span>其他证照</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
        </ul>
    </section>

    <section class="mine-content">
        <span style="padding-top:0.35rem;display:block;">系统管理</span>
        <ul class="options-list">
            <router-link to="/helpCenter" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="question-o" color="goldenrod" size="0.71rem" style="margin-right:10px;" />
                    <span>帮助中心</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/messageCenter" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="chat-o" color="rosybrown" size="0.71rem" style="margin-right:10px;" />
                    <span>消息中心</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/shippingAddress" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="diamond-o" color="cornflowerblue" size="0.71rem" style="margin-right:10px;" />
                    <span>我的地址</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/setting" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="setting-o" color="gray" size="0.71rem" style="margin-right:10px;" />
                    <span>设置</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
        </ul>
    </section>

    <section style="height:2.50rem;">
    </section>

    <tabbar></tabbar>
</div>
</template>

<script>

import { ref,reactive, onMounted, getCurrentInstance } from "vue";
import { useStore} from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "mine",
    setup() {
        const {
            ctx
        } = getCurrentInstance();

        const $store = useStore();
        const $router = useRouter();
        const $route = useRoute();

        const state = reactive({
            homeImgs: [],
            tabArray: [],
            searchkey:'',
            userinfo: '',
            username:'',
            companyName:'',
            departName:'',
            position:'',
            avatar:'',
        });

        onMounted(async () => {
            state.userinfo = await Betools.storage.getStore('system_userinfo');
            state.avatar = state.userinfo ? state.userinfo.thumb_avatar :'',
            state.username = state.userinfo ? state.userinfo.realname:'',
            state.position = state.userinfo ? state.userinfo.position : '';
            state.companyName = state.userinfo && state.userinfo.company ? state.userinfo.company.name : '';
            state.departName = state.userinfo && state.userinfo.department ? state.userinfo.department.name : '';
        });

        const redirectView = (path) =>{
            $router.push(path);
        }

        return {
            state,
            redirectView,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
.mine-layout .mine-header .header-img {
    width: 1.86667rem;
    height: 1.86667rem;
    border-radius: 0.25rem;
    border: 0.02rem solid #cecece;
}
</style>
