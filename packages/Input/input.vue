<template>
    <!-- xy-input--suffix 如果有小图标，就加这个类，反之不加 -->
  <div class="xy-input " :class="{'xy-input--suffix':showSuffix}">
    <input 
    type="text" 
    class="xy-input__inner "
    :class="{'is-disabled':disabled}"
    :placeholder="placeholder"
    :type="showPassword ? (passwordVisible ?'text':'pasword') : type"
    :name="name"
    :disabled="disabled"
    :value="value"
    @input="handleInput"
    >

    <span class="xy-input__suffix " v-if="showSuffix" >
        <!-- 清除 、 密码 图标 -->
        <i class="iconfont icon-ziyuanxhdpi" v-if="clearable && value" @click="clear"></i>
        <i class="iconfont icon-yanjing_xianshi" v-if="showPassword" @click="handlePassword" :class="{'xy-icon-view-active':passwordVisible}"></i>
    </span>
  </div>
</template>

<script>
export default {
name:'XyInput',
data(){
    return{
        // 用于控制是否显示密码框
        passwordVisible:false
    }
},
props:{
    placeholder:{
        type:String,
        default:''
    },
    type:{
        type:String,
        default:'text'
    },
    name:{
        type:String,
        default:''
    },
    disabled:{
        type:Boolean,
        default:false
    },
    value:{
        type:String,
        default:''
    },
    clearable:{
        type:Boolean,
        default:false
    },
    showPassword:{
        type:Boolean,
        default:false
    }
},
methods:{
    handleInput(e){
        
        this.$emit('input',e.target.value)
    },
    // 内容清空
    clear(){
        this.$emit('input','')
    },
    // 显示密码
    handlePassword(){
this.passwordVisible=!this.passwordVisible
    }
},
computed:{
    showSuffix(){
        return this.clearable || this.showPassword
    },
    
}
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
@import url(../fonts/iconfont.css);
</style>