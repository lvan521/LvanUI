<template>
  <div class="lvan-row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'LvanRow',
  props: {}
})
export default class LvanRow extends Vue {}
</script>

<style lang="scss" scoped>
</style>
