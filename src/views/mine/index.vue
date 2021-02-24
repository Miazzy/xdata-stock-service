<template>
<div class="mine-layout" style="background:linear-gradient(skyblue, #f0f0f0);">
    <section class="mine-header">
        <img src="../../assets/image/product/store-new.png" class="header-img" />
        <div v-show="!loginFlag" class="login-regist" style="color:#fefefe;">
            <router-link to="/login" class="order-item" tag="span" style="color:#fefefe;">登录</router-link>
            <router-link to="/register/phoneRegister" class="order-item" tag="span" style="color:#fefefe;">/注册</router-link>
        </div>
        <ul v-show="loginFlag" class="user-info">
            <li class="user-name">某员工</li>
            <li class="node-info">
                <span class="business-node">某某有限公司</span>
                <span class="business-node">某部门</span>
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
            <li class="info-item">
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
            <router-link to="wallet/myWallet" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="hotel-o" color="dodgerblue" size="0.71rem" style="margin-right:10px;"/>
                    <span>设立公司</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/node/nodeApplication" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="chart-trending-o" color="chocolate" size="0.71rem" style="margin-right:10px;"/>
                    <span>信息变更</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/wallet/myWallet" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="balance-list-o" color="royalblue" size="0.71rem" style="margin-right:10px;"  />
                    <span>股权质押</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/wallet/myWallet" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="notes-o" color="madiumaquamarine" size="0.71rem" style="margin-right:10px;" />
                    <span>年报上传</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/wallet/myWallet" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="delete-o" color="orangered" size="0.71rem" style="margin-right:10px;"/>
                    <span>注销公司</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
        </ul>
    </section>

    <section class="mine-content">
        <span style="padding-top:0.35rem;display:block;">记录管理</span>
        <ul class="options-list">
            <router-link to="/mine/shippingAddress" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="after-sale" color="goldenrod" size="0.71rem" style="margin-right:10px;"  />
                    <span>补贴记录</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/mine/messageCenter" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="newspaper-o"  color="darkorange" size="0.71rem" style="margin-right:10px;"  />
                    <span>资质管理</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/mine/helpCenter" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="label-o"  color="cornflowerblue" size="0.71rem" style="margin-right:10px;"  />
                    <span>知识产权</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/mine/setting" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="todo-list-o"  color="orangered" size="0.71rem" style="margin-right:10px;"  />
                    <span>诉讼管理</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/mine/setting" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="friends-o" color="deepskyblue" size="0.71rem" style="margin-right:10px;" />
                    <span>账户管理</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/mine/setting" class="option-item" tag="li">
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
            <router-link to="/mine/shippingAddress" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="records" color="deepskyblue" size="0.71rem" style="margin-right:10px;"  />
                    <span>身份信息</span>
                </div>
                <van-icon name="arrow" color="#DBDBDB" />
            </router-link>
            <router-link to="/mine/messageCenter" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="newspaper-o" color="rosybrown" size="0.71rem" style="margin-right:10px;" />
                    <span>营业执照</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/mine/helpCenter" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="description" color="goldenrod" size="0.71rem" style="margin-right:10px;"  />
                    <span>项目证照</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/mine/setting" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="bulb-o" color="orangered" size="0.71rem" style="margin-right:10px;" />
                    <span>诉讼管理</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
            <router-link to="/mine/setting" class="option-item" tag="li">
                <div class="item-info">
                    <van-icon name="debit-pay" color="gray" size="0.71rem" style="margin-right:10px;" />
                    <span>其他证照</span>
                </div>
                <van-icon color="#DBDBDB" name="arrow" />
            </router-link>
        </ul>
    </section>
    
    <tabbar></tabbar>
</div>
</template>

<script>
import {
    ref,
    onMounted,
    getCurrentInstance
} from "vue";
export default {
    name: "mine",
    setup() {
        const show = ref(false);
        const columns = ref(1);
        const loginFlag = ref(true);
        const {
            ctx
        } = getCurrentInstance();

        const handleClose = () => {
            show.value = false;
        };

        const toShow = () => {
            show.value = true;
        };

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 3);
        });

        return {
            show,
            columns,
            loginFlag,
            toShow,
            handleClose
        };
    }
};
</script>

<style lang="scss" scoped>
.mine-layout {
    padding: 30px 16px;
    min-height: 1200px;
    max-height: 2400px;
    padding-bottom: 50px;
    background: linear-gradient(#fe4f70, #ff9351);

    .mine-header {
        display: flex;
        padding-left: 24px;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        padding-bottom: 20px;

        .header-img {
            width: 70px;
            height: 70px;
        }

        .user-info {
            padding-left: 16px;
            font-size: 15px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            .node-info {
                padding-top: 5px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .sharing-node {
                    padding-left: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 78px;
                    height: 25px;
                    font-size: 11px;
                    text-align: center;
                    background-size: 100% 100%;
                    border-radius: 11px 11px;
                }

                .business-node {
                    margin-left: 0px;
                    margin-right: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 22px;
                    font-size: 11px;
                    text-align: center;
                    border-radius: 11px 11px;
                }
            }
        }

        .login-regist {
            font-size: 15px;
            color: #fff;
            padding-left: 16px;
        }
    }

    .my-info {
        font-size: 13px;
        color: #fff;
        padding-bottom: 16px;

        .info-list {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .info-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                b {
                    font-size: 16px;
                }
            }
        }
    }

    .order-all {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 8px;

        .look-orders {
            font-size: 11px;
            font-weight: 600;
            color: #3a3a3a;
            padding-left: 19px;
            padding-top: 14px;
            padding-bottom: 18px;
        }

        .order-list {
            padding-bottom: 18px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .order-item {
                font-size: 14px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                span {
                    padding-top: 5px;
                    font-weight: 600;
                }
            }
        }
    }

    .mine-content {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        border-radius: 8px;
        padding: 0 16px;
        margin-top: 18px;

        .options-list {
            padding-top: 20px;

            .option-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 16px;
                padding-bottom: 22px;

                .item-info {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 15px;
                    color: #888;

                    .incon {
                        padding-right: 16px;
                    }

                    .header-img {
                        width: 50px;
                        height: 50px;
                        padding-right: 16px;
                    }
                }
            }
        }
    }

    .node-dialog {
        .dialog-header {
            text-align: center;
        }

        .my-node-data {
            padding: 10px 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;

            .data-item {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-left: 10px;
                margin-bottom: 20px;

                .node-text {
                    font-size: 13px;
                    padding-top: 5px;
                    color: #3a3a3a;
                }
            }
        }

        .node-bottom {
            position: relative;

            .know-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
                line-height: 40px;
                width: 154px;
                border-radius: 20px 20px;
                background-color: #fce14b;
                margin-bottom: 30px;
            }

            .gray-img {
                position: absolute;
                right: 12px;
                top: 0;
            }
        }
    }
}
</style>
