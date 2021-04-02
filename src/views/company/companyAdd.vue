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
                                <common-select :showTag="state.tag.showCompanyName" :modelColumns="state.companyNameColumns" fieldName="companyName" :modelValue="state.item.companyName" :element="state.item" type="company" v-model="state.item.companyName" labelName="公司名称" placeholderName="请填写公司名称" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="公司简介" v-model="state.item.brief_info" rows="1" autosize type="textarea" placeholder="请输入公司简介" />
                                <van-field required :readonly="false" clickable clearable label="英文名称" v-model="state.item.companyNameEn" rows="1" autosize type="textarea" placeholder="请输入公司英文名称" />
                                <common-select :showTag="state.tag.showIndustryName" :modelColumns="state.industryColumns" fieldName="industryName" :modelValue="state.item.industry" :element="state.item" type="common" v-model="state.item.industry" labelName="所属行业" placeholderName="请选择所属行业" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="所属区域" v-model="state.item.companyCode" placeholder="请选择所属区域" @click="state.geo.show = true;" />
                                <van-cascader v-show="state.geo.show" v-model="state.geo.cascaderValue" title="请选择所在地区" :options="state.geo.options" @close="state.geo.show = false" @finish="companyCode" />
                                <common-select :showTag="state.tag.showRegistrationStatus" :modelColumns="state.registStatusColumns" fieldName="registrationStatus" :modelValue="state.item.registrationStatus" :element="state.item" type="common" v-model="state.item.registrationStatus" labelName="登记状态" placeholderName="请选择登记状态" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field v-show="state.item.registrationStatus == '注销' " required readonly clickable clearable label="注销时间" v-model="state.item.cancellationTime" placeholder="请选择注销时间" @click="clickDatePicker('showCancellationTime' , 'cancellationTime' , true);" />
                                <van-datetime-picker v-show="state.tag.showCancellationTime" v-model="state.status.cancellationTime" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" @confirm="clickDatePicker('showCancellationTime' , 'cancellationTime' , false);" />
                                <van-field required :readonly="false" clickable clearable label="成立日期" v-model="state.item.establish_time" placeholder="请选择营业期限" @click="clickDatePicker('showEstablishTime' , 'establish_time' , true);" />
                                <van-datetime-picker v-show="state.tag.showEstablishTime" v-model="state.status.establish_time" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showEstablishTime' , 'establish_time' , false);" @confirm="clickDatePicker('showEstablishTime' , 'establish_time' , false);" />
                                <van-field required :readonly="false" clickable clearable label="核准日期" v-model="state.item.examine_date" placeholder="请选择营业期限" @click="clickDatePicker('showExamineDate' , 'examine_date' , true);" />
                                <van-datetime-picker v-show="state.tag.showExamineDate" v-model="state.status.examine_date" type="date" title="选择年月日" :min-date="state.status.minDate" :max-date="state.status.maxDate" @cancel="clickDatePicker('showExamineDate' , 'examine_date' , false);" @confirm="clickDatePicker('showExamineDate' , 'examine_date' , false);" />
                                <van-field required :readonly="false" clickable clearable label="营业执照" v-model="state.item.licenseNumber" rows="1" autosize type="textarea" placeholder="请输入营业执照注册号" />
                                <van-field required :readonly="false" clickable clearable label="纳税人识别号" v-model="state.item.taxpayer_id" rows="1" autosize type="textarea" placeholder="请输入纳税人识别号" />
                                <van-field required :readonly="false" clickable clearable label="工商注册号" v-model="state.item.regist_number" rows="1" autosize type="textarea" placeholder="请输入工商注册号" />
                                <van-field required :readonly="false" clickable clearable label="组织机构代码" v-model="state.item.organ_code" rows="1" autosize type="textarea" placeholder="请输入组织机构代码" />
                                <van-field required :readonly="false" clickable clearable label="登记机关" v-model="state.item.regist_authority" rows="1" autosize type="textarea" placeholder="请输入登记机关" />
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
                                <van-field required :readonly="false" clickable clearable label="公司类型" v-model="state.item.companyType" placeholder="请选择公司类型" @click="state.tag.showCompanyType = true;" />
                                <van-picker v-show="state.tag.showCompanyType" title="选择公司类型" show-toolbar :columns="state.companyTypeColumns" @confirm="companyTypeConfirm" @cancel="state.tag.showCompanyType = false;" />
                                <van-field required :readonly="false" clickable clearable label="设立原因" v-model="state.item.reason" rows="1" autosize type="textarea" placeholder="请输入设立原因" />
                                <van-field required :readonly="false" clickable clearable label="使用情况" v-model="state.item.usages" rows="1" autosize type="textarea" placeholder="请输入使用情况" />
                                <common-select :showTag="state.tag.showLegalRepresentative" :modelColumns="state.legalRepresentativeColumns" fieldName="legalRepresentative" :modelValue="state.item.legalRepresentative" :element="state.item" type="user" v-model="state.item.legalRepresentative" labelName="法定代表人" placeholderName="请输入法定代表人" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showSealKeeper" :modelColumns="state.sealKeeperColumns" fieldName="sealKeeper" :modelValue="state.item.sealKeeper" :element="state.item" type="user" v-model="state.item.sealKeeper" labelName="印章保管人" placeholderName="请输入印章保管人" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showLiaison" :modelColumns="state.liaisonColumns" fieldName="liaison" :modelValue="state.item.liaison" :element="state.item" type="user" v-model="state.item.liaison" labelName="备案联络员" placeholderName="请选择工商备案联络员" @search="commonSearch" @confirm="commonConfirm" />
                                <common-select :showTag="state.tag.showResponsiblePerson" :modelColumns="state.responsiblePersonColumns" fieldName="responsiblePerson" :modelValue="state.item.responsiblePerson" :element="state.item" type="user" v-model="state.item.responsiblePerson" labelName="财务负责人" placeholderName="请选择工商备案财务负责人" @search="commonSearch" @confirm="commonConfirm" />
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

        <div class="section-content" v-show="state.step == 'three' " style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%); margin-bottom:0.75rem;">
                <div id="weui-cells-flex" class="weui-cells" style="">
                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-cell value="股东信息1" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder0" :modelColumns="state.shareholder0Columns" fieldName="shareholder0" fieldName_="shareholder0" :modelValue="state.stock.shareholder0" :element="state.stock" type="user" v-model="state.stock.shareholder0" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail0" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder0 && state.stock.ratioDetail0 && (state.stock.ratioDetail0 * 1.0).toFixed(8) < 100 " style="margin-top:10px;">
                                <van-cell value="股东信息2" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder1" :modelColumns="state.shareholder1Columns" fieldName="shareholder1" fieldName_="shareholder1" :modelValue="state.stock.shareholder1" :element="state.stock" type="user" v-model="state.stock.shareholder1" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail1" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder1 && state.stock.ratioDetail1 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0).toFixed(8) < 100 " style="margin-top:10px;">
                                <van-cell value="股东信息3" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder2" :modelColumns="state.shareholder2Columns" fieldName="shareholder2" fieldName_="shareholder2" :modelValue="state.stock.shareholder2" :element="state.stock" type="user" v-model="state.stock.shareholder2" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail2" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder2 && state.stock.ratioDetail2 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0  + state.stock.ratioDetail2 * 1.0 ).toFixed(8) < 100 " style="margin-top:10px;">
                                <van-cell value="股东信息4" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder3" :modelColumns="state.shareholder3Columns" fieldName="shareholder3" fieldName_="shareholder3" :modelValue="state.stock.shareholder3" :element="state.stock" type="user" v-model="state.stock.shareholder3" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail3" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder3 && state.stock.ratioDetail3 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息5" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder4" :modelColumns="state.shareholder4Columns" fieldName="shareholder4" fieldName_="shareholder4" :modelValue="state.stock.shareholder4" :element="state.stock" type="user" v-model="state.stock.shareholder4" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail4" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder4 && state.stock.ratioDetail4 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息6" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder5" :modelColumns="state.shareholder5Columns" fieldName="shareholder5" fieldName_="shareholder5" :modelValue="state.stock.shareholder5" :element="state.stock" type="user" v-model="state.stock.shareholder5" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail5" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder5 && state.stock.ratioDetail5 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息7" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder6" :modelColumns="state.shareholder6Columns" fieldName="shareholder6" fieldName_="shareholder6" :modelValue="state.stock.shareholder6" :element="state.stock" type="user" v-model="state.stock.shareholder6" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail6" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder6 && state.stock.ratioDetail6 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息8" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder7" :modelColumns="state.shareholder7Columns" fieldName="shareholder7" fieldName_="shareholder7" :modelValue="state.stock.shareholder7" :element="state.stock" type="user" v-model="state.stock.shareholder7" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail7" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder7 && state.stock.ratioDetail7 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息9" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder8" :modelColumns="state.shareholder8Columns" fieldName="shareholder8" fieldName_="shareholder8" :modelValue="state.stock.shareholder8" :element="state.stock" type="user" v-model="state.stock.shareholder8" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail8" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder8 && state.stock.ratioDetail8 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息10" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder9" :modelColumns="state.shareholder9Columns" fieldName="shareholder9" fieldName_="shareholder9" :modelValue="state.stock.shareholder9" :element="state.stock" type="user" v-model="state.stock.shareholder9" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail9" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder9 && state.stock.ratioDetail9 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息11" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder10" :modelColumns="state.shareholder10Columns" fieldName="shareholder10" fieldName_="shareholder10" :modelValue="state.stock.shareholder10" :element="state.stock" type="user" v-model="state.stock.shareholder10" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail10" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder10 && state.stock.ratioDetail10 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息12" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder11" :modelColumns="state.shareholder11Columns" fieldName="shareholder11" fieldName_="shareholder11" :modelValue="state.stock.shareholder11" :element="state.stock" type="user" v-model="state.stock.shareholder11" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail11" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder11 && state.stock.ratioDetail11 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息13" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder12" :modelColumns="state.shareholder12Columns" fieldName="shareholder12" fieldName_="shareholder12" :modelValue="state.stock.shareholder12" :element="state.stock" type="user" v-model="state.stock.shareholder12" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail12" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder12 && state.stock.ratioDetail12 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 + state.stock.ratioDetail12 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息14" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder13" :modelColumns="state.shareholder13Columns" fieldName="shareholder13" fieldName_="shareholder13" :modelValue="state.stock.shareholder13" :element="state.stock" type="user" v-model="state.stock.shareholder13" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail13" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder13 && state.stock.ratioDetail13 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 + state.stock.ratioDetail12 * 1.0 + state.stock.ratioDetail13 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息15" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder14" :modelColumns="state.shareholder14Columns" fieldName="shareholder14" fieldName_="shareholder14" :modelValue="state.stock.shareholder14" :element="state.stock" type="user" v-model="state.stock.shareholder14" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail14" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder14 && state.stock.ratioDetail14 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 + state.stock.ratioDetail12 * 1.0 + state.stock.ratioDetail13 * 1.0 + state.stock.ratioDetail14 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息16" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder15" :modelColumns="state.shareholder15Columns" fieldName="shareholder15" fieldName_="shareholder15" :modelValue="state.stock.shareholder15" :element="state.stock" type="user" v-model="state.stock.shareholder15" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail15" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder15 && state.stock.ratioDetail15 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 + state.stock.ratioDetail12 * 1.0 + state.stock.ratioDetail13 * 1.0 + state.stock.ratioDetail14 * 1.0 + state.stock.ratioDetail15 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息17" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder16" :modelColumns="state.shareholder16Columns" fieldName="shareholder16" fieldName_="shareholder16" :modelValue="state.stock.shareholder16" :element="state.stock" type="user" v-model="state.stock.shareholder16" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail16" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder16 && state.stock.ratioDetail16 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 + state.stock.ratioDetail12 * 1.0 + state.stock.ratioDetail13 * 1.0 + state.stock.ratioDetail14 * 1.0 + state.stock.ratioDetail15 * 1.0 + state.stock.ratioDetail16 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息18" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder17" :modelColumns="state.shareholder17Columns" fieldName="shareholder17" fieldName_="shareholder17" :modelValue="state.stock.shareholder17" :element="state.stock" type="user" v-model="state.stock.shareholder17" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail17" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder17 && state.stock.ratioDetail17 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 + state.stock.ratioDetail12 * 1.0 + state.stock.ratioDetail13 * 1.0 + state.stock.ratioDetail14 * 1.0 + state.stock.ratioDetail15 * 1.0 + state.stock.ratioDetail16 * 1.0 + state.stock.ratioDetail17 * 1.0 ).toFixed(8) < 100" style="margin-top:10px;">
                                <van-cell value="股东信息19" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder18" :modelColumns="state.shareholder18Columns" fieldName="shareholder18" fieldName_="shareholder18" :modelValue="state.stock.shareholder18" :element="state.stock" type="user" v-model="state.stock.shareholder18" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail18" type="number" placeholder="请输入股权占股明细" />
                            </van-cell-group>

                            <van-cell-group v-show="state.stock.shareholder18 && state.stock.ratioDetail18 && (state.stock.ratioDetail0 * 1.0 + state.stock.ratioDetail1 * 1.0 + state.stock.ratioDetail2 * 1.0 + state.stock.ratioDetail3 * 1.0 + state.stock.ratioDetail4 * 1.0 + state.stock.ratioDetail5 * 1.0 + state.stock.ratioDetail6 * 1.0 + state.stock.ratioDetail7 * 1.0 + state.stock.ratioDetail8 * 1.0 + state.stock.ratioDetail9 * 1.0 + state.stock.ratioDetail10 * 1.0 + state.stock.ratioDetail11 * 1.0 + state.stock.ratioDetail12 * 1.0 + state.stock.ratioDetail13 * 1.0 + state.stock.ratioDetail14 * 1.0 + state.stock.ratioDetail15 * 1.0 + state.stock.ratioDetail16 * 1.0 + state.stock.ratioDetail17 * 1.0 + state.stock.ratioDetail18 * 1.0 ).toFixed(8) < 100 " style="margin-top:10px;">
                                <van-cell value="股东信息20" style="margin-left:0px;margin-left:-3px;font-size: 0.375rem;" />
                                <common-select :showTag="state.tag.showShareholder19" :modelColumns="state.shareholder19Columns" fieldName="shareholder19" fieldName_="shareholder19" :modelValue="state.stock.shareholder19" :element="state.stock" type="user" v-model="state.stock.shareholder19" labelName="股东" placeholderName="请选择股东" @search="commonSearch" @confirm="commonConfirm" />
                                <van-field required :readonly="false" clickable clearable label="占股明细" v-model="state.stock.ratioDetail19" type="number" placeholder="请输入股权占股明细" />
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
import { Dialog } from 'vant';
import commonSelect from '@/components/select/commonSelect';
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore} from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "companyAdd",
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
                options: [],
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
            shareholderColumns: [],
            shareholder0Columns:[],
            shareholder1Columns:[],
            shareholder2Columns:[],
            shareholder3Columns:[],
            shareholder4Columns:[],
            shareholder5Columns:[],
            shareholder6Columns:[],
            shareholder7Columns:[],
            shareholder8Columns:[],
            shareholder9Columns:[],
            shareholder10Columns:[],
            shareholder11Columns:[],
            shareholder12Columns:[],
            shareholder13Columns:[],
            shareholder14Columns:[],
            shareholder15Columns:[],
            shareholder16Columns:[],
            shareholder17Columns:[],
            shareholder18Columns:[],
            shareholder19Columns:[],
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
                brief_info:'', //公司简介
                companyName: '', //公司名称
                companyNameEn: '', //英文名称
                taxpayer_id:'', //纳税人识别号
                regist_number:'', //工商注册号
                organ_code:'', //组织机构代码
                establish_time: dayjs().format('YYYY-MM-DD'), //成立日期
                examine_date: dayjs().format('YYYY-MM-DD'), //核准日期
                regist_authority:'', //登记机关
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
                showEstablishTime:false,
                showManager: false, //总经理/经理
                showSupervisorChairman: false, //监事会主席
                showSupervisor: false, //监事
                showShareholder: false,
                showShareholder0:false,
                showShareholder1:false,
                showShareholder2:false,
                showShareholder3:false,
                showShareholder4:false,
                showShareholder5:false,
                showShareholder6:false,
                showShareholder7:false,
                showShareholder8:false,
                showShareholder9:false,
                showShareholder10:false,
                showShareholder11:false,
                showShareholder12:false,
                showShareholder13:false,
                showShareholder14:false,
                showShareholder15:false,
                showShareholder16:false,
                showShareholder17:false,
                showShareholder18:false,
                showShareholder19:false,
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

        onMounted(async () => {
            state.geo.options = await Betools.manage.queryCity();
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

        const companyCode = (config) => {
            state.geo.show = false;
            state.item.companyCode = config.selectedOptions.map((option) => option.text).join('/');
        };

        const commonConfirm = async (index, value, key, item , type = '') => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog , type);
        };

        const companyTypeConfirm = async (value, index) => {
            await Betools.manage.commonDataConfirm(index, value, 'companyType', state.item, state, Dialog , '');
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

        const checkValid = (element , keysElement = element) => {
            const keys = Object.keys(keysElement);
            console.log(`element key :${JSON.stringify(keysElement)}` , keys);
            const invalidKey = keys.find(key => {
                return !validField(key, element);
            });
            return invalidKey;
        }

        //页面滚动
        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ?  (headerActive.value = true) :  (headerActive.value = false);
        };

        //取消函数
        const cancel = async () => {
            await Betools.manage.cancelAndBack(Dialog, returnBack, '取消设立公司申请？') ;
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
</style>
