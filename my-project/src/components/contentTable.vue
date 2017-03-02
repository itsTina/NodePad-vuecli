<template>
  <div class="event-all">
    <div class="table-box">
      <table class="event-table">
        <thead>
        <tr>
          <th>#</th>
          <th>所有事项</th>
          <th width="">类型</th>
          <th width="">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(value, index) in notapad">
          <td align="center">{{index + 1}}</td>
          <td>{{value.content}}</td>
          <td align="center">{{getType(value.type)}}</td>
          <td align="center" style="font-size: 0;">
            <button @click="showInput(index)">编辑</button>
            <button class="del-btn" @click="showDialog(index,value.id)">删除</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
  const types=['完成','未完成'];
  export default{
    computed:{
      notapad:function(){
        return this.$store.state.event;
      }
    },
    methods:{
      getType(type){
        return types[type-1];
      },
      showInput(index){
      },
      showDialog(index, id){}
      }
  }
</script>

<style type="text/css">
  .event-all {
    position: absolute;
    left: -5%;
    top: 70px;
    right: 0;
    bottom: 0;
    transform: translateX(5%);
    transition: transform .5s;
    overflow-Y: scroll;
    background: #fff;
  }
  .event-all.event-all-show {
    transform: translateX(0);
  }
  .event-all::-webkit-scrollbar {
    width: 0;
  }
  .event-all .table-box {
    width: 100%;
    max-width: 1000px;
    margin: 20px auto;
  }
  .event-all .table-box .event-table {
    width: 100%;
    padding: 0;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-spacing: 0px;
  }
  .event-all .table-box .event-table td, .event-all .table-box .event-table th {
    position: relative;
    height: 40px;
    min-width: 0;
    padding: 5px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .event-all .table-box .event-table button {
    padding: 3px 7px;
    font-size: 12px;
    color: #fff;
    background: #00a2ff;
    border: 0;
    margin: 0 3px 3px 0;
  }
  .event-all .table-box .event-table button.del-btn {
    background: #F44336;
  }
  .event-all .table-box .edit-input {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    height: 60px;
    padding: 10px 100px 10px 10px;
    box-sizing: border-box;
    z-index: 10;
    transform: translateY(-260px);
    transition: transform .3s;
    background: #f3f3f3;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  .event-all .table-box .edit-input.edit-input-show {
    transform: translateY(0);
  }
  .event-all .table-box .edit-input input {
    float: left;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
  }
  .event-all .table-box .edit-input button {
    position: absolute;
    right: 10px;
    width: 80px;
    height: 40px;
    background: #00a2ff;
    color: #fff;
    border: 0;
  }
  .event-all .table-box .screen-box {
    position: relative;
    padding: 0 0 10px 95px;
    height: 35px;
  }
  .event-all .table-box .screen-box .div-select {
    position: absolute;
    left: 0;
    top: 0;
    width: 85px;
    height: 35px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #eee;
    font-size: 12px;
    color: #999;
    cursor: pointer;
  }
  .event-all .table-box .screen-box .div-select:after {
    position: absolute;
    right: 5px;
    top: 10px;
    width: 7px;
    height: 7px;
    content: '';
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    transform: rotate(45deg);
  }
  .event-all .table-box .screen-box .div-select.active .div-select-body {
    height: 122px;
    border: 1px solid #eee;
    box-shadow: 0 0 1px #ddd;
  }
  .event-all .table-box .screen-box .div-value {
    line-height: 35px;
  }
  .event-all .table-box .screen-box .div-select-body {
    position: absolute;
    left: 0;
    top: 38px;
    width: 85px;
    height: 0;
    padding-left: 10px;
    line-height: 30px;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 10;
    box-shadow: none;
    border: none;
    border-radius: 3px;
    background: #fff;
    transition: all .3s;
  }
  .event-all .table-box .screen-box .div-search {
    width: 100%;
    height: 35px;
    line-height: 25px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #eee;
    font-size: 12px;
    font-family: Arial,'Microsoft YaHei';
    color: #999;
  }
</style>
