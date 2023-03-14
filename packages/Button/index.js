import XyButton from './button.vue'

// 为组件提供 install 安装方法，供按需引入
XyButton.install=function(Vue){
    Vue.component(XyButton.name,XyButton);
}

export default XyButton