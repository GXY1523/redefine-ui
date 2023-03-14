import XyCheckbox from './checkbox.vue'

// 为组件提供 install 安装方法，供按需引入
XyCheckbox.install=function(Vue){
    Vue.component(XyCheckbox.name,XyCheckbox);
}

export default XyCheckbox