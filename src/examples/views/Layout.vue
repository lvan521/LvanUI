<template>
  <div class="container">
    <div class="title">
      <h2>Layout 布局</h2>
      <p class="intro">通过基础的 24 分栏，迅速简便地创建布局。</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>基础布局</h3>
        <p class="intro">使用单一分栏创建基础的栅格布局。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-link>待补充相关页面示例</lvan-link>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-link>待补充相关页面代码示例&lt;/lvan-link&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>Attributes</h3>
        <options-table></options-table>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {}
})

export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
</style>
