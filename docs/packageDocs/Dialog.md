# Dialog
对话框

### 示例
    <!-- <xy-dialog ></xy-dialog> -->

    <!-- <xy-dialog width="20%" top="10px"></xy-dialog> -->

    <!-- <xy-dialog >
      <ul>
        <li>2</li>
        <li>1</li>
      </ul>
    </xy-dialog> -->

    <xy-button type="primary" @click="visible=true">按钮</xy-button>
    <xy-dialog :visible.sync="visible" @close="close">
      <p>天干物燥，小心火烛</p>
      <xy-button type="primary" @click="visible=false">确定</xy-button>
      <xy-button @click="visible=false">取消</xy-button>
    </xy-dialog>

    <script>
    export default {  
    data(){
        return{
        visible:false
        }
    },
    methods:{
        close(value){
        this.visible=value
        }
    }
    }
    </script>