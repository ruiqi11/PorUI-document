<template>
  <div>
    <por-popover>
      <por-button>上方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="bottom">
      <por-button>下方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="left">
      <por-button>左边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="right">
      <por-button>右边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
  </div>
</template>
<script>
export default {}
</script>
