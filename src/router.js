import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import InProgress from './views/InProgress.vue'
import Completed from './views/Completed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
	{
		path:'/',
		redirect:'/home'
	},
    {
      path: '/inprogress',
      name: 'inProgress',
      component: InProgress
    },
    {
      path: '/completed',
      name: 'completed',
      component: Completed 
    }
  ]
})
