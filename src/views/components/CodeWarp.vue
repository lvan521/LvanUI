<template>
  <div class="code-container">
    <div ref="codeRef" class="code-warp" :style="{height: height + 'px'}">
      <div class="description" v-if="$slots.description">
        <p><slot name="description"></slot></p>
      </div>
      <div class="code-source">
        <slot name="code"></slot>
      </div>
    </div>
    <div class="control-btn" @click="handleControl">
        <span><i class="lvan-icon-sorting"></i>{{ height ? '隐藏代码' : '显示代码' }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Prism from 'prismjs'

@Options({
  name: 'CodeWrap',
  data () {
    return {
      height: null,
      hiddenHeight: 0 // 实际高度
    }
  },
  mounted () {
    Prism.highlightAll()
    this.hiddenHeight = this.$refs.codeRef.offsetHeight
    this.height = 0
  },
  methods: {
    handleControl () {
      this.height = this.height ? 0 : this.hiddenHeight
    }
  }
})

export default class CodeWrap extends Vue {}
</script>

<style lang="scss" scoped>
.control-btn {
  i {
    font-size: 1em;
    margin-right: 5px;
  }
}
</style>
