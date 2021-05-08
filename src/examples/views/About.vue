<template>
  <div class="container">
    <div class="title">
      <h2>关于</h2>
      <p class="intro">本节将介绍 Lvan UI 组件库。</p>
    </div>
    <div class="content-warp">
      <section>
        <lvan-card>
          <h3>特别说明</h3>
          <p class="intro">作者：lvan</p>
          <p class="intro">CSDN 账号：<lvan-link type="primary" href="https://blog.csdn.net/l508742729" target="_blank">找不到bug的猿</lvan-link></p>
          <p class="intro">githup 项目地址：<lvan-link type="primary" href="https://github.com/lvan521/LvanUI" target="_blank">https://github.com/lvan521/LvanUI</lvan-link></p>
          <p class="intro">码云 项目地址：<lvan-link type="primary" href="https://gitee.com/xf727/lvan-ui" target="_blank">https://gitee.com/xf727/lvan-ui</lvan-link></p>
          <p class="intro">
            特别提醒：本项目仅作为模仿练习
            <lvan-link type="primary" href="https://github.com/element-plus/element-plus" target="_blank"> ElementPlus </lvan-link>
            的vue组件封装参考，不用于任何商业性质活动。
          </p>
          <p class="intro">最终解释权归学者本人所有。</p>
        </lvan-card>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
</style>
