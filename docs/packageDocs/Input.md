# Input
输入框

### 示例
    <!-- 基础用法 -->
    <xy-input placeholder="请输入用户名"  v-model="inputthing"></xy-input>
    <!-- 禁用 -->
    <xy-input placeholder="请输入用户名" type="password" name="username" disabled></xy-input>
    <!-- 清空 -->
    <xy-input placeholder="请输入用户名"  v-model="inputthing" clearable></xy-input>
    <!-- 密码框 -->
    <xy-input placeholder="请输入用户名" type="password"  v-model="inputthing" show-password></xy-input>
    
    <script>
        export default {
        
        data(){
            return{
            inputthing:''
            }
        },
        
        }
    </script>