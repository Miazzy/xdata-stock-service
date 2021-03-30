<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { ref, reactive, onMounted, computed, getCurrentInstance } from "vue";
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  setup(initProps, setupContext) {
    const ctx = getCurrentInstance();
    const iconName = computed(() => {
      return `#icon-${initProps.iconClass}`;
    });
    const svgClass = computed(() => {
      if (initProps.className) {
        return "svg-icon " + initProps.className;
      } else {
        return "svg-icon";
      }
    });
    return {
      iconName,
      svgClass
    };
  }
};
</script>

<style scoped>
.svg-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
