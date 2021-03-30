<template>
<div class="common-select">
    <van-field required :readonly="false" clickable clearable :label="labelName" v-model="modelValue" :placeholder="placeholderName">
        <template #button>
            <van-button size="small" type="primary" @click="commonSearch(null, element, fieldName , fieldName_ , type)">{{ buttonName }}</van-button>
        </template>
    </van-field>

    <van-radio-group v-if="showTag" v-model="radioName" style="max-height:120px;overflow-y: scroll;">
        <van-cell-group>
            <template :key="item.id || index " v-for="(item,index) in modelColumns ">
                <van-cell :index="index" :title="item.title || item.name || item" clickable @click="commonConfirm(index, item, fieldName, element, type);">
                    <template #right-icon>
                        <van-radio :name="index" />
                    </template>
                </van-cell>
            </template>
        </van-cell-group>
    </van-radio-group>
</div>
</template>

<script>
import { toRef, toRefs, watch } from 'vue'
export default {
  props: {
    showTag:{
      type: Boolean,
      default: false
    },
    radioName:{
      type: String,
      default: ''
    },
    modelColumns: {
      type: Array,
      default: () => []
    },
    fieldName: {
      type: String,
      default: ''
    },
    fieldName_: {
      type: String,
      default: ''
    },
    element: {
      type: Object,
      default: {}
    },
    type: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    labelName: {
      type: String,
      default: ''
    },
    placeholderName:{
      type: String,
      default: '请输入数据'
    },
    buttonName:{
      type: String,
      default: '查询'
    },
  },
  emits: ['change','search','confirm'],
  name: "commonSelect",
  setup(props, { slots, emit }) {
    const mprops = toRefs(props);
    watch(
      () => props.modelValue,
      value => {
        const {element,fieldName} = mprops;
        element[fieldName] = value;
        console.log(`change: ${value}, ${element[fieldName]}`);
        emit('change', value); 
      }
    );
    const commonSearch = (data, element, fieldName , fieldName_ , type) => {
      element[fieldName] = mprops.modelValue.value;
      fieldName_ = fieldName_ ? fieldName_ : fieldName;
      console.log(`search: data:${data} ${mprops.modelValue.value}, element:${element}, fieldName:${fieldName}, fieldName_:${fieldName_}, type:${type}`);
      emit('search', data, element, fieldName , fieldName_ , type);
    };
    const commonConfirm = (index, item, fieldName, element, type,  value = '') => {
      value = item && !Betools.tools.isNull(item['lastname']) ? item['lastname'] : (item && !Betools.tools.isNull(item['name']) ? item['name']: item);
      console.log(`confirm: index:${index}, item:${item}, value:${value}, fieldName:${fieldName}, element:${element}`);
      emit('confirm', index, value, fieldName, element, type);
    };
    return {
        commonSearch,
        commonConfirm,
    };
  }
};
</script>

<style lang="scss" scoped>
.van-button--small {
    height: 0.60333rem;
    padding: 0 0.21333rem;
    font-size: 0.32rem;
}
</style>
