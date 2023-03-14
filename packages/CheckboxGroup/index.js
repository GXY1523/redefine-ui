import XyCheckboxGroup from './checkboxGroup.vue'

// 为组件提供 install 安装方法，供按需引入
XyCheckboxGroup.install=function(Vue){
    Vue.component(XyCheckboxGroup.name,XyCheckboxGroup);
}

export default XyCheckboxGroup