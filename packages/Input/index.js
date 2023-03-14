import XyInput from './input.vue'

// 为组件提供 install 安装方法，供按需引入
XyInput.install=function(Vue){
    Vue.component(XyInput.name,XyInput);
}

export default XyInput