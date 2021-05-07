<template>
  <i :class="`lvan-icon-${name}`"></i>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'LvanIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
})
export default class LvanIcon extends Vue {}
</script>

<style lang="scss" scoped>
</style>
