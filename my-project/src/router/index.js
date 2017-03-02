import Vue from 'vue'
import cntEvent from '@/components/contentEvent'
import cntTable from '@/components/contentTable'
//import cntTable from './contentTable.vue'
import Router from 'vue-router'

Vue.use(Router);
const music={template:'<div>music</div>'};
export default new Router({
  routes:[
    {
      path:'/',
      component:{
        template:'<cntEvent/>',
        components:{cntEvent}
      },
      name:'main'
    },
    {
      path:'/del',
      component:music
    },
    {
      path:'/table',
      component:{
        template:'<cntTable/>',
        components:{cntTable}
      },
    }
  ]
})

