import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters:{
    allUsersCount: state => {
      return state.allUsers.length //모든 users의 수 리턴
    },
    countOfSeoul: state => {
      let count=0
      //forEach : allUser의 요소들을 반복하면서 실행해준다.
      //user는 요소 하나를 가리킨다.
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++
      })
      return count //서울에 사는 유저수 리턴
    },
    percentOfSeoul: (state, getters) =>{
      return Math.round(getters.countOfSeoul / getters.allUsersCount *100)
      

    }
  },
  mutations: {
    //payload : 폼에서 넘겨받은 인자를 받을 수 있는 곳 
    addUsers: (state,payload) => {
      state.allUsers.push(payload)

    }
  },
  actions: {

  }
})
