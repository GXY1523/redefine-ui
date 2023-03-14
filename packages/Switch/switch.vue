<template>
    <div class="xy-switch" 
    :class="{'is-checked':value}" 
    @click="handleClick" 
    
    >
    
        <span class="xy-switch__core" ref="core" >
            <!-- 小圆球 -->
            <span class="xy-switch__button"></span>
        </span>
        <input class="xy-switch__input" type="checkbox" :name="name" ref="input">
    </div>
</template>

<script>
export default {
name:'XySwitch',
props:{
    value:{
        type:Boolean,
        default:false
    },
    activeColor:{
        type:String,
        default:''
    },
    inactiveColor:{
        type:String,
        default:''
    },
    name:{
        type:String,
        default:''
    },
    disabled:{
        type:Boolean,
        default:false
    },
},
methods:{
    async handleClick(){
        this.$emit('input',!this.value)
        // 点击的时候 修改背景颜色
        // 数据修改后 等待DOM更新，再修改按钮颜色
        await this.$nextTick()
        this.setColor()
        this.$refs.input.checked=this.value
    },
    setColor(){
        if(this.activeColor || this.inactiveColor){
        let color=this.value?this.activeColor:this.inactiveColor
        this.$refs.core.style.borderColor=color
        this.$refs.core.style.backgroundColor=color
    }
    }
},
mounted(){
    // 修改开关颜色
    this.setColor()
    // 控制checkbox的checkbox
    this.$refs.input.checked=this.value
}
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>