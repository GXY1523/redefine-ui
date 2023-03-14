import Vue from 'vue'
import App from './App.vue'
import RedefinedemoUi from '../packages'
// import XyButton from './components/packages/Button/button.vue'
// import XyDialog from './components/packages/Dialog/dialog.vue'
// import XyInput from './components/packages/Input/input.vue'
// import XySwitch from './components/packages/Switch/switch.vue'
// import XyRadio from './components/packages/Radio/radio.vue'
// import XyRadioGroup from './components/packages/RadioGroup/radioGroup.vue'
// import XyCheckbox from './components/packages/Checkbox/checkbox.vue'
// import XyCheckboxGroup from './components/packages/CheckboxGroup/checkboxGroup.vue'
// import XyForm from './components/packages/Form/form.vue'
// import XyFormItem from './components/packages/FormItem/formItem.vue'


Vue.config.productionTip = false
Vue.use(RedefinedemoUi)
// Vue.component(XyButton.name,XyButton)
// Vue.component(XyDialog.name,XyDialog)
// Vue.component(XyInput.name,XyInput)
// Vue.component(XySwitch.name,XySwitch) 
// Vue.component(XyRadio.name,XyRadio) 
// Vue.component(XyRadioGroup.name,XyRadioGroup) 
// Vue.component(XyCheckbox.name,XyCheckbox) 
// Vue.component(XyCheckboxGroup.name,XyCheckboxGroup) 
// Vue.component(XyForm.name,XyForm) 
// Vue.component(XyFormItem.name,XyFormItem) 

new Vue({
  render: h => h(App)
}).$mount('#app')
