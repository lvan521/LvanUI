<template>
  <label
    :class="[
      'lvan-radio',
      {'is-checked': model === label},
      {'is-disabled': disabled}
    ]"
    role="radio"
    :aria-checked="model === label"
  >
    <span class="lvan-radio_input">
      <span class="lvan-radio_inner"></span>
      <input
        ref="radioRef"
        v-model="model"
        :value="label"
        type="radio"
        :name="name"
        :disabled="disabled"
        aria-hidden="true"
        @change="handleChange"
      >
    </span>
    <span class="lvan-radio_label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts">
import { UPDATE_MODEL_EVENT } from '@/utils/constants'
import { Options, Vue } from 'vue-class-component'

type valModel = string | number | boolean

@Options({
  name: 'LvanRadio',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 原生name属性
    name: {
      type: String,
      default: ''
    }
  },
  emits: [UPDATE_MODEL_EVENT, 'change'],
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name !== 'LvanRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      get (): valModel {
        return this.isGroup ? this._radioGroup.modelValue : this.modelValue
      },
      set (val: valModel) {
        this.isGroup ? this._radioGroup.changeEvent(val) : this.$emit(UPDATE_MODEL_EVENT, val)
      }
    }
  },
  methods: {
    handleChange () {
      // this.$nextTick(() => {
      this.$emit('change', this.modelValue)
      // })
    }
  }
})
export default class LvanRadio extends Vue {
}
</script>

<style lang="scss" scoped>
.lvan-radio {
  position: relative;
  display: inline-block;
  color: #606266;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 30px;
  .lvan-radio_input {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    input {
      opacity: 0;
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
    .lvan-radio_inner {
      width: 14px;
      height: 14px;
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      &::after {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  &.is-checked {
    .lvan-radio_inner {
      background-color: #409eff;
      border-color: #409eff;
    }
    .lvan-radio_label {
      color: #409eff;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    color: #c0c4cc;
    &.is-checked {
      .lvan-radio_inner {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        &::after {
          background-color: #c0c4cc;
        }
      }
      .lvan-radio_label {
        color: #c0c4cc;
      }
    }
  }
  .lvan-radio_label {
    padding-left: 10px;
  }
}
</style>
