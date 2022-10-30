<template>
  <div class="app-sidebar position-fixed start-0 bg-primary vh-100 text-white scrollbar">
    <div class="user-info d-flex align-items-center px-20 gap-2">
      <span class="avatar bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"></span>
      <span>管理マスター</span>
      <span>中村正美</span>
    </div>
    <div class="go-to-web bg-white text-primary d-flex align-items-center justify-content-between">
      <span class="fw-bold">サイトを見る</span>
      <span>icon</span>
    </div>
    <div class="list-menu">
      <div class="menu-item">
        <div class="d-flex align-items-center gap-2 bg-white bg-opacity-10 menu-header pointer">
          <span>icon</span>
          <span>予約管理</span>
        </div>
      </div>
      <div class="menu-item">
        <div class="d-flex align-items-center gap-2 bg-white bg-opacity-10 menu-header pointer">
          <span>icon</span>
          <span>顧客管理</span>
        </div>
      </div>
      <div class="menu-item">
        <div class="d-flex align-items-center gap-2 bg-white bg-opacity-10 menu-header pointer" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false">
          <span>icon</span>
          <span>販促管理</span>
          <span class="ms-auto">icon</span>
        </div>
        <div class="collapse bg-white rounded-0 bg-opacity-25" id="collapse-1">
          <div class="sub-menu">
            <div class="sub-menu-item menu-header pointer">クーポン設定</div>
            <div class="sub-menu-item menu-header pointer">ポイント設定</div>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <div class="d-flex align-items-center gap-2 bg-white bg-opacity-10 menu-header pointer" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false">
          <span>icon</span>
          <span>店舗管理</span>
          <span class="ms-auto">icon</span>
        </div>
        <div class="collapse bg-white rounded-0 bg-opacity-25" id="collapse-2">
          <div class="sub-menu">
            <div class="sub-menu-item menu-header pointer">店舗設定</div>
            <div class="sub-menu-item menu-header pointer">スペース設定</div>
            <div class="sub-menu-item menu-header pointer">オプションカテゴリ設定</div>
            <div class="sub-menu-item menu-header pointer">オプション設定</div>
            <div class="sub-menu-item menu-header pointer">カレンダー設定</div>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <div class="d-flex align-items-center gap-2 bg-white bg-opacity-10 menu-header pointer" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false">
          <span>icon</span>
          <span>お知らせ管理</span>
          <span class="ms-auto">icon</span>
        </div>
        <div class="collapse bg-white rounded-0 bg-opacity-25" id="collapse-3">
          <div class="sub-menu">
            <div class="sub-menu-item menu-header pointer">お知らせ設定</div>
            <div class="sub-menu-item menu-header pointer">カテゴリ設定</div>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <div class="d-flex align-items-center gap-2 bg-white bg-opacity-10 menu-header pointer">
          <span>icon</span>
          <span>消費税率設定</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
  .go-to-web{
    padding: 10px 10px 10px 13px;
    height: 39px;
    margin:20px 20px 0px;
  }
  .list-menu{
    padding-top: 15px;
    .menu-item{
      margin-bottom: 10px;
      .menu-header{
        padding: 15px 17px;
        height: 48px;
      }
      .sub-menu{
        padding-left: 25px;
      }
    }
  }
</style>
