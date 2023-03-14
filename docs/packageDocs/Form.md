# Form
表单

### 示例

    <xy-form :model="model" label-width="80px">
      <xy-form-item label="用户名">
        <xy-input placeholder="请输入用户名" v-model="model.username"></xy-input>
      </xy-form-item>
      <xy-form-item label="选择">
        <xy-switch v-model="model.active"></xy-switch>
      </xy-form-item>
    </xy-form>

    <script>
    export default {
    
        data(){
            return{
                model:{
                    username:'',
                    active:true
                }
            }
        },   
    }
    </script>
