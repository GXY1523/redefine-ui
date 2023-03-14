import XyDialog from './dialog.vue'

// 为组件提供 install 安装方法，供按需引入
XyDialog.install=function(Vue){
    Vue.component(XyDialog.name,XyDialog);
}

export default XyDialog