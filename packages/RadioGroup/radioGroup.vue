<template>
  <div class="xy-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
name:'XyRadioGroup',
props:{
    value:null
},
provide(){
    return{
        RadioGroup:this
    }
    
}
}
</script>

<style>

</style>