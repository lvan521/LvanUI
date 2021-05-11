<template>
  <div class="container">
    <div class="title">
      <h2>Icon 图标</h2>
      <p class="intro">提供了一套常用的图标集合。</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>使用方法</h3>
        <p class="intro">直接通过设置类名为 lvan-icon-iconName 来使用即可。例如：</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <i class="lvan-icon-dianzan"></i>
              <i class="lvan-icon-ditu"></i>
              <i class="lvan-icon-dingdan"></i>
              <i class="lvan-icon-nan"></i>
              <i class="lvan-icon-nv"></i>
              <i class="lvan-icon-editor"></i>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;i class="lvan-icon-dianzan"&gt;&lt;/i&gt;
  &lt;i class="lvan-icon-ditu"&gt;&lt;/i&gt;
  &lt;i class="lvan-icon-dingdan"&gt;&lt;/i&gt;
  &lt;i class="lvan-icon-nan"&gt;&lt;/i&gt;
  &lt;i class="lvan-icon-nv"&gt;&lt;/i&gt;
  &lt;i class="lvan-icon-editor"&gt;&lt;/i&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>图标集合</h3>
        <div class="demo-block">
          <ul class="icon-list">
            <li v-for="(icon, index) in iconList" :key="index">
              <i :class="`lvan-icon-${icon}`"></i>
              <span class="icon-name">{{`lvan-icon-${icon}`}}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ICONDATA } from '../assets/ts/iconData'

@Options({
  props: {},
  data () {
    return {
      iconList: ICONDATA
    }
  }
})
export default class Icon extends Vue {
}
</script>

<style lang="scss" scoped>
.views i {
  margin: 0 10px;
  vertical-align: middle;
}
.icon-list {
  overflow: hidden;
  li {
    width: 14.28%;
    float: left;
    text-align: center;
    height: 140px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    i {
      display: block;
      font-size: 2em;
      margin: 40px 0 20px;
      transition: color .15s linear;
    }
    span {
      vertical-align: middle;
      color: #99a9bf;
      transition: color .15s linear;
    }
    &:hover i, &:hover span {
      color: #5cb6ff;
    }
  }
}
</style>
