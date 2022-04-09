<template>
  <div>
    <por-button @click="onClickButton" autoClose="false">上方弹出</por-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
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
