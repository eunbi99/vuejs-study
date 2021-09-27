import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers:[
      {id:1, name:'eb', email:"eb@gmail.com",password:"12345"},
      {id:2, name:'ev', email:"ev@gmail.com",password:"12345"}
    ],
    isLogin:false, //로그인 안한 상태
    isLoginError: false  // 로그인 에러가 떴을 경우
  },
  mutations: { 
    //mutations는 state 값을 변화시킨다.

    //1. 로그인 성공 시
    loginSuccess(state,payload){
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    //2. 로그인 실패 시
    loginError(state){
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state){
      state.isLogin= false,
      state.isLoginError=false,
      state.userInfo = null
    }
  },
  actions: {
    //actions는 비즈니스 로직.

    //로그인 시도
    login({ state , commit },loginObj){ 
            //전체 유저에서 해당 이메일로 유저를 찾는다.
            let selectedUser = null
            state.allUsers.forEach(user =>{
                if(user.email === loginObj.email) selectedUser = user
            })
            if (selectedUser === null || selectedUser.password !== loginObj.password  )
                 commit("loginError") //일치하지 않을 경우 loginError 커밋
            else{
              commit("loginSuccess",selectedUser) //로그인한 객체가 selectedUser(payload)로 넘어온다.
              router.push({name : "mypage"}) //mypage라는 라우터로 푸시
            }
    },
    logout({ commit }) {
      commit("logout") //로그아웃을 할때 logout 함수 커밋 후 home으로 이동.
      router.push({ name: "home" }) 
    }
  }
})
