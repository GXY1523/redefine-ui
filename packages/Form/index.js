import XyForm from './form.vue'

// 为组件提供 install 安装方法，供按需引入
XyForm.install=function(Vue){
    Vue.component(XyForm.name,XyForm);
}

export default XyForm