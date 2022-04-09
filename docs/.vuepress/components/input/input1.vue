<template>
  <div>
    <por-input class="por-input" value="默认样式"></por-input>
    <br/>
    <por-input class="por-input" value="内容提示" title="内容提示"></por-input>
    <br/>
    <por-input class="por-input" value="禁止输入" disabled></por-input>
    <br/>
    <por-input class="por-input" value="只读" readonly></por-input>
    <br/>
    <por-input class="por-input" value="值" error="错误"></por-input>
    <br/>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
  .por-input{
    margin-top: 10px;
  }
</style>
