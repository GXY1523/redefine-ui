# Switch
开关

### 示例

    <!-- <xy-switch v-model="active"></xy-switch> -->
    <!-- 自定义颜色 -->
    <!-- <xy-switch v-model="active" active-color="red" inactive-color="green" ></xy-switch> -->
    <!-- 与 checkbox 同步切换(此时checkbox样式隐藏) -->
    <!-- <xy-switch v-model="active" active-color="red" inactive-color="green" name="switchname"></xy-switch> -->
    <!-- 禁用 disabled(未写完) -->
    <xy-switch v-model="active" name="switchname" disabled></xy-switch>
    
    <script>
        export default {       
            data(){
                return{
                active:false,
                switchname:''
                }
            },       
        }
    </script>
