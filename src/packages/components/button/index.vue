<template>
  <button
    :class="[
      'lvan-button',
      `lvan-button-${type}`,
      size ? `lvan-button-${size}` : '',
      {'is-disabled': disabled},
      {'is-plain': plain},
      {'is-round': round},
      {'is-circle': circle},
    ]"
    :type="nativeType"
    @click="handleClick"
    >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default" class="lvan-button--inner">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { isValidComponentType, isValidComponentSize } from '../../assets/utils/validators'

@Options({
  name: 'lvanButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: isValidComponentType
    },
    size: {
      type: String,
      default: '',
      validator: isValidComponentSize
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val)
      }
    }
  },
  emits: ['click'],
  methods: {
    handleClick (event: Event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
})
export default class LvanButton extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base-color.scss';

@for $i from 1 through length($button-types) {
  .lvan-button {
    &.lvan-button-#{nth($button-types, $i)} {
      border-color: #{nth($button-colors, $i)};
      background-color: #{nth($button-colors, $i)};
      &:hover, &:focus {
        border-color: #{nth($button-hover-colors, $i)};
        background-color: #{nth($button-hover-colors, $i)};
      }
      &:active {
        border-color: #{nth($button-active-colors, $i)};
        background-color: #{nth($button-active-colors, $i)};
      }
      &.is-plain {
        color: #{nth($button-colors, $i)};
        border-color: #{nth($button-plain-border-colors, $i)};
        background-color: #{nth($button-plain-bgc, $i)};
        &:hover, &:active, &:focus {
          color: #fff;
          border-color: #{nth($button-colors, $i)};
          background-color: #{nth($button-colors, $i)};
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:active, &.is-disabled:focus {
          color: #{nth($button-plain-disabled-colors, $i)};;
          border-color: #{nth($button-plain-disabled-border-colors, $i)};
          background-color: #{nth($button-plain-bgc, $i)};
        }
      }
      &.is-disabled, &.is-disabled:hover, &.is-disabled:active, &.is-disabled:focus {
        border-color: #{nth($button-disabled-colors, $i)};
        background-color: #{nth($button-disabled-colors, $i)};
      }
    }
  }
}

.lvan-button {
  cursor: pointer;
  color: #fff;
  display: inline-block;
  min-height: 40px;
  text-align: center;
  padding: 12px 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 1;
  transition: .1s;
  &.lvan-button-default {
    color: $default-color;
    border-color: #dcdfe6;
    background-color: #fff;
    &:hover, &:focus {
      color: $primary-color;
      border-color: #c6e2ff;
      background-color: #{nth($button-plain-bgc, 1)};
    }
    &:active {
      color: #{nth($button-active-colors, 1)};
      border-color: #{nth($button-active-colors, 1)};
    }
    &.is-plain {
      &:hover, &:active, &:focus {
        color: $primary-color;
        border-color: $primary-color;
        background-color: #fff;
      }
    }
    &.is-disabled, &.is-disabled:hover, &.is-disabled:active, &.is-disabled:focus {
      color: $default-disabled-color;
      border-color: #ebeef5;
      background-color: #fff;
    }
  }
  &.lvan-button-text {
    color: $primary-color;
    border-color: transparent;
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    &.is-disabled, &.is-disabled:active, &.is-disabled:focus {
      color: $default-disabled-color;
    }
    &:active {
      color: #{nth($button-active-colors, 1)};
    }
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled {
    cursor: not-allowed;
  }
  &.lvan-button-medium {
    min-height: 36px;
    padding: 10px 20px;
  }
  &.lvan-button-small,  &.lvan-button-mini {
    font-size: 12px;
  }
  &.lvan-button-small {
    min-height: 32px;
    padding: 9px 15px;
  }
  &.lvan-button-mini {
    min-height: 28px;
    padding: 7px 15px;
  }
}
</style>
