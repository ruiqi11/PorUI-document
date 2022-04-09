<template>
  <div>
    <por-button @click="onClickButton" autoClose="false">h3标题</por-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClickButton () {
      this.$toast('<h3 style="color:red;">h3标题提示</h3>', {
        enableHtml: true
      })
    }
  }
}
</script>
<style>
  .por-toast {
    z-index: 30;
  }
</style>
