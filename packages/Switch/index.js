import XySwitch from './switch.vue'

// 为组件提供 install 安装方法，供按需引入
XySwitch.install=function(Vue){
    Vue.component(XySwitch.name,XySwitch);
}

export default XySwitch