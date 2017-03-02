<template>
  <div id="app">
    <app-header @showTools="tools=!tools"/>
    <section class="container">
      <router-view></router-view>
      <!--左右tool框-->
      <app-tool v-show="tools" @opentable="table=true;tools=false;"></app-tool>
    </section>
    <!--<app-table @deldialog="delData" :is-show="table" @close="table = false"></app-table>-->
  </div>
</template>

<script>
  import appHeader from './components/app-header.vue'
  import appTable from './components/app-table.vue'
  //import appEvent from './components/app-event.vue'
  import appTool from './components/app-tool.vue'
export default {
  name: 'app',
  data(){
    return {
      table: false,
      tools:false
    }
  },
  components:{
    appHeader,
    appTable,
    appTool
  },
  methods:{
    changePages:function(){}
  }
}
</script>

<style type="text/css">
  html, body, ul, li, input {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
  }
  input, button {
    -webkit-tap-highlight-color: transparent;
  }
  input[type=text] {
    -webkit-appearance: none;
  }
  button ,.event-tools .tools-btn{
    padding: 7px 0;
    outline: none;
    text-align: center;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }
  body, #app {
    width: 100%;
    overflow-x: hidden;
  }
  ul {
    list-style: none;
  }
  .container {
    width: 100%;
    padding: 0 10px;
    max-width: 800px;
    margin: auto;
    box-sizing: border-box;
  }
  .container.hide {
    display: none;
  }
  .event-content .event-tab {
    position: relative;
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    background: #00a2ff;
  }
  .event-content .event-tab span {
    position: absolute;
    right: 20px;
    top: 15px;
    width: 10px;
    height: 10px;
    content: '';
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(135deg);
    transition: transform .3s;
  }
  .event-content .event-tab span.close-span {
    transform: rotate(45deg);
  }
  .event-content ul.event-box {
    list-style: none;
    overflow: hidden;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    transition: height .3s;
  }
  .event-content ul.event-box .event-list {
    position: relative;
    min-height: 44px;
    line-height: 25px;
    padding: 10px 100px 10px 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
  }
  .event-content ul.event-box .event-list input[type=checkbox] {
    position: absolute;
    left: 15px;
    top: 12px;
    width: 20px;
    height: 20px;
  }
  .event-content ul.event-box .event-list .btn {
    float:right;
    width: 50px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    background: #fff;
    border: 1px solid #c0ccda;
    color: #1f2d3d;
    font-size: 12px;
  }
  .event-content ul.event-box .event-list .event-time {
    position: absolute;
    right: 10px;
    top: 0;
    line-height: 44px;
    font-size: 12px;
    color: #aaa;
  }
  .event-content ul.event-box .event-list .event-delete {
    text-decoration: line-through;
    color: #999;
  }
</style>
