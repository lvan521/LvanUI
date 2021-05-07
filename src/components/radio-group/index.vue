<template>
  <div
    ref="radioGroup"
    role="radioGroup"
    class="lvan-radio-group"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { UPDATE_MODEL_EVENT } from '@/utils/constants'
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'LvanRadioGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [UPDATE_MODEL_EVENT, 'change'],
  methods: {
    changeEvent (val) {
      this.$emit(UPDATE_MODEL_EVENT, val)
      this.$nextTick(() => {
        this.$emit('change', val)
      })
    }
  }
})
export default class LvanRadioGroup extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
