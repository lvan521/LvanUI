<template>
  <a
    :href="disabled ? null : href"
    :target="target"
    :class="[
      'lvan-link',
      type ? `lvan-link-${type}` : '',
      {'is-underline': underline},
      {'is-disabled': disabled}
    ]"
    @click="handleClick"
    >
    <span v-if="$slots.default" class="lvan-link--inner">
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { isValidComponentType } from '../../assets/utils/validators'

@Options({
  name: 'LvanLink',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: isValidComponentType
    },
    href: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: true
    },
    target: {
      type: String,
      default: '_self'
    }
  },
  emits: ['click'], // 定义组件发出的事件
  methods: {
    handleClick (event: Event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
})
export default class LvanLink extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base-color.scss';

@for $i from 1 through length($types) {
  .lvan-link {
    &.lvan-link-#{nth($types, $i)} {
      color: #{nth($base-colors, $i)};
      &.is-disabled {
        color: #{nth($disabled-colors, $i)};
      }
    }
  }
}

.lvan-link {
  &.lvan-link-default:hover {
    color: $primary-color;
  }
  &.lvan-link-default.is-disabled:hover {
    color: $default-disabled-color;
  }
  &.is-underline {
    &:hover {
      text-decoration: underline;
    }
    &.is-disabled {
      cursor: not-allowed;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
