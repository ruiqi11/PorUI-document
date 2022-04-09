<template>
  <div>
    <por-input v-model="value"></por-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value: '1'
    }
  },
}
</script>
