<template>
  <div class="page-login d-flex flex-column justify-content-center align-items-center">
    <div class="title text-dark">管理者ログイン</div>
    <div class="form-login bg-white">
      <div class="d-flex align-items-center">
        <label class="flex-shrink-0">ログインID</label>
        <input class="form-control" />
      </div>
      <div class="d-flex align-items-center">
        <label class="flex-shrink-0">パスワード</label>
        <input class="form-control" />
      </div>
      <div class="small">
        ※ID・パスワードが不明の場合はマスター管理者にご確認ください。
      </div>
      <div class="d-flex align-items-center justify-content-center action">
        <button class="btn btn-primary">ログインID</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.page-login{
  padding-top: 140px;
  .title{
    padding-bottom: 30px;
    font-size: 20px;
  }
  .form-login{
    width: 639px;
    height: 352px;
    border: 1px solid #ECECEC;
    border-radius: 17px;
    padding: 50px 100px;
    > *{
      margin-bottom: 30px;
      label{
        width: 100px;
      }
      input{
        border: 1px solid #DDDDDD;
        opacity: 1;
        height: 40px;
      }
      &.action{
        padding-top: 20px;
        button{
          width: 245px;
          height: 45px;
        }
      }
    }
  }
}
</style>
