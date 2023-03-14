# Checkbox
多选框

### 样例
    <xy-checkbox v-model="active">是否选中</xy-checkbox>
    <!-- 多选框组 -->
    <xy-checkbox-group v-model="hobby">
      <xy-checkbox label="唱歌"></xy-checkbox>
      <xy-checkbox label="跳舞"></xy-checkbox>
      <xy-checkbox label="打篮球"></xy-checkbox>
    </xy-checkbox-group>
    <script>
        export default {
        data(){
            return{
            active:false,
            hobby:['唱歌','跳舞','打篮球']
            }
        },       
        }
    </script>