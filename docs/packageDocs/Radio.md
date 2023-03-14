# Radio
单选框

### 样例
    <xy-radio label="1" v-model="gender">女</xy-radio>
    <xy-radio label="0" v-model="gender">男</xy-radio>

    <xy-radio label="1" v-model="gender"></xy-radio>
    <xy-radio label="0" v-model="gender"></xy-radio>
    
    <!-- 单选框组 -->
    <xy-radio-group v-model="gender">
      <xy-radio label="1" >女</xy-radio>
      <xy-radio label="0" >男</xy-radio>
    </xy-radio-group>
    <script>
        export default {       
        data(){
            return{
            gender:'1'
            }
        },
        
        }
    </script>