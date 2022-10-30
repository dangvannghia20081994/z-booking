<template>
  <div class="e-booking">
    <div class="fixed-top top-menu bg-success d-flex align-items-center justify-content-between gap-3">
      <img src="/images/logo-left.png" class="logo-left" alt=""/>
      <div class="sub-menu ms-auto text-white d-flex gap-4">
        <span>ホーム</span>
        <span>管理者設定</span>
        <span>システム設定</span>
        <span>ログアウト</span>
      </div>
      <img src="/images/logo-right.png" class="logo-right h-100 w-auto" alt=""/>
    </div>
    <div>
      <Sidebar />
      <div class="app-content">
        <nuxt />
      </div>
    </div>
    <div class="fixed-bottom footer-menu bg-primary d-flex align-items-center justify-content-end text-white gap-3">
      <span>Copyright IMG-flow All Rights Reserved.</span>
      <span class="back-top bg-success"></span>
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/Sidebar'
export default {
  components: { Sidebar }
}
</script>
<style lang="scss">
</style>
