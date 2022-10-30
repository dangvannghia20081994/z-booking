<template>
  <div class="page-2">
    <div class="title text-dark fw-bold">ホーム</div>
    <div class="row gy-3">
      <div class="col-lg-3">
        <div class="border border-success block-content-top d-flex align-items-center justify-content-between text-primary fw-bold">
          <span class="icon">icon</span>
          <div class="content text-end">
            <div><span class="number me-1">15</span><span class="text-dark">件</span></div>
            <div class="text-dark">本日全店舗予約数</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="border border-success block-content-top d-flex align-items-center justify-content-between text-primary fw-bold">
          <span class="icon">icon</span>
          <div class="content text-end">
            <div><span class="number me-1">20</span><span class="text-dark">人</span></div>
            <div class="text-dark">会員人数</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="border border-success block-content-top d-flex align-items-center justify-content-between text-primary fw-bold">
          <span class="icon">icon</span>
          <div class="content text-end">
            <div><span class="number">4</span></div>
            <div class="text-dark">全国店舗数</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin'
}
</script>
<style lang="scss">
  .page-2{
    .title{
      font-size: 24px;
      margin-bottom: 20px;
    }
    .block-content-top{
      height: 125px;
      font-size: 18px;
      padding: 20px;
      .icon{
        width: 60px;
        height: 60px;
      }
      .number{
        font-size: 51px;
        line-height: 68px;
      }
    }
  }
</style>
