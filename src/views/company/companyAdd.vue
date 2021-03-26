<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="设立公司" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" v-show="state.step == 'one' " style="">

            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%);">

                <div class="weui-cells" style="margin-top:0px;">

                    <div class="weui-cells" style="margin-top:0px;border-bottom:0px solid #fefefe;">
                        <van-notice-bar v-show=" title!='' && title != null && typeof title != 'undefined' " left-icon="volume-o" color="#1989fa" background="#ecf9ff" :text="title" />
                    </div>

                    <div class="" id="scanCell" style="padding: 8px 10px 4px 10px;">
                        <van-row>
                            <van-col span="24" style="text-align: center;font-size:.475rem;">设立公司申请</van-col>
                        </van-row>
                    </div>

                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">

                    <van-cell-group>
                        <van-form>

                            <van-cell-group id="company-flow-base-content" style="margin-top:10px;">

                                <van-cell value="基本信息" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field clearable label="填报日期" v-model="state.item.create_time" placeholder="请输入登记日期" readonly />
                                <van-field required :readonly="false" clickable clearable label="公司名称" v-model="state.item.companyName" placeholder="请填写公司名称">
                                    <template #button>
                                        <van-button size="small" type="primary" @click="companySearch(null,state.item.companyName)">查询</van-button>
                                    </template>
                                </van-field>

                                <van-radio-group v-show="state.showCompanyName" v-model="state.radio.companyName" style="max-height:120px;overflow-y: scroll;">
                                    <van-cell-group>
                                        <template :key="item.id" v-for="(item,index) in state.companyColumns ">
                                            <van-cell :index="index" :title="item.name" clickable @click="companyConfirm(index,item);">
                                                <template #right-icon>
                                                    <van-radio :name="index" />
                                                </template>
                                            </van-cell>
                                        </template>
                                    </van-cell-group>
                                </van-radio-group>

                                <van-field required :readonly="false" clickable clearable label="所属行业" v-model="state.item.industry" placeholder="请选择所属行业">
                                    <template #button>
                                        <van-button size="small" type="primary" @click="industrySearch(null,state.item.industry)">查询</van-button>
                                    </template>
                                </van-field>

                                <van-radio-group v-show="state.showIndustryName" v-model="state.radio.industryName" style="max-height:120px;overflow-y: scroll;">
                                    <van-cell-group>
                                        <template :key="item" v-for="(item,index) in state.industryColumns ">
                                            <van-cell :index="index" :title="item" clickable @click="industryConfirm(index,item);">
                                                <template #right-icon>
                                                    <van-radio :name="index" />
                                                </template>
                                            </van-cell>
                                        </template>
                                    </van-cell-group>
                                </van-radio-group>

                                <van-field required :readonly="false" clickable clearable label="所属区域" v-model="state.item.companyCode" placeholder="请选择所属区域" @click="state.geo.show = true;" />

                                <van-cascader v-show="state.geo.show" v-model="state.geo.cascaderValue" title="请选择所在地区" :options="state.geo.options" @close="state.geo.show = false" @finish="companyCode" />

                                <van-field required :readonly="false" clickable clearable label="登记状态" v-model="state.item.registrationStatus" placeholder="请选择登记状态">
                                    <template #button>
                                        <van-button size="small" type="primary" @click="registStatusSearch(null,state.item.registrationStatus)">查询</van-button>
                                    </template>
                                </van-field>

                                <van-radio-group v-show="state.showRegistStatus" v-model="state.radio.registStatus" style="max-height:120px;overflow-y: scroll;">
                                    <van-cell-group>
                                        <template :key="item" v-for="(item,index) in state.registStatusColumns ">
                                            <van-cell :index="index" :title="item" clickable @click="registStatusConfirm(index,item);">
                                                <template #right-icon>
                                                    <van-radio :name="index" />
                                                </template>
                                            </van-cell>
                                        </template>
                                    </van-cell-group>
                                </van-radio-group>

                                <van-field v-show="state.item.registrationStatus == '注销' " required readonly clickable clearable label="注销时间" v-model="state.item.cancellationTime" placeholder="请选择注销时间" @click="clickDatePicker('showCancellationTime' , 'cancellationTime' , true);" />
                                <van-datetime-picker v-show="state.tag.showCancellationTime" v-model="state.status.cancellationTime" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" @confirm="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" />

                                <van-field required :readonly="false" clickable clearable label="营业执照" v-model="state.item.licenseNumber" rows="1" autosize type="textarea" placeholder="请输入营业执照注册号" />
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

                                <van-field required :readonly="false" clickable clearable label="公司类型" v-model="state.item.companyType" placeholder="请选择公司类型" @click="state.tag.showCompanyType = true;"/>
                                <van-picker v-show="state.tag.showCompanyType" title="选择公司类型" show-toolbar :columns="state.companyTypeColumns" @confirm="companyTypeConfirm" @cancel="state.tag.showCompanyType = false;" />

                                <van-field required :readonly="false" clickable clearable label="设立原因" v-model="state.item.reason" rows="1" autosize type="textarea" placeholder="请输入设立原因" />
                                <van-field required :readonly="false" clickable clearable label="使用情况" v-model="state.item.usage" rows="1" autosize type="textarea" placeholder="请输入使用情况" />
                                <van-field required :readonly="false" clickable clearable label="法定代表人" v-model="state.item.legalRepresentative" placeholder="请输入法定代表人" >
                                    <template #button>
                                        <van-button size="small" type="primary" @click="legalRepresentativeSearch(null,state.item.legalRepresentative)">查询</van-button>
                                    </template>
                                </van-field>

                                <van-radio-group v-show="state.tag.showLegalRepresentative" v-model="state.radio.legalRepresentative" style="max-height:120px;overflow-y: scroll;">
                                    <van-cell-group>
                                        <template :key="item.id" v-for="(item,index) in state.legalRepresentativeColumns ">
                                            <van-cell :index="index" :title="item.title" clickable @click="legalRepresentativeConfirm(index,item);">
                                                <template #right-icon>
                                                    <van-radio :name="index" />
                                                </template>
                                            </van-cell>
                                        </template>
                                    </van-cell-group>
                                </van-radio-group>

                                <van-field required :readonly="false" clickable clearable label="印章保管人" v-model="state.item.sealKeeper" placeholder="请选择印章保管人" >
                                    <template #button>
                                        <van-button size="small" type="primary" @click="sealKeeperSearch(null,state.item.sealKeeper)">查询</van-button>
                                    </template>
                                </van-field>

                                <van-radio-group v-show="state.tag.showSealKeeper" v-model="state.radio.sealKeeper" style="max-height:120px;overflow-y: scroll;">
                                    <van-cell-group>
                                        <template :key="item.id" v-for="(item,index) in state.sealKeeperColumns ">
                                            <van-cell :index="index" :title="item.title" clickable @click="sealKeeperConfirm(index,item);">
                                                <template #right-icon>
                                                    <van-radio :name="index" />
                                                </template>
                                            </van-cell>
                                        </template>
                                    </van-cell-group>
                                </van-radio-group>

                                <van-field required :readonly="false" clickable clearable label="备案联络员" v-model="state.item.liaison" placeholder="请选择工商备案联络员" >
                                    <template #button>
                                        <van-button size="small" type="primary" @click="companySearch(null,state.item.companyName)">查询</van-button>
                                    </template>
                                </van-field>

                                <van-field required :readonly="false" clickable clearable label="财务负责人" v-model="state.item.responsiblePerson" placeholder="请选择工商备案财务负责人" >
                                    <template #button>
                                        <van-button size="small" type="primary" @click="companySearch(null,state.item.companyName)">查询</van-button>
                                    </template>
                                </van-field>

                                <van-field required :readonly="false" clickable clearable label="备注信息" v-model="state.item.remark" rows="1" autosize type="textarea" placeholder="请输入备注信息" />

                            </van-cell-group>

                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div class="section-content" v-show="state.step == 'two' " style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%); margin-bottom:0.00rem;">
                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="机构人员" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="董事长" v-model="state.director.directorChairman" placeholder="请选择董事长" />
                                <van-field required :readonly="false" clickable clearable label="董事" v-model="state.director.director" placeholder="请选择董事" />
                                <van-field required :readonly="false" clickable clearable label="执行董事" v-model="state.director.directorExecutive" placeholder="请选择执行董事" />
                                <van-field required :readonly="false" clickable clearable label="总经理/经理" v-model="state.director.manager" placeholder="请选择总经理/经理名单" />
                                <van-field required :readonly="false" clickable clearable label="监事会主席" v-model="state.director.supervisorChairman" placeholder="请选择监事会主席" />
                                <van-field required :readonly="false" clickable clearable label="监事" v-model="state.director.supervisor" placeholder="请选择监事" />
                            </van-cell-group>
                        </van-form>
                    </van-cell-group>
                </div>
            </section>
        </div>

        <div class="section-content" v-show="state.step == 'three' " style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%); margin-bottom:0.75rem;">
                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="股东信息1" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder0" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail0" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder0 && state.stock.ratioDetail0" style="margin-top:10px;">
                                <van-cell value="股东信息2" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder1" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail1" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder1 && state.stock.ratioDetail1" style="margin-top:10px;">
                                <van-cell value="股东信息3" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder2" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail2" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder2 && state.stock.ratioDetail2" style="margin-top:10px;">
                                <van-cell value="股东信息4" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder3" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail3" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder3 && state.stock.ratioDetail3" style="margin-top:10px;">
                                <van-cell value="股东信息5" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder4" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail4" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder4 && state.stock.ratioDetail4" style="margin-top:10px;">
                                <van-cell value="股东信息6" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder5" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail5" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder5 && state.stock.ratioDetail5" style="margin-top:10px;">
                                <van-cell value="股东信息7" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder6" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail6" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder6 && state.stock.ratioDetail6" style="margin-top:10px;">
                                <van-cell value="股东信息8" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder7" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail7" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder7 && state.stock.ratioDetail7" style="margin-top:10px;">
                                <van-cell value="股东信息9" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder8" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail8" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder8 && state.stock.ratioDetail8" style="margin-top:10px;">
                                <van-cell value="股东信息10" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder9" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail9" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder9 && state.stock.ratioDetail9" style="margin-top:10px;">
                                <van-cell value="股东信息11" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder10" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail10" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder10 && state.stock.ratioDetail10" style="margin-top:10px;">
                                <van-cell value="股东信息12" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder11" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail11" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder11 && state.stock.ratioDetail11" style="margin-top:10px;">
                                <van-cell value="股东信息13" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder12" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail12" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder12 && state.stock.ratioDetail12" style="margin-top:10px;">
                                <van-cell value="股东信息14" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder13" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail13" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder13 && state.stock.ratioDetail13" style="margin-top:10px;">
                                <van-cell value="股东信息15" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder14" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail14" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder14 && state.stock.ratioDetail14" style="margin-top:10px;">
                                <van-cell value="股东信息16" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder15" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail15" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder15 && state.stock.ratioDetail15" style="margin-top:10px;">
                                <van-cell value="股东信息17" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder16" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail16" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder16 && state.stock.ratioDetail16" style="margin-top:10px;">
                                <van-cell value="股东信息18" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder17" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail17" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder17 && state.stock.ratioDetail17" style="margin-top:10px;">
                                <van-cell value="股东信息19" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder18" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail18" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder18 && state.stock.ratioDetail18" style="margin-top:10px;">
                                <van-cell value="股东信息20" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <van-field required :readonly="false" clickable clearable label="股东" v-model="state.stock.shareholder19" placeholder="请选择股东" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail19" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                        </van-form>
                    </van-cell-group>

                </div>
            </section>
        </div>

        <div class="section-button" style="text-align:center;margin-top:0.75rem;margin-bottom:0.75rem;">
            <van-button v-show="state.step == 'one' " plain hairline type="info" style="width:37.5%;" @click="cancel">取消</van-button>
            <van-button v-show="state.step != 'one' " plain hairline type="info" style="width:37.5%;" @click="prestep">上一步</van-button>
            <van-button v-show="state.step != 'three' " plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="nextstep">下一步</van-button>
            <van-button v-show="state.step == 'three' " plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="confirm">确认</van-button>
        </div>

    </div>
