<template>
</template>

<script>
  export default{
    methods:{
      showTools(){

      }
    }
  }
</script>

<style type="text/css">
  header {
    width: 100%;
    height: 70px;
    background: #00a2ff;
  }
  header h1 {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    line-height: 70px;
    text-align: center;
    color: #fff;
  }
  header h1 a.t-btn {
    position: absolute;
    right: 10px;
    top: 22px;
    width: 30px;
    height: 26px;
    cursor: pointer;
  }
  header h1 span, header h1 span:before, header h1 span:after {
    position: absolute;
    left: 0;
    width: 30px;
    height: 4px;
    content: '';
    background: #fff;
  }
  header h1 span {
    top: 11px;
  }
  header h1 span:before {
    top: 0;
    transform: translateY(-7px);
    transition: all .3s;
  }
  header h1 span:after {
    transform: translateY(7px);
    transition: all .3s;
  }
</style>
