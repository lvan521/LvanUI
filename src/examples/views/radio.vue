<template>
  <div class="container">
    <div class="title">
      <h2>Radio 单选框</h2>
      <p class="intro">在一组备选项中进行单选。</p>
    </div>
    <div class="content-warp">
      <section>
        <h3>基础用法</h3>
        <p class="intro">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-radio v-model="radio" label="1">备选项1</lvan-radio>
              <lvan-radio v-model="radio" label="2">备选项2</lvan-radio>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:description>
              要使用 Radio 组件，只需要设置 v-model 绑定变量，选中意味着变量的值为相应 Radio label 属性的值，label 可以是 String、Number 或 Boolean。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;template&gt;
  &lt;lvan-radio v-model="radio" label="1"&gt;备选项&lt;/lvan-radio&gt;
  &lt;lvan-radio v-model="radio" label="2"&gt;备选项&lt;/lvan-radio&gt;
&lt;template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
&lt;script&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>禁用状态</h3>
        <p class="intro">单选框不可用的状态。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-radio disabled v-model="disabledRadio" label="禁用">禁用状态</lvan-radio>
              <lvan-radio disabled v-model="disabledRadio" label="选中并禁用">选中并禁用状态</lvan-radio>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:description>
              只要在 lvan-radio 元素中设置 disabled 属性即可，它接受一个 Boolean，true 为禁用。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;template&gt;
  &lt;lvan-radio disabled v-model="radio" label="禁用"&gt;禁用状态&lt;/lvan-radio&gt;
  &lt;lvan-radio disabled v-model="radio" label="选中并禁用"&gt;选中并禁用状态&lt;/lvan-radio&gt;
&lt;template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '选中并禁用'
      };
    }
  }
&lt;script&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>单选框组</h3>
        <p class="intro">适用于在多个互斥的选项中选择的场景。</p>
        <div class="demo-block">
          <div class="views">
            <lvan-row>
              <lvan-radio-group v-model="groupRadio">
                <lvan-radio label="1">备选项1</lvan-radio>
                <lvan-radio label="2">备选项2</lvan-radio>
                <lvan-radio label="3">备选项3</lvan-radio>
              </lvan-radio-group>
            </lvan-row>
          </div>
          <code-warp>
            <template v-slot:description>
              结合 lvan-radio-group 元素和子元素 lvan-radio 可以实现单选组，在 lvan-radio-group 中绑定 v-model，在 lvan-radio 中设置好 label 即可，无需再给每一个 lvan-radio 绑定变量，另外，还提供了 change 事件来响应变化，它会传入一个参数 value。
            </template>
            <template v-slot:code>
              <pre>
                <code class="lang-html">
&lt;template&gt;
  &lt;lvan-radio-group v-model="radio"&gt;
    &lt;lvan-radio label="1"&gt;备选项1&lt;/lvan-radio&gt;
    &lt;lvan-radio label="2"&gt;备选项2&lt;/lvan-radio&gt;
    &lt;lvan-radio label="3"&gt;备选项3&lt;/lvan-radio&gt;
  &lt;/lvan-radio-group&gt;
&lt;template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
&lt;script&gt;
                </code>
              </pre>
            </template>
          </code-warp>
        </div>
      </section>
      <section>
        <h3>Radio Attributes</h3>
        <options-table :data="attributes"></options-table>
      </section>
      <section>
        <h3>Radio Events</h3>
        <options-table type="Events" :data="EventsData"></options-table>
      </section>
      <section>
        <h3>Radio-group Attributes</h3>
        <options-table :data="groupAttributes"></options-table>
      </section>
      <section>
        <h3>Radio-group Events</h3>
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
      radio: '1',
      disabledRadio: '选中并禁用',
      groupRadio: '1',
      attributes: [{
        name: 'v-model',
        explain: '绑定值',
        type: 'string / number / boolean',
        options: '—',
        default: '—'
      }, {
        name: 'label',
        explain: 'Radio 的 value',
        type: 'string / number / boolean',
        options: '—',
        default: '—'
      }, {
        name: 'disabled',
        explain: '是否禁用状态',
        type: 'boolean',
        options: '—',
        default: 'false'
      }, {
        name: 'name',
        explain: '原生 name 属性',
        type: 'string',
        options: '—',
        default: '—'
      }],
      EventsData: [{
        name: 'change',
        explain: '绑定值变化时触发的事件',
        default: '选中的 Radio label 值'
      }],
      groupAttributes: [{
        name: 'v-model',
        explain: '绑定值',
        type: 'string / number / boolean',
        options: '—',
        default: '—'
      }]
    }
  }
})

export default class Radio extends Vue {}
</script>

<style lang="scss" scoped>
</style>
