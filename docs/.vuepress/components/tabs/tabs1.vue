<template>
  <div>
    <por-tabs :selected="selected">
      <por-tabs-head>
        <por-tabs-item name="1">1</por-tabs-item>
        <por-tabs-item name="2">2</por-tabs-item>
        <por-tabs-item name="3" disabled>3</por-tabs-item>
      </por-tabs-head>
      <por-tabs-body>
        <por-tabs-pane name="1">content 1</por-tabs-pane>
        <por-tabs-pane name="2">content 2</por-tabs-pane>
        <por-tabs-pane name="3">content 3</por-tabs-pane>
      </por-tabs-body>
    </por-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      selected: '1'
    }
  }
}
</script>
