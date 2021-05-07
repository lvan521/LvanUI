<template>
  <div class="options-table">
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in thead" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-if="item.name">{{item.name}}</td>
          <td v-if="item.explain">{{item.explain}}</td>
          <td v-if="item.type">{{item.type}}</td>
          <td v-if="item.options">{{item.options}}</td>
          <td v-if="item.default">{{item.default}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'OptionsTable',
  props: {
    type: {
      type: String,
      default: 'Attributes'
    },
    data: {
      type: Array,
      default: [{
        name: '—',
        explain: '—',
        type: '—',
        options: '—',
        default: '—'
      }]
    }
  },
  data () {
    return {
      thead: ['参数', '说明', '类型', '可选值', '默认值']
    }
  },
  mounted () {
    if (this.type === 'Events') {
      this.thead = ['事件名称', '说明', '回调参数']
    }
    if (this.type === 'Methods') {
      this.thead = ['方法名', '说明', '参数']
    }
  }
})
export default class OptionsTable extends Vue {
}
</script>

<style scoped lang="scss">
.options-table {
  margin-top: 20px;
  table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      white-space: nowrap;
      tr {
          border-bottom: 1px solid #dcdfe6;
          th {
              color: #909399;
              font-weight: 400;
              padding: 15px;
              max-width: 250px;
          }
          td {
              color: #606266;
              padding: 15px;
          }
      }
  }
}
</style>