</keep-alive>
</template>

<script>
import {
    Dialog,
    Popup
} from 'vant';

import singleSelect from '@/components/select/singleSelect';
import checkSelect from '@/components/select/checkSelect';

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
    name: "base",
    components: {
        tabbar,
        Popup,
        singleSelect,
        checkSelect,
    },
    data() {
        return {
            phoneRegisterTwoForm: "",
            showPicker: false,
        };
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
            imgs: [],
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
            companyColumns: [],
            companyTypeColumns:['有限公司','股份公司'],
            industryColumns: ['房地产行业', '金融行业', '物业管理', '医疗健康产业', '商业管理'],
            registStatusColumns: ['存续', '注销', '经营异常'],
            legalRepresentativeColumns:[],
            sealKeeperColumns:[],
            radio: {
                companyName: '',
                industryName: '',
                registStatus: '',
                sealKeeper:'',
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
                usage: '', //使用情况
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
                ratioDetail0: '', //占股明细
                shareholder1: '', //股东
                ratioDetail1: '', //占股明细
                shareholder2: '', //股东
                ratioDetail2: '', //占股明细
                shareholder3: '', //股东
                ratioDetail3: '', //占股明细
                shareholder4: '', //股东
                ratioDetail4: '', //占股明细
                shareholder5: '', //股东
                ratioDetail5: '', //占股明细
                shareholder6: '', //股东
                ratioDetail6: '', //占股明细
                shareholder7: '', //股东
                ratioDetail7: '', //占股明细
                shareholder8: '', //股东
                ratioDetail8: '', //占股明细
                shareholder9: '', //股东
                ratioDetail9: '', //占股明细
            },
            status: {
                cancellationTime: new Date(),
                paidTime: new Date(),
                paidTureTime: new Date(),
                businessTerm: new Date(),
                minDate: new Date(1990, 0, 1),
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
                showCompanyType:false,
                showLegalRepresentative:false,
                showSealKeeper:false,
            },
            show: true,
            message: {},
            step: 'one',
        });

        onMounted(() => {
            ctx.$eventBus.$emit("changeTag", 0);
            window.addEventListener("scroll", pageScroll);
        });

        //返回上一页函数
        const returnBack = () => {
            console.log('returnBack');
            $router.push("/company");
        };

        //点击搜索函数
        const searching = () => {
            console.log('searching');
        };

        const companyCode = ({
            selectedOptions
        }) => {
            state.geo.show = false;
            state.item.companyCode = selectedOptions.map((option) => option.text).join('/');
        };

        const companyConfirm = (index, item, value) => {
            state.radio.companyName = index;
            state.item.companyName = state.companyColumns[index]['name'];
            setTimeout(() => {
                state.showCompanyName = false;
            }, 1000);
        };

        const industryConfirm = (index, item, value) => {
            state.radio.industryName = index;
            state.item.industry = state.industryColumns[index];
            setTimeout(() => {
                state.showIndustryName = false;
            }, 1000);
        };

        const registStatusConfirm = (index, item, value) => {
            state.radio.registStatus = index;
            state.item.registrationStatus = state.registStatusColumns[index];
            setTimeout(() => {
                state.showRegistStatus = false;
            }, 1000);
        };

        const companyTypeConfirm = (value, index) => {
            state.item.companyType = value;
            state.tag.showCompanyType = false;
        };

        const legalRepresentativeConfirm = (index, value, key) => {
            state.item.legalRepresentative = value.lastname;
            state.tag.showLegalRepresentative = false;
            debugger;
        };

        const sealKeeperConfirm = (index, value, key) => {
            state.item.sealKeeper = value.lastname;
            state.tag.showSealKeeper = false;
        };

        const companySearch = async (data, key) => {
            data = await Betools.manage.queryTableData('bs_company_flow_base', `_where=(status,in,0)~and(level,gt,2)~and(name,like,~${key}~)&_sort=id&_p=0&_size=30`); // 获取最近12个月的已用印记录
            data.map((item, index) => {
                item.title = item.name.slice(0, 24);
                item.code = item.id;
                item.tel = '';
                item.name = item.name;
                item.isDefault = false;
            });
            state.showCompanyName = true;
            state.companyColumns = data;
        };

        const industrySearch = async (data, key) => {
            state.showIndustryName = true;
            state.industryColumns = state.industryColumns;
        };

        const registStatusSearch = async (data, key) => {
            state.showRegistStatus = true;
            state.RegistStatusColumns = state.RegistStatusColumns;
        };

        const legalRepresentativeSearch = async (data, key) => {
            if(key && key.length >= 2){
                data = await Betools.manage.queryTableData('bs_hrmresource', `_where=(status,in,0,1,2,3,4)~and(lastname,like,~${key}~)&_sort=id&_p=0&_size=30`); // 获取最近12个月的已用印记录
                debugger;
                data.map((item, index) => {
                    item.code = item.id;
                    item.tel = '';
                    item.name = item.lastname ;
                    item.departName = item.textfield1 && item.textfield1.includes('||') ? item.textfield1.split('||')[1] : '';
                    item.title = `${item.lastname} ${item.departName}`;
                    item.isDefault = false;
                });
                data = data.filter((item,index,self)=>{
                    const findex = self.findIndex((element)=>{
                        return element.loginid == item.loginid;
                    })
                    return findex == index;
                });
            }
            state.tag.showLegalRepresentative = true;
            state.legalRepresentativeColumns = data;
        };

        const sealKeeperSearch = async (data, key) => {
            if(key && key.length >= 2){
                data = await Betools.manage.queryTableData('bs_hrmresource', `_where=(status,in,0,1,2,3,4)~and(lastname,like,~${key}~)&_sort=id&_p=0&_size=30`); // 获取最近12个月的已用印记录
                data.map((item, index) => {
                    item.code = item.id;
                    item.tel = '';
                    item.name = item.lastname ;
                    item.departName = item.textfield1 && item.textfield1.includes('||') ? item.textfield1.split('||')[1] : '';
                    item.title = `${item.lastname} ${item.departName}`;
                    item.isDefault = false;
                });
                data = data.filter((item,index,self)=>{
                    const findex = self.findIndex((element)=>{
                        return element.loginid == item.loginid;
                    })
                    return findex == index;
                });
            }
            state.tag.showSealKeeper = true;
            state.sealKeeperColumns = data;
        };

        //页面进入前函数
        const beforeEnter = el => {
            const dom = ball.el;
            const rect = dom.getBoundingClientRect();
            const x = rect.left - window.innerWidth * 0.6;
            const y = -(window.innerHeight - rect.top);
            el.style.display = "block";
            el.style.transform = `translate3d(0,${y}px,0)`;
            const inner = el.querySelector(".inner");
            inner.style.transform = `translate3d(${x}px,0,0)`;
        };

        const validField = (fieldName, item) => {
            state.message[fieldName] = Betools.tools.isNull(item[fieldName]) ? `未填写${fieldName}信息，请填写后在进行提交申请！` : '';
            return Betools.tools.isNull(state.message[fieldName]);
        };

        const clickDatePicker = async (name, tname, status = true) => {
            state.tag[name] = status;
            state.item[tname] = dayjs(state.status[tname]).format('YYYY-MM-DD');
        };

        //数据校验
        const checkData = async (element, type) => {

            if (type == 'company') {

                //校验公司名称长度

                //校验所属行业

                //校验所属区域

                //校验登记状态

                //校验营业执照

                //校验经营范围

                //校验注册地址

                //校验注册资本

                //校验实缴资本

                //校验营业期限

                //校验公司类型

                //校验设立原因

                //校验使用情况

                //校验法人代表

                //校验印章保管人

                //校验备案联络员

                //校验财务负责人

                //校验备注信息

            } else if (type == 'director') {

                //校验董事长

                //校验董事

                //校验执行董事

                //校验总经理

                //校验监事会主席

                //校验监事

            } else if (type == 'stock') {

                //如果没有数据，则提交股东信息

                //如果有数据，校验股东信息及占股比例

            }

        }

        const checkValid = (element) => {
            const keys = Object.keys(element);
            const invalidKey = keys.find(key => {
                return !validField(key, element);
            });
            return invalidKey;
        }

        //页面进入函数
        const enter = (el, done) => {
            document.body.offsetHeight;
            el.style.transform = "translate3d(0,0,0)";
            const inner = el.querySelector(".inner");
            inner.style.transform = "translate3d(0,0,0)";
            el.addEventListener("transitionend", done);
        };

        //页面进入后函数
        const afterEnter = el => {
            el.style.display = "none";
        };

        //页面滚动
        const pageScroll = () => {
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            scrollTop > 100 ?
                (headerActive.value = true) :
                (headerActive.value = false);
        };

        //取消函数
        const cancel = async () => {
            Dialog.confirm({
                title: '取消设立公司申请？',
                message: '点击‘确认’后返回上一页',
            }).then(() => { // on confirm
                returnBack();
            }).catch(() => { // on cancel

            });
        }

        //确认函数
        const confirm = async (elem, result, validResult, response) => {
            // 获取用户信息
            // const userinfo = await Betools.storage.getStore('system_userinfo');
            elem = {
                id: Betools.tools.queryUniqueID(),
                ...state.item,
                ...state.director
            };
            // console.log(`element:`,JSON.stringify(elem));

            Dialog.confirm({
                title: '确认提交设立公司申请？',
                message: '点击‘确认’后提交申请',
            }).then(async () => { // on confirm

                try {

                    //第一步，执行数据校验
                    console.log(`第一步，执行数据校验`);
                    validResult = await checkData(elem, 'company');

                    //第二步，向表单提交form对象数据
                    console.log(`第二步，向表单提交form对象数据`);
                    result = await Betools.manage.postTableData('bs_company_flow_data', elem);

                    //第三步，检查是否有股东信息，如果有股东信息，则需要提交股东信息
                    console.log(`第三步，检查是否有股东信息，如果有股东信息，则需要提交股东信息`);

                    //第四步，如果返回信息成功，则提示用户申请成功
                    console.log(`第四步，如果返回信息成功，则提示用户申请成功`);
                    if (result.protocol41 == true && result.affectedRows > 0 && result.node) {
                        await Dialog.confirm({
                            title: '设立公司申请提交成功！',
                        });
                    }
                } catch (error) {
                    console.log(error);
                }

            }).catch(() => { // on cancel

            });
        }

        //下一步函数
        const nextstep = async () => {
            if (state.step == 'one') {
                //此次校验，公司基础信息是否填写完整
                const invalidKeys = checkValid(state.item);
                if (Betools.tools.isNull(invalidKeys)) {
                    state.step = 'two'
                } else {
                    Dialog.confirm({
                        title: '请填写完公司设立信息后进行下一步！',
                        message: `请检查缺失信息：${invalidKeys}`
                    })
                }
            } else if (state.step == 'two') {
                //此次校验，公司的董事信息是否填写完整
                const invalidKeys = checkValid(state.director);
                if (Betools.tools.isNull(invalidKeys)) {
                    state.step = 'three'
                } else {
                    Dialog.confirm({
                        title: '请填写完公司董事信息后进行下一步！',
                        message: `请检查缺失信息：${invalidKeys}`
                    })
                }
            } else if (state.step == 'three') {
                const elem = {
                    id: Betools.tools.queryUniqueID(),
                    ...state.item,
                    ...state.director
                };
                console.log(`elemnt:`, JSON.stringify(elem));
                await confirm(elem, null, null);
            }
        }

        //上一步函数
        const prestep = async () => {
            if (state.step == 'three') {
                state.step = 'two'
            } else if (state.step == 'two') {
                state.step = 'one'
            } else if (state.stop == 'one') {
                await cancel();
            }
        }

        return {
            active,
            state,
            returnBack,
            searching,
            beforeEnter,
            enter,
            afterEnter,
            headerActive,
            pageScroll,
            nextstep,
            prestep,
            cancel,
            confirm,
            clickDatePicker,
            companySearch,
            companyConfirm,
            industrySearch,
            industryConfirm,
            registStatusSearch,
            registStatusConfirm,
            companyCode,
            companyTypeConfirm,
            legalRepresentativeSearch,
            legalRepresentativeConfirm,
            sealKeeperSearch,
            sealKeeperConfirm,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
@import "../base/company.scss";
</style>
