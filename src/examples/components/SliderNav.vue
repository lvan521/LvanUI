<template>
  <nav class="container">
    <div class="support" v-for="support in supportList" :key="support.id">
      <div :class="[
        'support-title',
        {'is-bold': support.bold}
      ]">
        {{support.title}}
      </div>
      <div class="support-box">
        <ul>
          <li v-for="item in support.children" :key="item.id">
            <a :href="item.link" target="_blank">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="side-nav">
      <ul>
        <li class="nav-box" v-for="nav in navList" :key="nav.id">
          <div class="nav-title">{{nav.title}}</div>
          <ul>
            <li v-for="item in nav.children" :key="item.id">
              <router-link :to="item.link" :class="{'active': item.active}" @click="MatchURL(item.link)">{{item.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { SUPPORT_DATA, NAV_DATA } from '@/assets/ts/navData'

@Options({
  props: {},
  data () {
    return {
      supportList: SUPPORT_DATA,
      navList: NAV_DATA
    }
  },
  mounted () {
    this.MatchURL(this.$route.path)
  },
  methods: {
    MatchURL (currentLink: string) {
      this.navList.forEach((nav: any) => {
        nav.children.forEach((item: any) => {
          item.link === currentLink ? item.active = true : item.active = false
        })
      })
    }
  }
})
export default class SliderNav extends Vue {
}
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  height: 100%;
  line-height: 40px;
  overflow-y: auto;
}
.support {
  padding-bottom: 10px;
  .support-title {
    font-size: 14px;
    color: #777;
    &.is-bold {
      color: #444;
      font-weight: 600;
    }
  }
}
.side-nav {
  .nav-box {
    padding-top: 10px;
  }
  .nav-title {
    font-size: 16px;
    font-weight: 600;
  }
}
a {
  display: block;
}
</style>
