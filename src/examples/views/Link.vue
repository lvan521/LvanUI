<template>
  <div class="container">
    <div class="title">
      <h2>Link文字链接</h2>
      <p class="intro">文字超链接</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>基础用法</h3>
        <p class="intro">基础的文字链接用法。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-link>默认链接</lvan-link>
              <lvan-link type="primary">主要链接</lvan-link>
              <lvan-link type="success">成功链接</lvan-link>
              <lvan-link type="warning">警告链接</lvan-link>
              <lvan-link type="danger">危险链接</lvan-link>
              <lvan-link type="info">信息链接</lvan-link>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-link>默认链接&lt;/lvan-link&gt;
  &lt;lvan-link type="primary"&gt;主要链接&lt;/lvan-link&gt;
  &lt;lvan-link type="success"&gt;成功链接&lt;/lvan-link&gt;
  &lt;lvan-link type="warning"&gt;警告链接&lt;/lvan-link&gt;
  &lt;lvan-link type="danger"&gt;危险链接&lt;/lvan-link&gt;
  &lt;lvan-link type="info"&gt;信息链接&lt;/lvan-link&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>禁用状态</h3>
        <p class="intro">文字链接不可用状态。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-link disabled>默认链接</lvan-link>
              <lvan-link disabled type="primary">主要链接</lvan-link>
              <lvan-link disabled type="success">成功链接</lvan-link>
              <lvan-link disabled type="warning">警告链接</lvan-link>
              <lvan-link disabled type="danger">危险链接</lvan-link>
              <lvan-link disabled type="info">信息链接</lvan-link>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-link disabled&gt;默认链接&lt;/lvan-link&gt;
  &lt;lvan-link disabled type="primary"&gt;主要链接&lt;/lvan-link&gt;
  &lt;lvan-link disabled type="success"&gt;成功链接&lt;/lvan-link&gt;
  &lt;lvan-link disabled type="warning"&gt;警告链接&lt;/lvan-link&gt;
  &lt;lvan-link disabled type="danger"&gt;危险链接&lt;/lvan-link&gt;
  &lt;lvan-link disabled type="info"&gt;信息链接&lt;/lvan-link&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>下划线</h3>
        <p class="intro">文字链接下划线。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-link>有下划线</lvan-link>
              <lvan-link :underline="false">无下划线</lvan-link>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-link&gt;有下划线&lt;/lvan-link&gt;
  &lt;lvan-link :underline="false"&gt;无下划线&lt;/lvan-link&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>Attributes</h3>
        <options-table :data="attributes"></options-table>
      </section>
      <section>
        <h3>Events</h3>
        <options-table type="Events" :data="EventsData"></options-table>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {},
  data () {
    return {
      attributes: [{
        name: 'type',
        explain: '类型',
        type: 'string',
        options: 'primary / success / warning / danger / info',
        default: 'default'
      }, {
        name: 'underline',
        explain: '是否下划线',
        type: 'boolean',
        options: '—',
        default: 'true'
      }, {
        name: 'disabled',
        explain: '是否禁用状态',
        type: 'boolean',
        options: '—',
        default: 'true'
      }, {
        name: 'href',
        explain: '原生 href 属性',
        type: 'string',
        options: '—',
        default: '#'
      }, {
        name: 'target',
        explain: '原生 target 属性',
        type: 'string',
        options: '—',
        default: '_self'
      }],
      EventsData: [{
        name: 'click',
        explain: '点击事件(禁用状态下不可用)',
        default: '(event: Event)'
      }]
    }
  }
})
export default class Link extends Vue {
}
</script>

<style lang="scss" scoped>
.lvan-link {
    margin-right: 5px;
}
</style>
