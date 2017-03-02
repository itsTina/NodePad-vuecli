<template>
  <div class="event-tools" :class="{'show-event-tools':isShow}">
    <ul class="tools-sidebar">
      <li>
        <router-link class="tools-btn" to="table">数据表格</router-link>
      </li>
      <li>
        <router-link class="tools-btn" to="/">编辑数据</router-link>
      </li>
      <li>
        <router-link class="tools-btn" to="del">午</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        isShow:true
      }
    },
    methods:{

    }
  }
</script>

<style type="text/css">
  .event-tools {
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
    width: 250px;
    padding: 30px 20px;
    box-sizing: border-box;
    transform: translateX(-250px);
    transition: transform .3s;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    font-size: 16px;
  }
  .event-tools.show-event-tools {
    transform: translateX(0);
  }
  .event-tools .tools-sidebar > li {
    line-height: 60px;
  }
  .event-tools .tools-btn {
    width:100px;
    height: 40px;
    line-height: 26px;
    color: #fff;
    border: 1px solid #20a0ff;
    background: #20a0ff;
    -webkit-transition: background .3s ease-in;
    transition: background .3s ease-in;
    display: inline-block;
    text-decoration: none;
  }
  .event-tools .tools-btn:hover {
    background: #4db3ff;
  }
  .event-tools pre {
    white-space: pre-wrap;
    font-size: 14px;
    font-family: arial,"microsoft yahei";
    line-height: 20px;
  }
</style>
