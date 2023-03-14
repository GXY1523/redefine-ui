import XyRadioGroup from './radioGroup.vue'

// 为组件提供 install 安装方法，供按需引入
XyRadioGroup.install=function(Vue){
    Vue.component(XyRadioGroup.name,XyRadioGroup);
}

export default XyRadioGroup