import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const rejectAuthUser = (to,from,next) => {
  if(store.state.isLogin === true){
    //이미 로그인된 유저는 reject
    alert("이미 로그인 상태입니다.")
    next('/') //home으로 리다이렉트
  }else{
    next() // 그대로 보내준다. (router guard)
  }
}

const onlyAuthUser = (to,from,next) => {
  if(store.state.isLogin === false){
    //로그안 안한 유저는 막아야한다.
    alert("로그인이 필요한 기능입니다..")
    next('/') //home으로 리다이렉트
  }else{
    next() // 그대로 보내준다. (router guard)
  }
}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', //주소
      name: 'home',
      component: () =>
        import("./views/Home.vue")
    },
    {
      path: '/login',
      name: 'login',
      /* beforeEnter 
      : 라우터에 들어오기전에 함수를 실행시켜보고, next나 path가 지정되어있으면, 지정된 경로로 리다이렉션.
        지정된 경로가 없다면 아래의 login.vue로 이동!
        */
      beforeEnter : rejectAuthUser, 
      component: () =>
        import("./views/Login.vue")
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () =>
        import("./views/Mypage.vue")
    },

  ]
})
