<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field
      label="아이디"
      v-model="userId"
    ></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field
      label="이름"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="주소"
      v-model="address"
    ></v-text-field>
    <v-text-field
      label="이미지"
      v-model="src"
    ></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        userId: null,
        password: null,
        name: null,
        address: null,
        src: null
      }
    },
    methods: {
      //...mapMutations(['addUsers','double']),
      ...mapActions(['addUsers']),
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        //this.$store.commit('addUsers',userObj) /* addUsers라는 mutations를 실행(commit)시켜라 + userObj를 인자로 담아 보내라(payload) */
       // this.addUsers(userObj) /* userObj를 addUsers의 인자로 넘겨준다. */
       // this.$store.dispatch('addUsers',userObj) /* store에 있는 action에 있는 addUsers를 실행 */
       this.addUsers(userObj)
        this.clearForm()
      },
      clearForm() {
        this.userId = null,
        this.password = null,
        this.name = null,
        this.address = null,
        this.src = null
      }
    }
  }
</script>