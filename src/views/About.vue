<template>
  <div class="container">
    <div class="title">
      <h2>关于</h2>
      <p class="intro">本节将介绍 Lvan UI。</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>说明</h3>
        <p class="intro">作者：lvan</p>
        <p class="intro">CSDN 账号：<lvan-link type="primary" href="https://blog.csdn.net/l508742729" target="_blank">找不到bug的猿</lvan-link></p>
        <p class="intro">githup 项目地址：<lvan-link type="primary" href="https://github.com/lvan521/LvanUI" target="_blank">LvanUI</lvan-link></p>
        <p class="intro">码云 项目地址：<lvan-link type="primary" href="https://gitee.com/xf727/lvan-ui" target="_blank">Lvan-UI</lvan-link></p>
        <p class="intro">本项目仅作为模仿练习 <lvan-link type="primary" href="https://element-plus.gitee.io/#/zh-CN/component/installation" target="_blank">ElementPlus</lvan-link> 的vue组件封装参考，不用于任何商业性质活动。</p>
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
