import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    loginSuccess(state){
      state.isLogin = true
      state.isLoginError = false
    },
    //2. 로그인 실패 시
    loginError(state){
      state.isLogin = false
      state.isLoginError = true
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
            selectedUser === null
              ? commit("loginError") //null 일경우 mutations의 loginError를 커밋
             : selectedUser.password !== loginObj.password //null 아니고 
                ? commit("loginError") //일치하지 않을 경우 loginError 커밋
                : commit("loginSuccess") //로그인 성공시 loginSuccess 커밋
            
    }
  }
})
