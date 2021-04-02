<template>
<keep-alive>

    <div id="content" style="margin-top: 0px; overflow-x: hidden;">

        <header id="wx-header">
            <van-nav-bar title="录入股东" left-text="返回" left-arrow @click-left="returnBack" @click-right="searching">
                <template #right>
                    <van-icon name="search" />
                </template>
            </van-nav-bar>
        </header>

        <div class="section-content" style="">
            <section class="section" style="box-shadow: 0 0.13333rem 0.2rem 0 rgb(0 0 0 / 10%);margin-bottom:0.005rem;">

                <div class="weui-cells" style="margin-top:0px;">

                    <div class="weui-cells" style="margin-top:0px;border-bottom:0px solid #fefefe;">
                        <van-notice-bar v-show=" title!='' && title != null && typeof title != 'undefined' " left-icon="volume-o" color="#1989fa" background="#ecf9ff" :text="title" />
                    </div>

                    <div class="" id="scanCell" style="padding: 8px 10px 4px 10px;">
                        <van-row>
                            <van-col span="24" style="text-align: center;font-size:.475rem;">录入股东申请</van-col>
                        </van-row>
                    </div>

                </div>

                <div id="weui-cells-flex" class="weui-cells" style="">

                    <van-cell-group>
                        <van-form>
                            <van-cell-group style="margin-top:10px;">
                                <van-field clearable label="录入日期" v-model="state.item.create_time" placeholder="请输入录入日期" readonly />
                                <common-select :showTag="state.tag.showCompanyName" :modelColumns="state.companyNameColumns" fieldName="companyName" :modelValue="state.item.companyName" :element="state.item" type="company_ic" v-model="state.item.companyName" labelName="公司名称" placeholderName="请填写公司名称" @search="commonSearch" @confirm="commonConfirm" />
                            </van-cell-group>

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
            <van-button plain hairline type="info" style="width:37.5%;" @click="cancel">取消</van-button>
            <van-button plain hairline type="primary" style="width:37.5%;margin-left:0.5rem;" @click="confirm">确定</van-button>
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
    name: "companyStockholder",
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
            companyTypeColumns: ['有限公司', '股份公司'],
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
                shareholder: '',
            },
            item: {
                create_time: dayjs().format('YYYY-MM-DD'),
                companyName: '', //公司名称
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
                minDate: new Date(1970, 0, 1),
                maxDate: new Date(2099, 12, 31),
            },
            tag: {
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
            show: true,
            message: {},
            step: 'one',
        });

        onMounted(() => {
            window.addEventListener("scroll", pageScroll);
        });

        //返回上一页函数
        const returnBack = (back = '/company') => {
            back = $route.query.back ? $route.query.back : '/company';
            $router.push(back);
        };

        const searching = () => {
            console.log('searching');
        };

        const pageScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 100 ?  (headerActive.value = true) :  (headerActive.value = false);
        };

        //确认数据函数
        const commonConfirm = async (index, value, key, item, type='') => {
            await Betools.manage.commonDataConfirm(index, value, key, item, state, Dialog, type);
        };

        //搜索数据函数
        const commonSearch = async (data, value, key, fieldKey, type = 'user') => {
            await Betools.manage.commonDataSearch(data, value, key, fieldKey, state, type);
        };

        //取消函数
        const cancel = async() => {
            await Betools.manage.cancelAndBack(Dialog, returnBack, '取消录入股东申请？') ;
        };
        
        //确认函数
        const confirm = async(result = null , elem = null , nodes = []) => {
            await Betools.manage.confirmCompanyStockholder(result, elem, nodes, state, Dialog, returnBack);
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
            cancel,
            confirm,
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../base/base.scss";
@import "../base/company.scss";
</style>
