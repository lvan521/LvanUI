<template>
  <div :class="[
    'lvan-card',
    `is-${shadow}-shadow`
  ]">
    <div class="lvan-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="lvan-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'LvanCard',
  props: {
    shadow: {
      type: String,
      default: 'always',
      validator: (val: string) => {
        return ['always', 'hover', 'never'].includes(val)
      }
    }
  }
})
export default class LvanCard extends Vue {}
</script>

<style lang="scss" scoped>
.lvan-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  transition: .3s;
  .lvan-card-header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lvan-card-body {
    padding: 20px;
  }
  &.is-always-shadow, &.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }
}
</style>
