<template>
  <header>
    <div class="logo">
      <img src="../assets/img/logo.png" alt="lvan-ui">
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {}
})
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
header {
  padding: 0 50px;
}
.logo {
  height: 80px;
}
</style>
