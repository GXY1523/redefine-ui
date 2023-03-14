import XyFormItem from './formItem.vue'

// 为组件提供 install 安装方法，供按需引入
XyFormItem.install=function(Vue){
    Vue.component(XyFormItem.name,XyFormItem);
}

export default XyFormItem

