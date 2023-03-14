<template>
  <label  class="xy-checkbox" :class="{'is-checked':isChecked}">
    <span class="xy-checkbox__input">
        <span class="xy-checkbox__inner"></span>
        <input 
        type="checkbox" 
        class="xy-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
        >
    </span>
    <span class="xy-checkbox__label">
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
    name:'XyCheckbox',
    inject:{
        CheckboxGroup:{
            default:''
        }
    },
    props:{
        label:{
            type:String,
            default:''
        },
        value:{
            type:Boolean,
            default:false
        },
        name:{
            type:String,
            default:''
        }
    },
    computed:{
    model:{
        get(){
            return this.isGroup?this.CheckboxGroup.value: this.value
        },
        set(value){
            // 触发父组件的input事件
            
            this.isGroup?this.CheckboxGroup.$emit('input',value):this.$emit('input',value)
        }
    },
    isGroup(){
        // 判断radio CheckboxGroup 包裹
        return !!this.CheckboxGroup
    },
    isChecked(){
        return this.isGroup?this.model.includes(this.label):this.model
    }
}
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>