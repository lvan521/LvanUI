<template>
  <div class="container">
    <div class="title">
      <h2>Button 按钮</h2>
      <p class="intro">常用的按钮操作。</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>基础用法</h3>
        <p class="intro">基础的按钮用法。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-button>默认按钮</lvan-button>
              <lvan-button type="primary">主要按钮</lvan-button>
              <lvan-button type="success">成功按钮</lvan-button>
              <lvan-button type="warning">警告按钮</lvan-button>
              <lvan-button type="danger">危险按钮</lvan-button>
              <lvan-button type="info">信息按钮</lvan-button>
            </lvan-row>
            <lvan-row>
              <lvan-button plain>朴素按钮</lvan-button>
              <lvan-button type="primary" plain>主要按钮</lvan-button>
              <lvan-button type="success" plain>成功按钮</lvan-button>
              <lvan-button type="warning" plain>警告按钮</lvan-button>
              <lvan-button type="danger" plain>危险按钮</lvan-button>
              <lvan-button type="info" plain>信息按钮</lvan-button>
            </lvan-row>
            <lvan-row>
              <lvan-button round>圆角按钮</lvan-button>
              <lvan-button type="primary" round>主要按钮</lvan-button>
              <lvan-button type="success" round>成功按钮</lvan-button>
              <lvan-button type="warning" round>警告按钮</lvan-button>
              <lvan-button type="danger" round>危险按钮</lvan-button>
              <lvan-button type="info" round>信息按钮</lvan-button>
            </lvan-row>
            <lvan-row>
              <lvan-button circle icon="lvan-icon-search"></lvan-button>
              <lvan-button type="primary" circle icon="lvan-icon-ashbin"></lvan-button>
              <lvan-button type="success" circle icon="lvan-icon-map"></lvan-button>
              <lvan-button type="warning" circle icon="lvan-icon-play"></lvan-button>
              <lvan-button type="danger" circle icon="lvan-icon-add"></lvan-button>
              <lvan-button type="info" circle icon="lvan-icon-add-cart"></lvan-button>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:description>
              使用 type、plain、round 和 circle 属性来定义 Button 的样式。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-button>默认按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="primary"&gt;主要按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="success"&gt;成功按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="warning"&gt;警告按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="danger"&gt;危险按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="info"&gt;信息按钮&lt;/lvan-button&gt;
&lt;/lvan-row&gt;

&lt;lvan-row&gt;
  &lt;lvan-button plain&gt;朴素按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" plain&gt;主要按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="success" plain&gt;成功按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="warning" plain&gt;警告按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="danger" plain&gt;危险按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="info" plain&gt;信息按钮&lt;/lvan-button&gt;
&lt;/lvan-row&gt;

&lt;lvan-row&gt;
  &lt;lvan-button round&gt;圆角按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" round&gt;主要按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="success" round&gt;成功按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="warning" round&gt;警告按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="danger" round&gt;危险按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="info" round&gt;信息按钮&lt;/lvan-button&gt;
&lt;/lvan-row&gt;

&lt;lvan-row&gt;
  &lt;lvan-button circle icon="lvan-icon-search"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" circle icon="lvan-icon-ashbin"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="success" circle icon="lvan-icon-map"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="warning" circle icon="lvan-icon-play"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="danger" circle icon="lvan-icon-add"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="info" circle icon="lvan-icon-add-cart"&gt;&lt;/lvan-button&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>禁用状态</h3>
        <p class="intro">按钮不可用状态。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-button disabled>默认按钮</lvan-button>
              <lvan-button type="primary" disabled>主要按钮</lvan-button>
              <lvan-button type="success" disabled>成功按钮</lvan-button>
              <lvan-button type="warning" disabled>警告按钮</lvan-button>
              <lvan-button type="danger" disabled>危险按钮</lvan-button>
              <lvan-button type="info" disabled>信息按钮</lvan-button>
            </lvan-row>
            <lvan-row>
              <lvan-button plain disabled>朴素按钮</lvan-button>
              <lvan-button type="primary" plain disabled>主要按钮</lvan-button>
              <lvan-button type="success" plain disabled>成功按钮</lvan-button>
              <lvan-button type="warning" plain disabled>警告按钮</lvan-button>
              <lvan-button type="danger" plain disabled>危险按钮</lvan-button>
              <lvan-button type="info" plain disabled>信息按钮</lvan-button>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:description>
              你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-button disabled>默认按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" disabled&gt;主要按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="success" disabled&gt;成功按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="warning" disabled&gt;警告按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="danger" disabled&gt;危险按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="info" disabled&gt;信息按钮&lt;/lvan-button&gt;
