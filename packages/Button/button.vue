<template>
  <button class="xy-button" 
  :class="[`xy-button--${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled,'is-loading':loading}]"
  :disabled="disabled || loading"
  :loading="loading"
  @click="handleClick">
    <i class=" iconfont icon-loading" v-if="loading"></i>
    <i  v-if="icon&&!loading" :class="`iconfont icon-${icon} `"></i>
    <!-- 如果插槽内有内容，就显示span，反之不显示 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
    name:'XyButton',
    props:{
      type:{
        type:String,
        default:'default'
      },
      plain:{
        type:Boolean,
        default:false
      },
      round:{
        type:Boolean,
        default:false
      },
      circle:{
        type:Boolean,
        default:false
      },
      icon:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false
      },
      loading:{
        type:Boolean,
        default:false
      },
      icon:{
        type:String,
        default:"",
      },
      
    },
    methods:{
      handleClick(e){
        this.$emit('click',e)
      }
    }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
@import url(../fonts/iconfont.css);
</style>