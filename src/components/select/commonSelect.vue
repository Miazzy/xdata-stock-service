<template>
<div class="common-select">
    <van-field required :readonly="false" clickable clearable :label="labelName" v-model="mobelValue" :placeholder="placeholderName">
        <template #button>
            <van-button size="small" type="primary" @click="commonSearch(null, element, fieldName , fieldName , type)">{{ buttonName }}</van-button>
        </template>
    </van-field>

    <van-radio-group v-if="showTag" v-model="radioName" style="max-height:120px;overflow-y: scroll;">
        <van-cell-group>
            <template :key="item.id || index " v-for="(item,index) in modelColumns ">
                <van-cell :index="index" :title="item.name || item" clickable @click="commonConfirm(index, item, fieldName, element);">
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
import { watch, provide, getCurrentInstance , computed, ref} from 'vue';

export default create({
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
    element: {
      type: Object,
      default: {}
    },
    type: {
      type: String,
      default: ''
    },
    mobelValue: {
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

    watch(
      () => props.modelValue,
      value => {
        emit('change', value);
      }
    );

    const commonSearch = (data, element, fieldName , fieldName_ , type) => {
      emit('search', data, element, fieldName , fieldName_ , type);
    };

    const commonConfirm = (index, item, fieldName, element) => {
      emit('confirm', index, item, fieldName, element);
    };

    return {
        commonSearch,
        commonConfirm,
    };

  }
});
</script>
