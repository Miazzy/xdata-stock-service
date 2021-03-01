<template>
<keep-alive>
    <div id="content" style="margin-top: 0px; overflow-x: hidden;">
        <header id="wx-header" style="overflow-x:hidden;">
            <div class="center">
                <router-link to="/app" tag="div" class="iconfont icon-left">
                    <span>返回</span>
                </router-link>
                <span>印章管理</span>
                <van-dropdown-menu id="header-drop-menu" class="header-drop-menu" z-index="100" style="position: absolute; width: 45px; height: auto; right: -15px; top: -3px; opacity: 1; background:#1b1b1b; ">
                    <van-icon name="weapp-nav" size="1.3rem" style="position: absolute; width: 40px; height: auto; right: 15px; top: 16px; opacity: 1; background:#1b1b1b;z-index:10000; " />
                    <van-dropdown-item v-model="dropMenuValue" ref="headMenuItem" :options="dropMenuOption" />
                </van-dropdown-menu>
            </div>
        </header>

        <section>

            <div class="weui-cells" style="margin-top:0px;">

                <div class="weui-cells" style="margin-top:0px;border-bottom:0px solid #fefefe;">
                    <van-notice-bar v-show=" title!='' && title != null && typeof title != 'undefined' " left-icon="volume-o" color="#1989fa" background="#ecf9ff" :text="title" />
                </div>

                <div class="" id="scanCell" style="padding: 8px 10px 4px 10px;">
                    <van-row>
                        <van-col span="8"></van-col>
                        <van-col span="8" style="text-align: center;font-size:1.15rem;">用印登记表</van-col>
                    </van-row>
                </div>
            </div>

            <div class="wechat-list" style="background-color:#fefefe;margin-top:0px;border-bottom:0px solid #fefefe;overflow-x:hidden;">
                <div class="weui-cells" style="margin-top:0px;border-bottom:0px solid #fefefe;overflow-x:hidden;"></div>
                <div class="weui-cells" style="margin-top:0px;margin-left:0px;padding-top:5px;padding-bottom:15px;border-bottom:0px solid #fefefe;overflow-x:hidden;">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="基本信息" style="margin-left:0px;margin-left:-3px;font-size: 0.95rem;" />
                            </van-cell-group>
                        </van-form>
                    </van-cell-group>
                </div>
            </div>
        </section>
    </div>
</keep-alive>
</template>

<script>

</script>

<style lang="scss" scoped>
@import  "./base.scss";
</style>
