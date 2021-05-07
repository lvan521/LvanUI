<template>
  <div class="portal">
    <div class="header">
      <Header/>
    </div>
    <div class="main-cnt">
      <div class="main-nav">
        <SliderNav/>
      </div>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './components/Header.vue' // @ is an alias to /src
import SliderNav from './components/SliderNav.vue'

@Options({
  components: {
    Header,
    SliderNav
  }
})
export default class Portal extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  box-sizing: border-box;
}
.main-cnt {
  position: relative;
  height: 100%;
  min-height: auto;
  padding: 120px 0 0 50px;
  box-sizing: border-box;
}
.main-nav {
  width: 240px;
  position: absolute;
  top: 80px;
  bottom: 0;
  padding-bottom: 50px;
}
.main-content {
  height: 100%;
  padding-bottom: 100px;
  padding-left: 280px;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