&lt;/lvan-row&gt;

&lt;lvan-row&gt;
  &lt;lvan-button plain disabled&gt;朴素按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" plain disabled&gt;主要按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="success" plain disabled&gt;成功按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="warning" plain disabled&gt;警告按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="danger" plain disabled&gt;危险按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="info" plain disabled&gt;信息按钮&lt;/lvan-button&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>文字按钮</h3>
        <p class="intro">没有边框和背景色的按钮。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-button type="text">文字按钮</lvan-button>
            <lvan-button type="text" disabled>文字按钮</lvan-button>
          </div>
          <code-warp>
            <template v-slot:description>
              使用 type="text" 配置一个没有边框和背景色的按钮。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-button type="text" &gt;文字按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="text" disabled&gt;文字按钮&lt;/lvan-button&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>图标按钮</h3>
        <p class="intro">带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-button type="primary" icon="lvan-icon-search">搜索</lvan-button>
              <lvan-button type="primary" icon="lvan-icon-resonserate"></lvan-button>
              <lvan-button type="primary" icon="lvan-icon-set"></lvan-button>
              <lvan-button type="primary" icon="lvan-icon-upload"></lvan-button>
              <lvan-button type="danger">危险<i class="lvan-icon-warning"></i></lvan-button>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:description>
              设置icon属性即可，icon 的列表可以参考 Element Plus 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-button type="primary" icon="lvan-icon-search"&gt;搜索&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" icon="lvan-icon-resonserate"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" icon="lvan-icon-set"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" icon="lvan-icon-upload"&gt;&lt;/lvan-button&gt;
  &lt;lvan-button type="danger"&gt;危险&lt;i class="lvan-icon-warning"&gt;&lt;/i&gt;&lt;/lvan-button&gt;
&lt;/lvan-row&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>不同尺寸</h3>
        <p class="intro">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-button>默认按钮</lvan-button>
              <lvan-button type="primary" size="medium">中等按钮</lvan-button>
              <lvan-button type="success" size="small" plain>小型按钮</lvan-button>
              <lvan-button type="danger" size="mini">超小按钮</lvan-button>
            </lvan-row>
            <lvan-row>
              <lvan-button plain round>默认按钮</lvan-button>
              <lvan-button type="warning" size="medium" plain round>中等按钮</lvan-button>
              <lvan-button type="info" size="small" disabled round>小型按钮</lvan-button>
              <lvan-button size="mini" round>超小按钮</lvan-button>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:description>
              额外的尺寸：medium、small、mini，通过设置 size 属性来配置它们。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-row&gt;
  &lt;lvan-button&gt;默认按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="primary" size="medium"&gt;中等按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="success" size="small" plain&gt;小型按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="danger" size="mini"&gt;超小按钮&lt;/lvan-button&gt;
&lt;/lvan-row&gt;

&lt;lvan-row&gt;
  &lt;lvan-button plain round&gt;默认按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="warning" size="medium" plain round&gt;中等按钮&lt;/lvan-button&gt;
  &lt;lvan-button type="info" size="small" disabled round&gt;小型按钮&lt;/lvan-button&gt;
  &lt;lvan-button size="mini" round&gt;超小按钮&lt;/lvan-button&gt;
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
        options: 'primary / success / warning / danger / info / text',
        default: 'default'
      }, {
        name: 'size',
        explain: '尺寸',
        type: 'string',
        options: 'medium / small / mini',
        default: '—'
      }, {
        name: 'plain',
        explain: '是否朴素按钮',
        type: 'boolean',
        options: '—',
        default: 'false'
      }, {
        name: 'round',
        explain: '是否圆角按钮',
        type: 'boolean',
        options: '—',
        default: 'false'
      }, {
        name: 'circle',
        explain: '是否圆形按钮',
        type: 'boolean',
        options: '—',
        default: 'false'
      }, {
        name: 'disabled',
        explain: '是否禁用状态',
        type: 'boolean',
        options: '—',
        default: 'false'
      }, {
        name: 'icon',
        explain: '图标类名',
        type: 'string',
        options: '—',
        default: '—'
      }, {
        name: 'native-type',
        explain: '原生 type 属性',
        type: 'string',
        options: 'button / submit / reset',
        default: 'button'
      }],
      EventsData: [{
        name: 'click',
        explain: '点击事件(禁用状态下不可用)',
        default: '(event: Event)'
      }]
    }
  }
})
export default class Link extends Vue {}
</script>

<style lang="scss" scoped>
.lvan-button {
    margin-right: 10px;
}
.lvan-row {
  margin-bottom: 20px;
}
</style>
