<template>
  <div class="lvan-col">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'LvanCol',
  props: {}
})
export default class LvanCol extends Vue {}
</script>

<style lang="scss" scoped>
</style>
