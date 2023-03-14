<template>
  <label class="xy-radio" :class="{'is-checked':label===model}">
    <span class="xy-radio__input">
        <span class="xy-radio__inner"></span>
        <input 
        type="radio" 
        class="xy-radio__original" 
        :value="label" 
        :name="name" 
        v-model="model">
    </span>
    <span class="xy-radio__label">
        <slot></slot>
        <!-- 未传参 则将label当成内容 -->
        <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
name:'XyRadio',
inject:{
    RadioGroup:{
        default:''
    }
},
props:{
    label:{
        type:[String,Number,Boolean],
        default:''
    },
    value:null,
    name:{
        type:String,
        default:''
    }
},
computed:{
    model:{
        get(){
            return this.isGroup?this.RadioGroup.value: this.value
        },
        set(value){
            // 触发父组件的input事件
            
            this.isGroup?this.RadioGroup.$emit('input',value):this.$emit('input',value)
        }
    },
    isGroup(){
        // 判断radio 是否被radiogroup 包裹
        return !!this.RadioGroup
    }
}
}

</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>