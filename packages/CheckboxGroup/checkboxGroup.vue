<template>
  <div class="xy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
name:'XyCheckboxGroup',
props:{
  value:{
    type:Array
  }
},
provide(){
  return{
    CheckboxGroup:this
  }
}
}
</script>

<style>

</style>