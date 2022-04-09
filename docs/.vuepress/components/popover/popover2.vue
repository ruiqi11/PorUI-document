<template>
  <div>
         <por-popover trigger="hover">
      <por-button>上方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="bottom" trigger="hover">
      <por-button>下方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="left" trigger="hover">
      <por-button>左边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="right" trigger="hover">
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
