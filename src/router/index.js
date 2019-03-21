import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import user from '@/views/user'
import pwd from '@/views/pwd'
// import dashboard from '@views/dashboard'

Vue.use(Router)

// Router.beforeEach((to,from,next) => {
//   var token = localStorage.getItem('token');
//   if(token) {
//     next()
//   }else {
//     if(to.path == '/login') {
//       next()
//     }else {
//       next({ name : 'login' })
//     }
//   }
// })

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
    // {
    //   path : '/dashboard',
    //   name : 'dashboard',
    //   component : dashboard
    // }
  ]
})
