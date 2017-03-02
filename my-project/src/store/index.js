/**
 * Created by mating on 2017/3/1.
 */

import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
const localEvent = function(item){
  this.get = function () {
    return JSON.parse(localStorage.getItem(item));
  }
  this.set = function (obj) {
    localStorage.setItem(item,JSON.stringify(obj));
  }
  this.clear = function () {
    localStorage.removeItem(item);
  }
}
const local = new localEvent('lx_notepad');
const state = local.get() || {
    event: [],
    count: 0
  };

const mutations = {
  ADDEVENT(states,obj){
    states.count++;
    obj.items.id = states.count;
    states.event.unshift(obj.items);
    local.set(states);
  },
  REMOVEEVENT(states,id){
    states.event=states.event.filter((v)=>{
      return v.id!=id;
    });
    states.count=states.event.length;
    local.set(states);
  },
  DONEEVENT(states,id){
    // debugger;
    states.event=states.event.filter((v)=>{
      if(v.id==id){
        v.type=2;
      }
      return v;
    });
    local.set(states);
  },
  TODOEVENT(states,id){
    // debugger;
    states.event = states.event.filter((v)=> {
      if (v.id == id) {
        v.type = 1;
      }
      return v;
    });
  }
}
export default new Vuex.Store({
  state,mutations
})
