# Button按钮
常用的按钮操作


### 基础用法
  <div class="row">
    <xy-button>默认按钮</xy-button>
    <xy-button type="primary">按钮</xy-button>
    <xy-button type="success">按钮</xy-button>
    <xy-button type="info">按钮</xy-button>
    <xy-button type="warning">按钮</xy-button>
    <xy-button type="danger">按钮</xy-button>
    
  </div>

  <div class="row">
    <xy-button plain>朴素按钮</xy-button>
    <xy-button plain type="primary">按钮</xy-button>
    <xy-button plain type="success">按钮</xy-button>
    <xy-button plain type="info">按钮</xy-button>
    <xy-button plain type="warning">按钮</xy-button>
    <xy-button plain type="danger">按钮</xy-button>
    
  </div>
  <div class="row">
    <xy-button plain round>圆角按钮</xy-button>
    <xy-button plain round type="primary">按钮</xy-button>
    <xy-button plain round type="success">按钮</xy-button>
    <xy-button plain round type="info">按钮</xy-button>
    <xy-button plain round type="warning">按钮</xy-button>
    <xy-button plain round type="danger">按钮</xy-button>
    
  </div>
  <!-- 圆形图标 -->
  <div class="row">
    <xy-button plain icon="sousuo" circle></xy-button>
    <xy-button plain icon="bi" circle type="primary"></xy-button>
    <xy-button plain icon="duihao" circle type="success"></xy-button>
    <xy-button plain icon="xin" circle type="info"></xy-button>
    <xy-button plain icon="shoucang" circle type="warning"></xy-button>
    <xy-button plain icon="lajitong" circle type="danger"></xy-button>
    
  </div>   

### 代码
```html
<div class="row">
    <xy-button>默认按钮</xy-button>
    <xy-button type="primary">按钮</xy-button>
    <xy-button type="success">按钮</xy-button>
    <xy-button type="info">按钮</xy-button>
    <xy-button type="warning">按钮</xy-button>
    <xy-button type="danger">按钮</xy-button>
    
  </div>

  <div class="row">
    <xy-button plain>朴素按钮</xy-button>
    <xy-button plain type="primary">按钮</xy-button>
    <xy-button plain type="success">按钮</xy-button>
    <xy-button plain type="info">按钮</xy-button>
    <xy-button plain type="warning">按钮</xy-button>
    <xy-button plain type="danger">按钮</xy-button>
    
  </div>
  <div class="row">
    <xy-button plain round>圆角按钮</xy-button>
    <xy-button plain round type="primary">按钮</xy-button>
    <xy-button plain round type="success">按钮</xy-button>
    <xy-button plain round type="info">按钮</xy-button>
    <xy-button plain round type="warning">按钮</xy-button>
    <xy-button plain round type="danger">按钮</xy-button>
    
  </div>
  <!-- 圆形图标 -->
  <div class="row">
    <xy-button plain icon="sousuo" circle></xy-button>
    <xy-button plain icon="duihao" circle type="primary"></xy-button>
    <xy-button plain icon="gx-icon-delete" circle type="success"></xy-button>
    <xy-button plain icon="gx-icon-delete" circle type="info"></xy-button>
    <xy-button plain icon="gx-icon-delete" circle type="warning"></xy-button>
    <xy-button plain icon="gx-icon-delete" circle type="danger"></xy-button>
    
  </div>
```

### 禁用状态

  <div class="row">
    <xy-button disabled>默认按钮</xy-button>
    <xy-button disabled type="primary">按钮</xy-button>
    <xy-button disabled type="success">按钮</xy-button>
    <xy-button disabled type="info">按钮</xy-button>
    <xy-button disabled type="warning">按钮</xy-button>
    <xy-button disabled type="danger">按钮</xy-button>
    
  </div>
    <div class="row">
      <xy-button plain disabled >朴素按钮</xy-button>
      <xy-button plain disabled  type="primary">按钮</xy-button>
      <xy-button plain disabled  type="success">按钮</xy-button>
      <xy-button plain disabled  type="info">按钮</xy-button>
      <xy-button plain disabled  type="warning">按钮</xy-button>
      <xy-button plain disabled  type="danger">按钮</xy-button>
      
    </div>

### 代码
```html
<div class="row">
    <xy-button disabled>默认按钮</xy-button>
    <xy-button disabled type="primary">按钮</xy-button>
    <xy-button disabled type="success">按钮</xy-button>
    <xy-button disabled type="info">按钮</xy-button>
    <xy-button disabled type="warning">按钮</xy-button>
    <xy-button disabled type="danger">按钮</xy-button>
    
  </div>
    <div class="row">
      <xy-button plain disabled >朴素按钮</xy-button>
      <xy-button plain disabled  type="primary">按钮</xy-button>
      <xy-button plain disabled  type="success">按钮</xy-button>
      <xy-button plain disabled  type="info">按钮</xy-button>
      <xy-button plain disabled  type="warning">按钮</xy-button>
      <xy-button plain disabled  type="danger">按钮</xy-button>
      
    </div>
```

### 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。
<xy-button type="primary" :loading="true">按钮</xy-button>
### 代码
```html
<xy-button type="primary" :loading="true">按钮</xy-button>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| - | - | - | - | - | 
| width | 卡片宽度 | Number | false | - | 
| imgSrc | 图片资源地址 | String | true | - | 
| imgHeight | 图片高度 | Number | false | - | 
| summary | 卡片概要 | String/Slot | false | - | 
| footer | 卡片底部 | Slot | false | - | 

    