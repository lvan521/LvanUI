<template>
  <div class="container">
    <div class="title">
      <h2>快速上手</h2>
      <p class="intro">本节将介绍 Lvan UI 组件库的安装和引入。</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>安装</h3>
        <p class="intro">推荐使用 npm 的方式安装，它能更好地和 <lvan-link type="primary" href="https://webpack.js.org/">webpack</lvan-link> 打包工具配合使用。</p>
        <pre>
          <code class="lang-javascript">
npm install lvan-ui --save
          </code>
        </pre>
      </section>
      <section>
        <h3>完整引入 Lvan UI</h3>
        <p class="intro">在 main.js / main.ts 中写入以下内容：</p>
        <pre>
          <code class="lang-javascript">
import { createApp } from 'vue'
import LvanUI from 'lvan-ui'
import 'lvan-ui/dist/lvan-ui.css'
import App from './App.vue'

const app = createApp(App)
app.use(LvanUI)
app.mount('#app')
          </code>
        </pre>
        <p class="intro">以上代码便完成了 Lvan UI 的引入。需要注意的是，样式文件需要单独引入。</p>
      </section>
      <section>
        <h3>特别说明</h3>
        <lvan-card style="margin-top: 15px;">
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
import Prism from 'prismjs'

@Options({
  mounted () {
    Prism.highlightAll()
  }
})
export default class QuickStart extends Vue {}
</script>

<style lang="scss" scoped>
section {
  pre {
    margin: 0;
    padding: 1em 1em 0;
    background: #fafafa;
    border: 1px solid #eaeefb;
    border-radius: 4px;
  }
}

</style>
