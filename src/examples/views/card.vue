<template>
  <div class="container">
    <div class="title">
      <h2>Card 卡片</h2>
      <p class="intro">将信息聚合在卡片容器中展示。</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>基础用法</h3>
        <p class="intro">包含标题，内容和操作。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-card>
              <template #header>
                <span class="header-title">卡片名称</span>
                <lvan-button type="text" class="button">操作按钮</lvan-button>
              </template>
              <ul>
                <li v-for="i in 4" :key="i">{{`列表内容 ${i}`}}</li>
              </ul>
            </lvan-card>
          </div>
          <code-warp>
            <template v-slot:description>
              Card 组件包括 header 和 body 部分，header 部分需要有显式具名 slot 分发，同时也是可选的。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-card&gt;
  &lt;template #header&gt;
    &lt;span class="header-title"&gt;卡片名称&lt;/span&gt;
    &lt;lvan-button type="text" class="button"&gt;操作按钮&lt;/lvan-button&gt;
  &lt;/template&gt;
  &lt;ul&gt;
    &lt;li v-for="i in 4" :key="i"&gt;&#123;&#123;`列表内容 ${i}`&#125;&#125;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/lvan-card&gt;

&lt;style&gt;
  .lvan-card {
    width: 480px;
  }
  .header-title {
    font-size: 16px;
  }
  li {
    line-height: 36px;
  }
&lt;/style&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>简单卡片</h3>
        <p class="intro">卡片可以只有内容区域。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-card>
              <ul>
                <li v-for="i in 4" :key="i">{{`列表内容 ${i}`}}</li>
              </ul>
            </lvan-card>
          </div>
          <code-warp>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-card&gt;
  &lt;ul&gt;
    &lt;li v-for="i in 4" :key="i"&gt;&#123;&#123;`列表内容 ${i}`&#125;&#125;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/lvan-card&gt;

&lt;style&gt;
  .lvan-card {
    width: 480px;
  }
  li {
    line-height: 36px;
  }
&lt;/style&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>卡片阴影</h3>
        <p class="intro">可对阴影的显示进行配置。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-card shadow="always">
              <div>总是显示</div>
            </lvan-card><br>
            <lvan-card shadow="hover">
              <div>鼠标悬浮时显示</div>
            </lvan-card><br>
            <lvan-card shadow="never">
              <div>从不显示</div>
            </lvan-card>
          </div>
          <code-warp>
            <template v-slot:description>
              通过 shadow 属性设置卡片阴影出现的时机：always、hover 或 never。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;lvan-card shadow="always"&gt;
  &lt;div&gt;总是显示&lt;/div&gt;
&lt;/lvan-card&gt;

&lt;lvan-card shadow="hover"&gt;
  &lt;div&gt;鼠标悬浮时显示&lt;/div&gt;
&lt;/lvan-card&gt;

&lt;lvan-card shadow="never"&gt;
  &lt;div&gt;从不显示&lt;/div&gt;
&lt;/lvan-card&gt;
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
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  data () {
    return {
      attributes: [{
        name: 'shadow',
        explain: '设置阴影显示时机',
        type: 'string',
        options: 'always / hover / never',
        default: 'always'
      }]
    }
  }
})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.lvan-card {
  width: 480px;
  .header-title {
    font-size: 16px;
  }
  li {
    line-height: 36px;
  }
}
</style>
