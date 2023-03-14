<template>
  <div id="app">
    <!-- <xy-form :model="model" label-width="80px">
      <xy-form-item label="用户名">
        <xy-input placeholder="请输入用户名" v-model="model.username"></xy-input>
      </xy-form-item>
      <xy-form-item label="选择">
        <xy-switch v-model="model.active"></xy-switch>
      </xy-form-item>
    </xy-form> -->

    <div class="row">
    <xy-button plain icon="sousuo" circle></xy-button>
    <xy-button plain icon="bi" circle type="primary"></xy-button>
    <xy-button plain icon="duihao" circle type="success"></xy-button>
    <xy-button plain icon="xin" circle type="info"></xy-button>
    <xy-button plain icon="shoucang" circle type="warning"></xy-button>
    <xy-button plain icon="lajitong" circle type="danger"></xy-button>
    
  </div>   
  <xy-button type="primary" :loading="true">按钮</xy-button>
  <xy-button disabled>默认按钮</xy-button>
   
      <!-- checkbox -->
      <!-- <xy-checkbox v-model="active">是否选中</xy-checkbox> -->
    <!-- 多选框组 -->
    <!-- <xy-checkbox-group v-model="hobby">
      <xy-checkbox label="唱歌"></xy-checkbox>
      <xy-checkbox label="跳舞"></xy-checkbox>
      <xy-checkbox label="打篮球"></xy-checkbox>
    </xy-checkbox-group> -->
    
  </div>
</template>

<script>

export default {
  name:'App',
  components:{},
  data(){
    return{
      // model:{
      //   username:'',
      //   active:true
      // }
      // checkbox
      // active:false,
      // hobby:['唱歌','跳舞','打篮球']
    }
  },
  
}
</script>

<style lang="scss" scoped>

</style>
