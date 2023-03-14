<template>
    <!-- transition 使对话框的出现有动画效果 -->
    <transition name="dialog-fade">
        <div class="xy-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <div class="xy-dialog" :style="{width:width,marginTop:top}">
                <div class="xy-dialog__header">
                    <slot name="title">
                        <span class="xy-dialog__title">{{ title }}</span>
                    </slot>
                    <!-- 关闭图标 -->
                    <!-- <button class="xy-dialog__headerbtn" @click="handleClose">
                        <i class="xy-dialog-close"></i>
                    </button> -->
                </div>
                <div class="xy-dialog__body">
                    <!-- 提示信息详情 -->
                    <slot></slot>
                </div>
                <div class="xy-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>    

                </div>
            </div>
        </div>
    </transition>
  
</template>

<script>
export default {
name:'XyDialog',
props:{
    title:{
        type:String,
        default:'提示'
    },
    width:{
        type:String,
        default:'50%'
    },
    top:{
        type:String,
        default:'15vh'
    },
    visible:{
        type:Boolean,
        default:false
    }
},
methods:{
    handleClose(){
        // console.log("qwe");
        // this.$emit('close',false)
        this.$emit('update:visible',false)
    }
}
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>