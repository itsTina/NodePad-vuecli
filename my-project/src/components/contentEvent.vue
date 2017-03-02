<template>
  <div class="">
    <app-event></app-event>
    <div class="event-content">
      <div class="event-tab" @click="changeCollapse(0,$event)"> 未完成
        <span :class="{'close-span':!collapse[0].show}"></span>
      </div>

      <ul class="event-box" :style="{height:'auto',display:'block'}">
        <li class="event-list" v-for="value in getToDo">
          <span>{{value.content}}</span>
          <button class="btn" @click="moveToDone(value.id, $event)">完成</button>
          <button class="btn" @click="moveCancel(value.id)">取消</button>
        </li>
      </ul>
      <div class="event-tab" @click="changeCollapse(1,$event)">已完成
        <span :class="{'close-span': !collapse[1].show}"></span>
      </div>
      <ul class="event-box" >
        <li class="event-list" v-for="value in getDone" >
          <span>{{value.content}}</span>
          <button class="btn" @click="moveToDo(value.id,$event)">取消</button>
          <span class="event-time">{{value.time}}</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  import appEvent from './app-event.vue'
  export default{
    data () {
      return {
        collapse:[
          {
            show: true,
            contentHeight: 'auto'
          },
          {
            show: true,
            contentHeight: 'auto'
          }
        ],
        content: ''
      }
    },
    components:{
      appEvent
    },
    computed:{
      getToDo:function(){
        const self = this;
        return self.$store.state.event.filter(function(d){
          if(d.type === 1){
            return d;
          }
        });
      },
      getDone(){
        const self = this;
        return self.$store.state.event.filter(function(d){
          if(d.type === 2){
            return d;
          }
        });
      }
    },
    methods:{
      changeCollapse(num, event) {},
      moveToDone(id, event){
        this.$store.commit('DONEEVENT',id);
      },
      moveCancel(id, event){
        this.$store.commit('REMOVEEVENT',id);
      },
      moveToDo(id, event){
        this.$store.commit('TODOEVENT',id);
      }
    }
  }
</script>

