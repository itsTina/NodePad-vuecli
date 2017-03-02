<template>
  <div class="event-add">
    <input type="text" placeholder="待办事项" class="n-input"  v-model="content"  @keyup.enter="submit">
    <button class="add-btn"  @click="submit">提交</button>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        content: ''
      }
    },
    methods:{
      submit(){
        debugger;
        let self = this,
          params = {
            id: 0,
            type: 1,
            content: '',
            time: ''
          };
        self.content = self.content.trim();
        if(self.content){
          params.content = self.content;
          /*self.$store.dispatch('addevent',params);*/
          self.$store.commit('ADDEVENT',{items:params});
          self.content = '';
        }
      }
    }
  }
</script>

<style type="text/css" scoped>
  .event-add {
    position: relative;
    padding: 30px 90px 30px 0;
    font-size: 16px;
  }
  .event-add .n-input {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 26px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-sizing: border-box;
    font-size: inherit;
  }
  .event-add .n-input:focus {
    outline: none;
    border-color: #20a0ff;
  }
  .event-add .add-btn {
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: #fff;
    border: 1px solid #20a0ff;
    background: #20a0ff;
    transition: background .3s ease-in;
  }
  .event-add .add-btn:hover {
    background: #4db3ff;
  }
</style>
