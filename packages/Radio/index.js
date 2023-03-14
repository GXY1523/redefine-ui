import XyRadio from './radio.vue'

// 为组件提供 install 安装方法，供按需引入
XyRadio.install=function(Vue){
    Vue.component(XyRadio.name,XyRadio);
}

export default XyRadio