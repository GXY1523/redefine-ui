<template>
  <div class="xy-form-item">   
    <label  class="xy-form-item__label" :style="{width:this.Form.labelWidth}">{{ label }}</label>
    <div class="xy-form-item__content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name:'XyFormItem',
props:{
    label:String
},
inject:['Form']
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>