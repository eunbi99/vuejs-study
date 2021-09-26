import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers:[
      {id:1, name:'eb', email:"eb@gmail.com",password:"12345"},
      {id:2, name:'ev', email:"ev@gmail.com",password:"12345"}
    ],
    isLogin:false,
    isLoginError: false
  },
  mutations: {
    //로그인 성공 했을 때 상태값 변화
    loginSuccess(state){
      state.isLogin = true
      state.isLoginError = false
    },
    //로그인 실패시
    loginError(state){
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {
    //로그인 시도
    // eslint-disable-next-line no-unused-vars
    login({state , commit},signObj){ 
      console.log(signObj)      
    }
  }
})
