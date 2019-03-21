import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import user from '@/views/user'
import pwd from '@/views/pwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path : '/login',
      name : 'login',
      component : Login,
      children : [
        { path: 'user' , name : 'user', component : user },
        { path: 'pwd' , name : 'pwd' , component : pwd }
      ]
    },
    // {
    //   path : '/login/header',
    //   component : Header
    // }
  ]
})
